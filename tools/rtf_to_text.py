#!/usr/bin/env python3
"""Convert RTF files to plain text (UTF-8) preserving Portuguese accents."""
import re
import sys
from pathlib import Path

def rtf_to_text(rtf: str) -> str:
    # Remove font/color tables and headers
    rtf = re.sub(r"\\fonttbl[^}]*\}", "", rtf)
    rtf = re.sub(r"\\colortbl[^}]*\}", "", rtf)
    rtf = re.sub(r"\\\*\\expandedcolortbl[^}]*\}", "", rtf)
    rtf = re.sub(r"\\\*\\listtable[\s\S]*?\}\}\}", "", rtf)
    rtf = re.sub(r"\\\*\\listoverridetable[\s\S]*?\}\}", "", rtf)
    rtf = re.sub(r"\\\*\\rsidtbl[^}]*\}", "", rtf)

    out = []
    i = 0
    n = len(rtf)
    while i < n:
        c = rtf[i]
        if c == "\\":
            # Hex escape \'xx
            if i + 1 < n and rtf[i+1] == "'":
                hex_pair = rtf[i+2:i+4]
                try:
                    out.append(bytes([int(hex_pair, 16)]).decode("cp1252"))
                except Exception:
                    pass
                i += 4
                continue
            # Unicode \uNNNN
            m = re.match(r"\\u(-?\d+)\s?", rtf[i:])
            if m:
                code = int(m.group(1))
                if code < 0:
                    code += 65536
                try:
                    out.append(chr(code))
                except Exception:
                    pass
                i += m.end()
                if i < n and rtf[i] == "?":
                    i += 1
                continue
            # Control word
            m = re.match(r"\\([a-zA-Z]+)(-?\d+)?\s?", rtf[i:])
            if m:
                cw = m.group(1)
                if cw in ("par", "line", "sect", "page"):
                    out.append("\n")
                elif cw == "tab":
                    out.append("\t")
                i += m.end()
                continue
            if i + 1 < n:
                out.append(rtf[i+1])
                i += 2
                continue
            i += 1
        elif c in "{}":
            i += 1
        else:
            out.append(c)
            i += 1
    text = "".join(out)
    text = re.sub(r"\n{3,}", "\n\n", text)
    # Strip surrogate pairs (combine) and lone surrogates
    fixed = []
    j = 0
    L = len(text)
    while j < L:
        ch = text[j]
        cp = ord(ch)
        if 0xD800 <= cp <= 0xDBFF and j + 1 < L:
            low = ord(text[j+1])
            if 0xDC00 <= low <= 0xDFFF:
                combined = 0x10000 + ((cp - 0xD800) << 10) + (low - 0xDC00)
                try:
                    fixed.append(chr(combined))
                except Exception:
                    pass
                j += 2
                continue
        if 0xD800 <= cp <= 0xDFFF:
            j += 1
            continue
        fixed.append(ch)
        j += 1
    return "".join(fixed).strip()

if __name__ == "__main__":
    src = Path(sys.argv[1])
    dst = Path(sys.argv[2]) if len(sys.argv) > 2 else src.with_suffix(".txt")
    raw = src.read_text(encoding="utf-8", errors="ignore")
    out = rtf_to_text(raw)
    with open(dst, "w", encoding="utf-8", errors="replace") as f:
        f.write(out)
    print(f"Wrote {dst} ({len(out)} chars)")

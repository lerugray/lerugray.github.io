#!/usr/bin/env python3
"""Generate the wargame counter brand mark used on the personal site.

Produces public/wargame-counter.png at 256x256, intended for display at
small sizes (16x16 next to brand text, 32x32 above the home H1).
"""
import cairo
import math
import os

WIDTH, HEIGHT = 256, 256

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_PATH = os.path.join(PROJECT_ROOT, "public", "wargame-counter.png")

RED = (0xc9 / 255, 0x48 / 255, 0x4e / 255, 1)
WHITE = (0xf5 / 255, 0xf0 / 255, 0xe6 / 255, 1)
BLACK = (0x0c / 255, 0x0b / 255, 0x09 / 255, 1)

surface = cairo.ImageSurface(cairo.FORMAT_ARGB32, WIDTH, HEIGHT)
ctx = cairo.Context(surface)


def rounded_rect(ctx, x, y, w, h, r):
    ctx.new_sub_path()
    ctx.arc(x + w - r, y + r, r, -math.pi / 2, 0)
    ctx.arc(x + w - r, y + h - r, r, 0, math.pi / 2)
    ctx.arc(x + r, y + h - r, r, math.pi / 2, math.pi)
    ctx.arc(x + r, y + r, r, math.pi, 3 * math.pi / 2)
    ctx.close_path()


PAD = 16
BORDER = 8
RADIUS = 18

cx, cy = PAD, PAD
cw, ch = WIDTH - 2 * PAD, HEIGHT - 2 * PAD

# Black outer rounded rect (acts as the border)
rounded_rect(ctx, cx, cy, cw, ch, RADIUS)
ctx.set_source_rgba(*BLACK)
ctx.fill()

# Red face inside the border
rounded_rect(
    ctx,
    cx + BORDER,
    cy + BORDER,
    cw - 2 * BORDER,
    ch - 2 * BORDER,
    RADIUS - BORDER,
)
ctx.set_source_rgba(*RED)
ctx.fill()

# NATO infantry symbol: rectangle outline with two diagonal X lines.
# Position in the upper portion of the red face, leaving the bottom for numbers.
sym_w = 132
sym_h = 92
sym_x = (WIDTH - sym_w) / 2
sym_y = cy + BORDER + 32

ctx.set_source_rgba(*WHITE)
ctx.set_line_width(12)
ctx.set_line_cap(cairo.LINE_CAP_SQUARE)
ctx.set_line_join(cairo.LINE_JOIN_MITER)

# Rectangle outline
ctx.rectangle(sym_x, sym_y, sym_w, sym_h)
ctx.stroke()

# Diagonals (the X)
ctx.move_to(sym_x, sym_y)
ctx.line_to(sym_x + sym_w, sym_y + sym_h)
ctx.stroke()
ctx.move_to(sym_x + sym_w, sym_y)
ctx.line_to(sym_x, sym_y + sym_h)
ctx.stroke()

# Numbers in bottom-left and bottom-right of the counter face.
# Try a few font names common on Windows; fall back to Cairo default.
ctx.select_font_face(
    "Consolas", cairo.FONT_SLANT_NORMAL, cairo.FONT_WEIGHT_BOLD
)
ctx.set_font_size(46)
ctx.set_source_rgba(*WHITE)

# "4" bottom-left
text = "4"
extents = ctx.text_extents(text)
text_y = cy + ch - BORDER - 22
ctx.move_to(cx + BORDER + 22, text_y)
ctx.show_text(text)

# "5" bottom-right
text = "5"
extents = ctx.text_extents(text)
ctx.move_to(cx + cw - BORDER - 22 - extents.width, text_y)
ctx.show_text(text)

os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
surface.write_to_png(OUT_PATH)
print(f"Wrote {OUT_PATH}")

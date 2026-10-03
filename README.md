# Ultraviolet — mapping starter

A projection mapping starting point: trace shapes over a real object, then write your own
effects on top of them. One self-contained HTML file, no install, no build, no server.

**Open `starter.html` in Chrome.** That's it — it works straight from your disk.

## 1. Map

In **MAP** mode, trace the object you are projecting onto.

| key | |
|---|---|
| `V` | select — drag to move, shift+click multi-select, drag empty = marquee, arrows nudge |
| `P` | pen — click points, shift = 45°, click the first point (or Enter) to close |
| `B` | freehand — drag; the stroke is simplified into points on release |
| `A` | points — drag vertices, click an edge to insert one, alt+click to delete |
| `C` | toggle closed / open on the selection |
| `G` | grid |
| `Ctrl+Z` / `Ctrl+Shift+Z` | undo / redo |
| `Tab` | hide the panel · `F` fullscreen · `M` swap MAP / PLAY |

Workflow: put the projector where it will live, photograph the object *from the
projector's position*, load that photo under **Reference image**, and trace it. Then go
fullscreen, project onto the real object, and nudge points with the Points tool until the
edges sit on the object.

The map is pinned to the physical screen, not the browser window: a window shows the part
of it underneath, and fullscreen (F11 or F) reveals the rest without moving anything.
Keep browser zoom at 100%.

Shapes autosave to the browser. Use **export .json** for a real backup.

## 2. Make effects

**PLAY** mode calls one function every frame. It is at the top of `starter.html`, in the
block marked `YOUR CODE`:

```js
function draw(ctx, t, shapes) {
  shapes.forEach((s, i) => {
    pathOf(ctx, s);
    ctx.strokeStyle = rgba(s.color, 0.55 + 0.45 * Math.sin(t * 2 + i));
    ctx.lineWidth = u(3);
    ctx.stroke();
  });
}
```

- `ctx` — the canvas 2D context, in pixels; the screen is already cleared to black
- `t` — seconds since play / restart
- `shapes` — the visible shapes, each with `name`, `color`, `closed` and `pts`

Helpers, all in pixels:

| helper | |
|---|---|
| `pathOf(ctx, s)` | begins a path along the shape; follow with `ctx.stroke()` or `ctx.fill()` |
| `clipTo(ctx, s)` | clips drawing to the inside of a shape (wrap in `ctx.save()` / `ctx.restore()`) |
| `px(s)` | the shape's points |
| `along(s, f)` | the point at fraction `f` (0–1) round the outline, with its direction `tx, ty` |
| `center(s)` · `bounds(s)` | centre point · bounding box |
| `u(v)` | a size in design units; 1000 u = the projection's height, so sizes match windowed and fullscreen |
| `rgba(hex, a)` · `clamp(v)` · `lerp(a, b, t)` | colour and number helpers |
| `W` | the projected area: `W.x, W.y, W.w, W.h` |
| `UV.util.ease` · `UV.util.mulberry32(seed)` | easing curves · a repeatable random generator |

Edit, save, reload. If your code throws, the error shows in the top-right corner instead
of freezing the page (F12 opens the console for the line number). Tick **preview fx** in
MAP to see your effect while you trace.

Ideas: fill shapes one after another, run a dot round each outline with `along`, slide
stripes through a shape with `clipTo`, set `ctx.globalCompositeOperation = 'lighter'` so
overlaps glow.

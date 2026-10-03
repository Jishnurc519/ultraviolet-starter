# Mapping starter

A projection mapper you can build on. Trace shapes over a real object, fill them with
pictures or movies (flat or perspective-warped), stack effects on top as layers, and run
the whole thing across a laptop screen and a projector from one browser window.

One HTML file. No install, no build step, no server.

**Try it online:** https://jishnurc519.github.io/ultraviolet-starter/

## Get started

1. **Download:** on GitHub, **Code → Download ZIP** (or `git clone`), and unzip it.
2. **Open** `starter.html` in **Chrome or Edge**. Double-clicking it is fine; it works
   straight from your disk.
3. You'll see a hexagon. Press **M** to switch to PLAY and watch it glow. That's the
   default layer stack running.
4. Back in MAP (press **M** again), draw your own shapes with the **Pen** (`P`), load
   `samples/test-clip.mp4` under **Pictures & movies**, select a shape and pick the clip
   under **fill**.
5. In PLAY, open the **presets…** menu and try *Neon* or *Movie + sparkle*.

`starter.html` also works on its own. The `samples/` and `effects/` folders are optional
extras: without `effects/`, you just won't get the effects stored there.

| folder / file | what it is |
|---|---|
| `starter.html` | the whole app |
| `effects/` | effects kept in their own files (`scanlines.js`, plus `_template.js` to copy) |
| `samples/` | two pictures and two movies to test with |
| `index.html` | sends GitHub Pages visitors to `starter.html` |

## 1. Map your object

In **MAP**, trace the surfaces you're projecting onto.

| key | |
|---|---|
| `V` | select: drag to move, shift+click to add to the selection, drag on empty space for a marquee, arrows nudge (shift = 10 px) |
| `P` | pen: click points, shift = 45°, click the first point (or Enter) to close, Esc cancels |
| `B` | freehand: drag; the stroke is simplified into points when you let go |
| `A` | points: drag vertices, click an edge to insert one, alt+click a vertex to delete it |
| `C` | toggle closed / open on the selection |
| `Ctrl+D` | duplicate the selection |
| `G` | grid on / off |
| `Ctrl+Z` / `Ctrl+Shift+Z` | undo / redo |
| `Tab` | hide the panel, together with the grid and guides, for a clean view |
| `F` | fullscreen |
| `M` | switch between MAP and PLAY |

**Workflow:** put the projector where it will stay and trace the object. Go
fullscreen, project onto the real object, and nudge points with the Points tool until the
edges sit right.

The map is pinned to the **physical screen**, not to the browser window. A window shows
whatever part of the map is underneath it, and going fullscreen (F11 or F) reveals the rest
without moving anything. Keep browser zoom at **100%** (Ctrl+0).

## 2. Pictures and movies

Load images or videos under **Pictures & movies**, or drop files anywhere on the page.
Select a shape and choose a file under **fill**. Dropping a file straight onto a shape
fills that shape with it.

| fill option | |
|---|---|
| `cover` · `contain` · `stretch` | fitted to the shape's bounding box and clipped to the shape |
| `span` | laid over the whole projection and seen through the shape, so one movie can run across several shapes |
| **perspective** | the picture's four corners are pinned to the shape's corners, so it follows a surface seen at an angle. Best on 4-point shapes (other shapes use their four outermost points). **↻ turn** rotates which corner the picture's top-left goes to |
| opacity | per shape |

Everything works for pictures and movies alike. Movies loop, start muted (click ♪ for
sound), and follow play, pause, restart and speed. The files are kept in this browser
between visits. Untick **media** in MAP to hide fills while you trace.

## 3. Play: layers and presets

**PLAY** draws a stack of **layers**. Each layer runs one **effect** with its own settings:

- **on / off**, and **↑ ↓** to reorder. The top of the list is drawn last, so it sits on top.
- **target**: all shapes, the shapes you have selected, or one shape.
- **blend**: normal, add, screen, multiply, overlay, difference, colour dodge, or erase.
- **opacity**, plus the effect's own sliders, colours and checkboxes. Click a layer's
  name to open them.
- **⧉** duplicates a layer: the same effect twice, with different settings.

The built-in effects are *Pictures & movies* (the shape fills), *draw() in this file*,
*Glowing outline*, *Chasing dots*, *Sliding stripes*, *Fill one after another*, *Breathing
fill*, *Sparkles inside*, *Radar sweep*, *Colour cycle* and *Scanlines* (that one loads
from `effects/scanlines.js`).

The **presets…** menu replaces the stack with a ready-made combination. Space
plays/pauses, `R` restarts.

## 4. Two screens: laptop + projector

Run the controls on your laptop and the show on the projector from **one window**. The
browser throttles a second window when it's covered up; a single window spanning both
screens has one canvas and one frame loop, so it runs at full speed.

1. Connect the projector and set Windows to **Extend** (`Win+P`).
2. In MAP, under **Two screens**, tick **span two screens**. The first time, the browser
   asks to let the page see your screens: allow it. Screen sizes and positions are then
   detected automatically, and again whenever screens change.
3. **output** picks the projector (`auto` takes the screen that isn't your main one).
4. Stretch the window over both screens: un-maximize it and drag its edges, or click
   **open spanning window**.

The status line tells you how much of the projector screen the window covers. Once it
covers all of it:

- the map is pinned to the projector;
- the panel, hints and error messages stay on the laptop screen;
- a live **preview** of the output fills the rest of the laptop screen, and you can
  **edit shapes right in the preview** with every MAP tool;
- `Tab` hides the panel, and the preview grows to fill the space.

**Fullscreen:** browsers can't go fullscreen across two screens. In span mode, `F` puts
the page fullscreen on the projector only (once screen access is allowed; otherwise the
browser uses whichever screen holds most of the window), and your map stays exactly where
it is. Press `F` or Esc to come back.

**Tips**
- The browser's title bar sits along the top of the window. To keep it off the
  projector, place the projector *below* (or lower than) the laptop screen in Windows
  display settings, so the window's top edge stays on the laptop.
- Give both screens the same Windows scaling (Settings → Display → Scale) for exact
  pinning.
- **open spanning window** needs pop-ups allowed for the page. Some browser versions
  shrink scripted windows to one screen; if that happens, drag the edges by hand.
- Screen detection needs Chrome or Edge, and works most reliably on the GitHub Pages site
  (or any `https://` / `localhost` address). If it won't work from disk in your browser,
  use the online version, or run `python -m http.server` in the folder and open
  `http://localhost:8000/starter.html`.

## 5. Saving

- **Autosave:** shapes, layers and settings are saved in this browser as you work.
  Pictures and movies are kept too.
- **Setups:** under **Setups**, give the current state a name and click **save setup**. A
  setup holds everything: shapes, fills, layers, aspect and two-screen
  settings. **load** brings it back (Ctrl+Z undoes the shape change), **⇩** exports it,
  and clicking **✕** twice deletes it. Saving under an existing name replaces that setup.
- **Export / import:** **export .json** saves the current setup as a file. Tick **with
  media** to put the pictures and movies the shapes use inside the file, so it works on
  another computer (videos make it big). **import** loads setup files and maps exported
  from the full app.

Browser storage is per browser and per site. Setups saved on the GitHub Pages site aren't
visible when you open `starter.html` from disk, and the other way round. Use export /
import to move them.

## 6. Build your own effects

Effects live in the **EFFECTS** section near the top of `starter.html`. Each one is a
self-contained block that registers itself:

```js
UV.effect('ripples', {
  label: 'Ripples',                        // shown in the panel
  by: 'your name',                         // optional credit
  params: {                                // each becomes a control in the layer
    speed: { value: 1, min: 0, max: 5 },              // number  -> slider
    size:  { value: 80, min: 5, max: 400, label: 'size (u)' },
    color: { value: '#4df3ff' },                      // '#hex'  -> colour picker
    fill:  { value: false },                          // boolean -> checkbox
    mode:  { value: 'in', options: ['in', 'out'] },   // options -> dropdown
  },
  draw(ctx, t, shapes, p, state) {
    shapes.forEach((s, i) => {
      const c = center(s);
      const r = u(p.size) * ((t * p.speed + i * 0.3) % 1);
      ctx.save();
      clipTo(ctx, s);
      ctx.strokeStyle = p.color;
      ctx.lineWidth = u(4);
      ctx.beginPath();
      ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    });
  },
});
```

`draw()` gets:

| | |
|---|---|
| `ctx` | the canvas 2D context, in CSS pixels. Lower layers are already drawn: **don't clear it**. Save/restore is done for you |
| `t` | seconds since play / restart. Use it for all motion, so pause, speed and restart work |
| `shapes` | this layer's shapes: `name`, `color`, `closed`, `pts` (0–1 in the projection), `media`, `id` |
| `p` | the current values of your params |
| `state` | an object kept for this layer between frames (particles, trails, precomputed points); emptied on restart |

Helpers (all in pixels):

| helper | |
|---|---|
| `pathOf(ctx, s)` | begins a path along the shape; follow with `ctx.stroke()` or `ctx.fill()` |
| `clipTo(ctx, s)` | clips drawing to the inside of a shape (wrap in `ctx.save()` / `ctx.restore()`) |
| `px(s)` | the shape's points |
| `along(s, f)` | the point at fraction `f` (0–1) round the outline, with its direction `tx, ty` |
| `center(s)` · `bounds(s)` | centre point · bounding box |
| `u(v)` | a size in design units: 1000 u = the projection's height, so sizes hold on any screen |
| `rgba(hex, a)` · `clamp(v)` · `lerp(a, b, t)` | colour and number helpers |
| `W` | the projected area: `W.x, W.y, W.w, W.h` |
| `UV.util.ease` · `UV.util.mulberry32(seed)` | easing curves · a repeatable random generator |
| `drawMedia(ctx, s)` | paints the shape's own fill inside it |
| `drawMedia(ctx, s, 'clip.mp4', fit)` | paints a loaded file (by name) inside the shape; `fit` is `cover`, `contain`, `stretch`, `span` or `perspective` |
| `media(s)` · `media('clip.mp4')` | the `<img>` / `<video>` itself, or `null`, for your own `ctx.drawImage` |

Save, reload, and your effect appears under **+ add layer**. If it throws, the error shows
in the top-right corner and only that layer is skipped. Press F12 for the line number.
Tick **preview fx** in MAP to see the layers while you trace.

**The quickest start** is the `draw(ctx, t, shapes)` function in the same section. The
*draw() in this file* layer calls it. Once it grows, move it into its own `UV.effect`.

### Rules that keep effects stackable

1. **One idea per effect.** "Neon outline with sparkles over a movie" is three layers,
   not one effect. Combine them in a preset.
2. **Knobs go in `params`**, sizes in `u()`, and time comes from `t`. Use
   `UV.util.mulberry32(seed)` instead of `Math.random()` so a replay looks the same.
3. **Leave opacity and blend to the layer.** Inside `draw()` you can use any
   `globalCompositeOperation` you like; the layer is isolated when it needs to be.
4. **Draw only in the shapes you're given.** Don't clear the canvas, don't keep
   references to `UV.project`, don't call `requestAnimationFrame`.
5. **Keep it light.** It runs 60 times a second. Precompute into `state`, and avoid
   per-pixel loops and `getImageData`.

The EFFECTS section of `starter.html` spells these out in full, including **notes
written for AI assistants**. If you ask an AI to add an effect, point it at that section.

### Effects in their own files

When several people work on one project, give each effect its own file, so nobody edits
the same lines:

1. Copy `effects/_template.js` to `effects/your-effect.js` and rename the id inside.
2. Add one line at the end of the EFFECTS section of `starter.html`:
   ```html
   <script src="effects/your-effect.js" onerror="this.remove()"></script>
   ```
3. Reload. It appears under **+ add layer**.

To share an effect, send the `.js` file. To contribute one here, open a pull request
that adds your file plus that one line.

### Presets

Presets are ready-made layer stacks, defined in the same section:

```js
UV.presets.push({ name: 'My look', layers: [
  { effect: 'media' },
  { effect: 'outline', blend: 'lighter', opacity: 0.8, params: { glow: 40 } },
] });
```

Each layer entry is `{ effect, opacity?, blend?, params? }`, listed bottom first.

## How the file is organised

From top to bottom, `starter.html` contains:

| section | what's there |
|---|---|
| `<style>` and the panel HTML | the control panel |
| **EFFECTS** | the effect registry, `draw()`, the example effects, presets, rules and the AI notes. **This is the part you edit** |
| **ENGINE** | everything else, as small modules on `window.UV`: `bus` (events), `util` (geometry), `stage` (screen pinning, span mode, preview), `screens` (projector detection), `project` (shapes, undo, autosave), `media` (pictures and movies, perspective warp), `setups`, `layers` (the PLAY stack), `editor` (MAP tools), the `draw()` helpers, the panel UI, and the boot / main loop |

You shouldn't need to change the engine to make new looks. If you do extend it, each
module's comment explains what it owns. Stored data lives in `localStorage` (`uv.starter.*`
keys) and in IndexedDB (`uv.starter.media`, the media files).

## Troubleshooting

- **The map doesn't line up after going fullscreen:** set browser zoom to 100% (Ctrl+0).
- **A movie doesn't play:** browsers only start movies once the tab is visible. Click
  into the page. For sound, click ♪ next to the movie.
- **"Screen access was refused":** click the icon left of the address bar → Site
  settings → allow *Window management*, then click **detect screens**.
- **An effect is missing from + add layer:** check its `<script src>` line and the
  console (F12) for errors in the file.
- **Storage full when saving a setup:** use **export .json** for a full copy.

## License

MIT — see [LICENSE](LICENSE). Copy it, change it, build on it.

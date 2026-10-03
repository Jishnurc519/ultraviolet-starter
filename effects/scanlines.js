/* Scanlines: horizontal bars rolling down through each shape, like an old
   CRT. An example of an effect kept in its own file: starter.html loads it
   with <script src="effects/scanlines.js">. */

UV.effect('scanlines', {
  label: 'Scanlines',
  by: 'ultraviolet starter',
  params: {
    spacing: { value: 14, min: 3, max: 120, label: 'spacing (u)' },
    thickness: { value: 0.4, min: 0.05, max: 1 },
    speed: { value: 30, min: -400, max: 400, label: 'roll speed (u/s)' },
    flicker: { value: 0.15, min: 0, max: 1 },
    color: { value: '#9cffd0' },
  },
  draw(ctx, t, shapes, p) {
    const gap = u(p.spacing);
    const off = ((u(p.speed) * t) % gap + gap) % gap;
    ctx.globalAlpha = 1 - p.flicker * (0.5 + 0.5 * Math.sin(t * 53));
    ctx.fillStyle = p.color;
    shapes.forEach((s) => {
      if (!s.closed) return;
      const b = bounds(s);
      ctx.save();
      clipTo(ctx, s);
      for (let y = b.y0 - gap + off; y < b.y1; y += gap) ctx.fillRect(b.x0, y, b.w, gap * p.thickness);
      ctx.restore();
    });
  },
});

/* Ultraviolet effect template
   ===========================
   1. Copy this file to effects/your-effect.js and rename the id below.
   2. Add one line near the end of the EFFECTS section in starter.html:
        <script src="effects/your-effect.js" onerror="this.remove()"></script>
   3. Reload, go to PLAY, pick it under "+ add layer".

   The rules for writing effects (and for AI assistants writing them) are in
   the EFFECTS section of starter.html. In short: one idea per effect, knobs in
   params, sizes via u(), time from t only, draw only in the shapes you get. */

UV.effect('my-effect', {
  label: 'My effect',
  by: '',
  params: {
    size: { value: 20, min: 1, max: 200, label: 'size (u)' },
    speed: { value: 1, min: 0, max: 5 },
    color: { value: '#ffffff' },
  },
  draw(ctx, t, shapes, p, state) {
    shapes.forEach((s, i) => {
      const c = center(s);
      const r = u(p.size) * (0.6 + 0.4 * Math.sin(t * p.speed * Math.PI * 2 + i));
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
      ctx.fill();
    });
  },
});

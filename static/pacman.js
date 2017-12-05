registerPaint('pacman', class {
  static get inputProperties() {
    return [
      '--pacman-mouth-open',
      '--pacman-mouth-max-open'
    ];
  }

  paint(ctx, geom, styleMap) {
    let mouthOpen;
    const mouthMaxAngle = styleMap.get('--pacman-mouth-max-open').value / 100;
    try {
     mouthOpen = parseFloat(styleMap.get('--pacman-mouth-open').toString(), 10);
    } catch(e) {
      console.error('[pacman]', e);
      mouthOpen = 1;
    }

    if (mouthOpen > 1) mouthOpen = 1;
    if (mouthOpen < 0) mouthOpen = 0;

    const startAngle = mouthOpen * mouthMaxAngle * Math.PI;
    const endAngle = (2 - mouthOpen * mouthMaxAngle) * Math.PI;

    // Determine the center point and radius.
    const x = geom.width / 2;
    const y = geom.height / 2;
    const radius = Math.min(x, y);

    this.drawBody(ctx, x, y, radius, startAngle, endAngle);
    this.drawEye(ctx, x, y, radius / 3, mouthOpen);
  }

  drawBody(ctx, x, y, radius, startAngle, endAngle) {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, startAngle, endAngle, false);
    ctx.fill();
  }

  drawEye(ctx, x, y, offset, mouthOpen) {
    const radius = offset / 3;

    // draw socket
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x, y - offset, radius, 0, 2 * Math.PI, false);
    ctx.fill();

    if (mouthOpen === 1) return;
    // draw outer red-eye
    ctx.fillStyle = 'darkred';
    ctx.beginPath();
    ctx.arc(x, y - offset, radius / 2 * mouthOpen, 0, 2 * Math.PI, false);
    ctx.fill();
    // draw inner red-eye
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(x, y - offset, radius / 4 * mouthOpen, 0, 2 * Math.PI, false);
    ctx.fill();
  }
});

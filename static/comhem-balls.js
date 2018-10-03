const colors = [
  '#FECC2F', '#FD7D23','#22C4FC',
  '#A6DB2B', '#FC302B', '#175CB5',
  '#189A45', '#FC59AB', '#9F69DA'
];
const squareGrid = [
  colors.slice(0,3),
  colors.slice(3,6),
  colors.slice(6)
];

const int = (str) => parseInt(str, 10);

registerPaint('comhem-balls', class {
  static get inputProperties() {
      return [
          '--ball-radius',
          '--ball-rotation',
          '--rotation'
      ]
  }

  paint(ctx, size, styleMap) {
    const { width, height } = size;
    const ballRadius = styleMap.get('--ball-radius');
    const rotation = int(styleMap.get('--rotation').toString());
    const ballRotationDeg = int(styleMap.get('--ball-rotation').toString());
    const isSquare = (width / height) < 5;
    const ballRotation = Math.cos(ballRotationDeg * Math.PI/180);

    const radius = ballRadius ? Math.abs(int(ballRadius.toString())) : height / 2;
    const fullCircle = 2 * Math.PI;

    if (isSquare) {
      const side = width > height ? height : width;
      const split = side / 4;
      const maxRadius = split / 2 * .9;

      ctx.translate(side / 2, side / 2);
      ctx.rotate((Math.PI/180) * rotation);
      ctx.translate(-side / 2, -side / 2);

      squareGrid.forEach((row, rowNum) => {
        row.forEach((color, colNum) => {
          const posX = split * (rowNum + 1);
          const posY = split * (colNum + 1);

          ctx.save();
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.transform(ballRotation, 0, 0, 1, 0, 0);
          ctx.arc(posX / ballRotation, posY, radius, 0, fullCircle);
          ctx.fill();
          ctx.restore();

        });
      })
    } else {
      const spread = size.width / colors.length;
      const yPos = size.height / 2;

      colors.forEach((color, idx) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(spread * idx + radius, yPos, radius, 0, fullCircle);
        ctx.fill();
      });
    }


  }
});

CSS.registerProperty({
  name: '--ball-radius',
  syntax: '<length>',
  initialValue: '10px'
});
CSS.registerProperty({
  name: '--rotation',
  syntax: '<angle>',
  initialValue: '0deg'
});
CSS.registerProperty({
  name: '--ball-rotation',
  syntax: '<angle>',
  initialValue: '0deg'
});

CSS.registerProperty({
  name: '--tooltip-position',
  syntax: '<percentage>'
});
CSS.registerProperty({
  name: '--tooltip-size',
  syntax: '<length>'
});

CSS.registerProperty({
  name: '--image',
  syntax: '<image>'
});

(CSS.paintWorklet || paintWorklet).addModule('static/tooltip.js');
(CSS.paintWorklet || paintWorklet).addModule('static/comhem-balls.js');
(CSS.paintWorklet || paintWorklet).addModule('static/smooth-corners.js');

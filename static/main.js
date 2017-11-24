(CSS.paintWorklet || paintWorklet).addModule('static/comhem-balls.js');
(CSS.paintWorklet || paintWorklet).addModule('static/smooth-corners.js');
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

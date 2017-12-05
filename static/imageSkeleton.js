registerPaint('image-with-placeholder', class ImageWithPlaceholder {
  static get inputProperties() {
    return ['--image'];
  }

  paint(ctx, geom, props) {
    const image = props.get('--image');
    console.log('image', image);

    switch (image.state) {
      case 'loading':
        console.log('display oading indictor');
      case 'error':
        console.log('error');
      case 'ready':
      case 'loaded':
        ctx.drawImage(image, 0, 0, geom.width, geom.height);
        break;
      case 'pending':
        ctx.fillStyle = '#FF0';
        ctx.arc(geom.width/2, geom.height/2, geom.height/2, 0, 2 * Math.PI);
        ctx.fill();
        break;
      case 'invalid':
        console.log('invalid');
      case 'unloaded':
        console.log('unloaded');
      default:
        ctx.fillStyle = '#0FF';
        ctx.arc(geom.width/2, geom.height/2, geom.height/2, 0, 2 * Math.PI);
        ctx.fill();
    }
  }
})

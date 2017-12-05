export default ({ className }) => (
  <div className={className}>
    <h3>Image placeholder</h3>
    <div className="image-placeholder" />
    <style jsx>{`
      .image-placeholder {
        --image: url('http://localhost:3000/static/houdini.jpg');
        background-image: var(--image);
        background-image: paint(image-with-placeholder);
        width: 300px;
        height: 200px;
      }
    `}</style>
  </div>
)

export default ({ className }) => (
  <div className={className}>
    <h3>Smooth corners</h3>
    <div className="smooth center-content">smooth</div>
    <div className="unsmooth center-content">unsmooth</div>
    <style jsx>{`
      .smooth,
      .unsmooth {
        display: inline-flex;
        color: white;
      }

      .smooth {
        background: linear-gradient(deeppink, orangered);
        -webkit-mask-image: paint(smooth-corners);
        width: 100px;
        height: 100px;
      }
      .unsmooth {
        background: linear-gradient(deeppink, orangered);
        border-radius: 20px;
        width: 100px;
        height: 100px;
        margin-left: 10px;
      }
    `}</style>
  </div>
)

export default (className) => (
  <div className={className}>
    <h3>Tooltip</h3>
    <div className="tooltip">content</div>
    <style jsx>{`
      .tooltip {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        color: #fff;
        height: 100px;
        width: 200px;
        margin: 0 auto 50px;
        background: hsl(193, 100%, 30%);
        border-bottom: 1px solid transparent;
        border-image-source: paint(tooltip);
        border-image-slice: 0 0 100% 0;
        border-image-width: var(--border-width);
        border-image-outset: var(--border-width);
        --tooltip-position: 30%;
        --tooltip-size: 30px;
        --border-width: 20px;
      }

      .tooltip:hover {
        animation: movaeAround 1s ease-in-out infinite alternate;
      }

      @keyframes movaeAround {
        from {
          --tooltip-position: 15%;
        }
        to {
          --tooltip-position: 85%;
        }
      }
    `}</style>
  </div>
)

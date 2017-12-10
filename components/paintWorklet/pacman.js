export default ({ className }) => (
  <div className={`pacman-container ${className}`}>
    <h3>Pacman</h3>
    <div className="pacman" />
    <style jsx>{`
      .pacman-container {
        background: black;
        padding: 1em;
      }
      .pacman {
        --pacman-mouth-open: 1;
        --pacman-mouth-max-open: 25%;
        background-image: paint(pacman);
        width: 100px;
        height: 100px;
      }
      .pacman-container:hover .pacman {
        animation: feed .25s ease-in-out alternate infinite;
      }

      @keyframes feed {
        from {
          --pacman-mouth-open: 1;
        }
        to {
          --pacman-mouth-open: 0;
        }
      }
    `}</style>
  </div>
)

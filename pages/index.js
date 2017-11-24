import Head from 'next/head'
import Header from '../components/header';

export default () => (
  <div>
    <Head>
      <script src="static/main.js"></script>
    </Head>
    <Header />
    <h1>Houdini CSS</h1>
    <div className="smooth"></div>
    <div className="balls"></div>

    <style jsx>{`
      .smooth {
        background: linear-gradient(deeppink, orangered);
        -webkit-mask-image: paint(smooth-corners);
        width: 100px;
        height: 100px;
      }

      .balls {
        --ball-radius: 20px;
        --ball-rotation: 0deg;
        --rotation: 0deg;
        background: paint(comhem-balls);
        width: 250px;
        height: 200px;
        margin: 1em 0;
        transition-property: --ball-radius, --ball-rotation, --rotation;
        transition-duration: .5s;
        transition-timing-function: ease;
      }

      .balls:hover {
        animation: rotate 1s ease-in-out infinite alternate;
      }

      @keyframes rotate {
        from {
          --rotation: 0deg;
          --ball-rotation: 0deg;
        }
        to {
          --rotation: 180deg;
          --ball-rotation: 180deg;
        }
      }
    `}</style>
  </div>
);
import Header from '../components/header';

export default () => (
  <div className="index">
    <Header />
    <div className="headers">
      <h1>Houdini</h1>
      <h3>Breaking out of the CSS straitjacket</h3>
    </div>



    <style jsx>{`
      .index {
        background-image: url(static/houdini.jpg);
        background-size: cover;
        color: white;
        height: 100%;
      }

      .headers {
        position: absolute;
        bottom: 10%;
        right: 10%;
        text-shadow: 2px 2px .5em black;
      }

      h1 {
        font-size: 9.5vw;
        margin-bottom: 10px;
      }
      h3 {
        font-size: 2vw;
        margin-top: 10px;
      }
    `}</style>
  </div>
);

import Header from '../components/header';

export default () => (
  <article>
    <Header />
    <main>
      <h1>Houdini: what is it?</h1>
      <ul>
        <li><a href="https://drafts.css-houdini.org/">A collection of specifications</a></li>
      </ul>
      <img src="/static/is-it-ready.png" alt=""/>
    </main>
    <style jsx>{`
      main {
        padding: 1em;
      }

      ul {
        list-style-type: lao;
      }
      li {
        font-size: 1.5em;
        line-height: 1.5em;
      }
      a {
        text-decoration: none;
      }

      img {
        max-width: 100%;
      }
    `}</style>
  </article>
);

import Header from '../components/header';

export default () => (
  <article>
    <Header />
    <main>
      <h1>Links</h1>
      <ul>
        <li><a href="https://ishoudinireadyyet.com/">Is houdini ready yet?</a></li>
        <li><a href="https://www.youtube.com/watch?v=sE3ttkP15f8">Demystifying the Future of CSS - Google I/O 2016</a></li>
        <li><a href="http://lab.iamvdo.me/houdini/">lab.iamvdo.me/houdini/</a></li>
        <li><a href="https://www.smashingmagazine.com/2016/03/houdini-maybe-the-most-exciting-development-in-css-youve-never-heard-of/">Maybe The Most Exciting Development In CSS You've Never Heard Of</a></li>
      </ul>
    </main>
    <style jsx>{`
      main {
        padding: 1em;
      }

      ul {
        list-style-type: lao;
      }
      li {
        font-size: 2em;
        line-height: 1.5em;
      }
      a {
        text-decoration: none;
      }
    `}</style>
  </article>
);

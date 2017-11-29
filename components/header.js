import Head from 'next/head';
import Link from 'next/link';

export default () => (
  <header>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" />
    </Head>
    <nav>
      <Link href="/"><a>index</a></Link>
      <Link href="http://lab.iamvdo.me/houdini/"><a>CSS Houdini Experiments</a></Link>
      <Link href="/paint-worklet"><a>Paint Worklet</a></Link>
    </nav>
    <style global jsx>{`
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }

    html,
    body {
      margin: 0;
      padding: 0;
      height: 100%;
    }

    body > div:first-child,
    #__next,
    [data-reactroot] {
      height: 100%;
    }

    body {
      color: #212121;
      font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      letter-spacing: 0.02em;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Lobster', cursive;
    }

    header {
      background-color: #594694;
      color: white;
      padding: .5em 1em;
    }

    nav {
      display: flex;
      justify-content: space-around;
    }

    a {
      color: white;
      font-weight: bold;
      text-decoration: none;
    }

    blockqoute {
      background-color: whitesmoke;
      border-left: 2px solid red;
      color: #444;
      padding: .3em 1em;
    }
    `}</style>
  </header>
);

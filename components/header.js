import Link from 'next/link';

export default () => (
  <header>
    <nav>
      <Link href="/"><a>Hem</a></Link>
      <Link href="/tv"><a>TV</a></Link>
      <Link href="/tv/flex8"><a>TV > Flex 8</a></Link>
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

    body {
      color: #212121;
      font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      letter-spacing: 0.02em;
    }
    `}</style>
    <style jsx>{`
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
    `}</style>
  </header>
);

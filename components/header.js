import Link from 'next/link';

export default () => (
  <header>
    <nav>
      <Link href="/"><a>Hem</a></Link>
      <Link href="/tv"><a>TV</a></Link>
      <Link href="/tv/flex8"><a>TV > Flex 8</a></Link>
    </nav>
    <style jsx>{`
    header {
      padding: .5em 1em;
    }
    nav {
      display: flex;
      justify-content: space-around;
    }

    a {

    }
    `}</style>
  </header>
);

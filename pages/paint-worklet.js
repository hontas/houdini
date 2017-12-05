import Head from 'next/head'
import Header from '../components/header';
import SmoothCorners from '../components/paintWorklet/smoothCorners';
import Tooltip from '../components/paintWorklet/tooltip';
import ComhemBalls from '../components/paintWorklet/comhemBalls';
import Pacman from '../components/paintWorklet/pacman';

export default () => (
  <div>
    <Head>
      <script src="static/main.js"></script>
    </Head>
    <Header />
    <div className="paint-worklets">
      <h1>Paint Worklet</h1>
      <blockquote>Web Worker-ish, but light-weight and short lived so they can run every. single. frame.</blockquote>
      <div className="worklets-list">
        <SmoothCorners className="worklets-list__item" />
        <Tooltip className="worklets-list__item" />
        <ComhemBalls className="worklets-list__item" />
        <Pacman className="worklets-list__item" />
      </div>

      <code>
        <pre>{`registerPaint('xxx', Class Xxx {})`}</pre>
      </code>

      <ol>
        <li>paintWorklet.addModule('xxx.js');</li>
        <li>{`CSS.registerProperty({ name: '--xxx' })`}</li>
      </ol>
    </div>
    <style jsx>{`
      .paint-worklets {
        padding: 0 1em;
      }

      .worklets-list {
        display: flex;
        justify-content: space-around;
      }
    `}</style>
  </div>
);

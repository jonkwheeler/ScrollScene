import * as React from 'react';
import { ScrollObserver } from '../ScrollObserver';
import DemoVideo from './DemoVideo';
export default {
  title: "ScrollObserver/video",
  parameters: {
    layout: 'fullscreen'
  }
};
function WhenVisible50Story() {
  // init ref
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    const {
      current: videoElement
    } = videoRef;
    if (!videoElement) {
      return undefined;
    }
    const scrollObserver = new ScrollObserver({
      triggerElement: videoElement,
      video: {
        element: videoElement,
        playingClassName: 'is-playing',
        pausedClassName: 'is-paused'
      },
      whenVisible: '50%'
    });
    return () => {
      scrollObserver.destroy();
    };
  });
  return <div className="bg-lightgrey transition">
          <div style={{
      height: '50vh'
    }} />

          <h3>whenVisible: '50%'</h3>
          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div>While the video is 50% visible on the page the video will play, and pause when not 50%</div>
          <div style={{
      height: '50vh'
    }} />
          <DemoVideo ref={videoRef} />

          <div style={{
      height: '150vh'
    }} />
        </div>;
}
export const WhenVisible50 = {
  name: "whenVisible: \"50%\"",
  render: function RenderWhenVisible50() {
    return <WhenVisible50Story />;
  }
};
function WhenVisible80Story() {
  // init ref
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    const {
      current: videoElement
    } = videoRef;
    if (!videoElement) {
      return undefined;
    }
    const scrollObserver = new ScrollObserver({
      triggerElement: videoElement,
      video: {
        element: videoElement
      },
      whenVisible: '80%'
    });
    return () => {
      scrollObserver.destroy();
    };
  });
  return <div className="bg-lightgrey transition">
          <div style={{
      height: '50vh'
    }} />

          <h3>whenVisible: '80%'</h3>
          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div>While the video is 80% visible on the page the video will play, and pause when not 80%</div>
          <div style={{
      height: '50vh'
    }} />
          <DemoVideo ref={videoRef} />

          <div style={{
      height: '150vh'
    }} />
        </div>;
}
export const WhenVisible80 = {
  name: "whenVisible: \"80%\"",
  render: function RenderWhenVisible80() {
    return <WhenVisible80Story />;
  }
};

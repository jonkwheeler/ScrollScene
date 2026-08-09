import * as React from 'react';
import { createScrollObserver } from '../ScrollObserver';
import DemoVideo from './DemoVideo';
export default {
  title: "ScrollObserver/multiple events",
  parameters: {
    layout: 'fullscreen'
  }
};
function ToggleVideoCallbackStory() {
  // init ref
  const triggerRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    const {
      current: triggerElement
    } = triggerRef;
    const {
      current: containerElement
    } = containerRef;
    const {
      current: videoElement
    } = videoRef;
    if (!triggerElement) {
      return undefined;
    }
    const scrollObserver = createScrollObserver({
      triggerElement,
      toggle: {
        element: containerElement,
        className: 'turn-blue'
      },
      callback: {
        active: () => console.log('active'),
        notActive: () => console.log('notActive')
      },
      video: {
        element: videoElement
      }
    });
    return () => {
      scrollObserver.destroy();
    };
  });
  return <div className="bg-lightgrey transition" ref={containerRef}>
        <div style={{
      height: '50vh'
    }} />

        <h3>{`callback: {
            active: () => console.log('active'),
            notActive: () => console.log('notActive'),
          }`}</h3>

        <h1>Scroll Down</h1>

        <div style={{
      height: '150vh'
    }} />

        <div ref={triggerRef}>
          While this is visible on the page, the console.log("active") will fire, and while it's not,
          console.log("notActive") will fire
        </div>
        <DemoVideo ref={videoRef} />
        <div style={{
      height: '50vh'
    }} />

        <div style={{
      height: '150vh'
    }} />
      </div>;
}
export const ToggleVideoCallback = {
  name: "toggle + video + callback",
  render: function RenderToggleVideoCallback() {
    return <ToggleVideoCallbackStory />;
  }
};

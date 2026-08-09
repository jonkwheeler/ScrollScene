import * as React from 'react';
import { createScrollScene } from '../ScrollScene';
export default {
  title: "ScrollScene/duration",
  parameters: {
    layout: 'fullscreen'
  }
};
function DurationDomNodeStory() {
  // init ref
  const containerRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  React.useEffect(() => {
    const {
      current: containerElement
    } = containerRef;
    const {
      current: triggerElement
    } = triggerRef;
    if (!containerElement && !triggerElement) {
      return undefined;
    }
    const scrollScene = createScrollScene({
      triggerElement,
      toggle: {
        element: containerElement,
        className: 'turn-blue',
        reverse: true
      },
      triggerHook: 0.25,
      duration: triggerElement
    });
    scrollScene.scene.addIndicators({
      name: 'duration: domNode',
      colorEnd: '#FFFFFF'
    });
    return () => {
      scrollScene.destroy();
    };
  });
  return <div className="bg-lightgrey transition" ref={containerRef}>
        <div style={{
      height: '50vh'
    }} />

        <h3>triggerHook: 0</h3>
        <h1>Scroll Down</h1>

        <div style={{
      height: '150vh'
    }} />

        <div ref={triggerRef} style={{
      background: 'orange',
      height: '25vw'
    }}>
          When this hits the top the page will turn blue
        </div>

        <div style={{
      height: '150vh'
    }} />
      </div>;
}
export const DurationDomNode = {
  name: "duration: domNode",
  render: function RenderDurationDomNode() {
    return <DurationDomNodeStory />;
  }
};

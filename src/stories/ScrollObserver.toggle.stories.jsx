import * as React from 'react';
import { ScrollObserver } from '../ScrollObserver';
export default {
  title: "ScrollObserver/toggle (className)",
  parameters: {
    layout: 'fullscreen'
  }
};
function BasicExampleStory() {
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
    const scrollObserver = new ScrollObserver({
      triggerElement,
      toggle: {
        element: containerElement,
        className: 'turn-blue'
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

        <h3>Basic Example</h3>
        <h1>Scroll Down</h1>

        <div style={{
      height: '150vh'
    }} />

        <div ref={triggerRef} style={{
      color: 'white'
    }}>
          While this is visible on the page the page will turn blue
        </div>

        <div style={{
      height: '150vh'
    }} />
      </div>;
}
export const BasicExample = {
  name: "Basic Example",
  render: function RenderBasicExample() {
    return <BasicExampleStory />;
  }
};

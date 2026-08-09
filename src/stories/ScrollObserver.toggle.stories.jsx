import * as React from 'react';
import { createScrollObserver } from '../ScrollObserver';
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
    const scrollObserver = createScrollObserver({
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

function PersistWhenPastStory() {
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
    const scrollObserver = createScrollObserver({
      triggerElement,
      persistWhenPast: true,
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

        <h3>persistWhenPast</h3>
        <h1>Scroll Down</h1>

        <div style={{
      height: '150vh'
    }} />

        <div ref={triggerRef} style={{
      color: 'white'
    }}>
          Turns blue while visible or after you scroll past. Scroll back up past this block to clear.
        </div>

        <div style={{
      height: '150vh'
        }} />
      </div>;
}
export const PersistWhenPast = {
  name: "persistWhenPast",
  render: function RenderPersistWhenPast() {
    return <PersistWhenPastStory />;
  }
};

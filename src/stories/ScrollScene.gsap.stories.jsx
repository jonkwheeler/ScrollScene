import * as React from 'react';
import { createScrollScene } from '../ScrollScene';
import { gsap } from 'gsap';
export default {
  title: "ScrollScene/gsap",
  parameters: {
    layout: 'fullscreen'
  }
};
function BasicExampleStory() {
  // init ref
  const containerRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const squareRef = React.useRef(null);
  React.useEffect(() => {
    const {
      current: containerElement
    } = containerRef;
    const {
      current: triggerElement
    } = triggerRef;
    const {
      current: squareElement
    } = squareRef;
    if (!containerElement && !triggerElement && !squareElement) {
      return undefined;
    }

    // create a timeline and add a tween
    const tl = gsap.timeline({
      paused: true
    });
    tl.to(squareElement, {
      x: -200,
      duration: 1,
      ease: 'power2.out'
    });
    const scrollScene = createScrollScene({
      triggerElement,
      gsap: {
        timeline: tl
      },
      triggerHook: 0
    });
    return () => {
      scrollScene.destroy();
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

          <div ref={triggerRef}>
            When this hits the top the page the container will move 20%, and scrolling back up will reverse it
            automatically
          </div>
          <div style={{
      height: '50vh'
    }} />
          <div ref={squareRef} style={{
      height: 50,
      width: 50,
      background: 'red',
      position: 'fixed',
      top: 0,
      right: 0
    }} />

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
function ReverseSpeed4TriggerHook0Story() {
  // init ref
  const containerRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const squareRef = React.useRef(null);
  React.useEffect(() => {
    const {
      current: containerElement
    } = containerRef;
    const {
      current: triggerElement
    } = triggerRef;
    const {
      current: squareElement
    } = squareRef;
    if (!containerElement && !triggerElement && !squareElement) {
      return undefined;
    }

    // create a timeline and add a tween
    const tl = gsap.timeline({
      paused: true
    });
    tl.to(squareElement, {
      x: -200,
      duration: 1,
      ease: 'power2.out'
    });
    const scrollScene = createScrollScene({
      triggerElement,
      gsap: {
        timeline: tl,
        reverseSpeed: 4
      },
      triggerHook: 0
    });
    return () => {
      scrollScene.destroy();
    };
  });
  return <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{
      height: '50vh'
    }} />

          <h3>reverseSpeed: 4, triggerHook: 0</h3>
          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div ref={triggerRef}>
            When this hits the top the page the container will move 20%, and scrolling back up will reverse it 4 times
            faster
          </div>
          <div style={{
      height: '50vh'
    }} />
          <div ref={squareRef} style={{
      height: 50,
      width: 50,
      background: 'red',
      position: 'fixed',
      top: 0,
      right: 0
    }} />

          <div style={{
      height: '150vh'
    }} />
        </div>;
}
export const ReverseSpeed4TriggerHook0 = {
  name: "reverseSpeed: 4, triggerHook: 0",
  render: function RenderReverseSpeed4TriggerHook0() {
    return <ReverseSpeed4TriggerHook0Story />;
  }
};
function ForwardSpeed2ReverseSpeed05Story() {
  // init ref
  const containerRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const squareRef = React.useRef(null);
  React.useEffect(() => {
    const {
      current: containerElement
    } = containerRef;
    const {
      current: triggerElement
    } = triggerRef;
    const {
      current: squareElement
    } = squareRef;
    if (!containerElement && !triggerElement && !squareElement) {
      return undefined;
    }

    // create a timeline and add a tween
    const tl = gsap.timeline({
      paused: true
    });
    tl.to(squareElement, {
      x: -200,
      duration: 1,
      ease: 'power2.out'
    });
    const scrollScene = createScrollScene({
      triggerElement,
      gsap: {
        timeline: tl,
        forwardSpeed: 2,
        reverseSpeed: 0.5
      },
      triggerHook: 0
    });
    return () => {
      scrollScene.destroy();
    };
  });
  return <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{
      height: '50vh'
    }} />

          <h3>forwardSpeed: 2, reverseSpeed: 1</h3>
          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div ref={triggerRef}>
            When this hits the top the page the container will move 20% and 2 times faster than normal, and scrolling
            back up will reverse it half it's normal speed
          </div>
          <div style={{
      height: '50vh'
    }} />
          <div ref={squareRef} style={{
      height: 50,
      width: 50,
      background: 'red',
      position: 'fixed',
      top: 0,
      right: 0
    }} />

          <div style={{
      height: '150vh'
    }} />
        </div>;
}
export const ForwardSpeed2ReverseSpeed05 = {
  name: "forwardSpeed: 2, reverseSpeed: 0.5",
  render: function RenderForwardSpeed2ReverseSpeed05() {
    return <ForwardSpeed2ReverseSpeed05Story />;
  }
};
function Duration500Story() {
  // init ref
  const containerRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const squareRef = React.useRef(null);
  React.useEffect(() => {
    const {
      current: containerElement
    } = containerRef;
    const {
      current: triggerElement
    } = triggerRef;
    const {
      current: squareElement
    } = squareRef;
    if (!containerElement && !triggerElement && !squareElement) {
      return undefined;
    }

    // create a timeline and add a tween
    const tl = gsap.timeline({
      paused: true
    });
    tl.to(squareElement, {
      x: -200,
      duration: 1,
      ease: 'none'
    });
    const scrollScene = createScrollScene({
      triggerElement,
      gsap: {
        timeline: tl
      },
      duration: 500,
      triggerHook: 0
    });
    return () => {
      scrollScene.destroy();
    };
  });
  return <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{
      height: '50vh'
    }} />

          <h3>duration: 500</h3>
          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div ref={triggerRef}>
            When this hits the top the page the container will move 20% but attached to a 500px duration
          </div>
          <div style={{
      height: '50vh'
    }} />
          <div ref={squareRef} style={{
      height: 50,
      width: 50,
      background: 'red',
      position: 'fixed',
      top: 0,
      right: 0
    }} />

          <div style={{
      height: '150vh'
    }} />
        </div>;
}
export const Duration500 = {
  name: "duration: 500",
  render: function RenderDuration500() {
    return <Duration500Story />;
  }
};

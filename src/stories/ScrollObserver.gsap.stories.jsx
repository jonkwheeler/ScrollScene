import * as React from 'react';
import { createScrollObserver } from '../ScrollObserver';
import { gsap } from 'gsap';
export default {
  title: "ScrollObserver/gsap",
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
    const scrollObserver = createScrollObserver({
      triggerElement,
      gsap: {
        timeline: tl
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

          <div ref={triggerRef}>While this is visible on the page the container will move 20%</div>
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
function Offset10Story() {
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
    const scrollObserver = createScrollObserver({
      triggerElement,
      gsap: {
        timeline: tl
      },
      offset: '-10%'
    });
    return () => {
      scrollObserver.destroy();
    };
  });
  return <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{
      height: '50vh'
    }} />

          <h3>offset: '-10%',</h3>
          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div ref={triggerRef} style={{
      height: 500,
      background: 'white',
      padding: 50
    }}>
            While this container is visible on the page the container will move 20%, but using a -10% offset of the
            container
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
export const Offset10 = {
  name: "offset: \"-10%\"",
  render: function RenderOffset10() {
    return <Offset10Story />;
  }
};
function YoyoTrueDelay0Story() {
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
    const scrollObserver = createScrollObserver({
      triggerElement,
      gsap: {
        timeline: tl,
        yoyo: true,
        delay: 0
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

          <h3>yoyo: true, delay: 1</h3>
          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div ref={triggerRef}>
            While this is visible on the page the container will move 20%, and the animation will yoyo with a delay of 0
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
export const YoyoTrueDelay0 = {
  name: "yoyo: true, delay: 0",
  render: function RenderYoyoTrueDelay0() {
    return <YoyoTrueDelay0Story />;
  }
};
function UseDurationTrueStory() {
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
    const scrollObserver = createScrollObserver({
      triggerElement,
      gsap: {
        timeline: tl
      },
      useDuration: true,
      thresholds: 100
    });
    return () => {
      scrollObserver.destroy();
    };
  });
  return <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{
      height: '50vh'
    }} />

          <h3>useDuration: true</h3>
          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div ref={triggerRef} style={{
      height: 500,
      background: 'white',
      padding: 50
    }}>
            While this container is visible on the page the container will move 20%, but tied to the visibility of the
            container
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
export const UseDurationTrue = {
  name: "useDuration: true",
  render: function RenderUseDurationTrue() {
    return <UseDurationTrueStory />;
  }
};

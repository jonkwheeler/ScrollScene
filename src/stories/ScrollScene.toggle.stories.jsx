import * as React from 'react';
import { ScrollScene } from '../ScrollScene';
export default {
  title: "ScrollScene/toggle (className)",
  parameters: {
    layout: 'fullscreen'
  }
};
function TriggerHook0Story() {
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
    const scrollScene = new ScrollScene({
      triggerElement,
      toggle: {
        element: containerElement,
        className: 'turn-blue'
      },
      triggerHook: 0
    });
    scrollScene.Scene.addIndicators({
      name: 'pin scene',
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

          <div ref={triggerRef}>When this hits the top the page will turn blue</div>

          <div style={{
      height: '150vh'
    }} />
        </div>;
}
export const TriggerHook0 = {
  name: "triggerHook: 0",
  render: function RenderTriggerHook0() {
    return <TriggerHook0Story />;
  }
};
function TriggerHook05Story() {
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
    const scrollScene = new ScrollScene({
      triggerElement,
      toggle: {
        element: containerElement,
        className: 'turn-blue'
      },
      triggerHook: 0.5
    });
    scrollScene.Scene.addIndicators({
      name: 'pin scene',
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

          <h3>triggerHook: 0.5</h3>
          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div ref={triggerRef}>When this the middle of the page the page will turn blue</div>

          <div style={{
      height: '150vh'
    }} />
        </div>;
}
export const TriggerHook05 = {
  name: "triggerHook: 0.5",
  render: function RenderTriggerHook05() {
    return <TriggerHook05Story />;
  }
};
function TriggerHook1Story() {
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
    const scrollScene = new ScrollScene({
      triggerElement,
      toggle: {
        element: containerElement,
        className: 'turn-blue'
      },
      triggerHook: 1
    });
    return () => {
      scrollScene.destroy();
    };
  });
  return <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{
      height: '50vh'
    }} />

          <h3>triggerHook: 1</h3>
          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div ref={triggerRef} style={{
      color: 'white'
    }}>
            When this appears on page the page will turn blue
          </div>

          <div style={{
      height: '150vh'
    }} />
        </div>;
}
export const TriggerHook1 = {
  name: "triggerHook: 1",
  render: function RenderTriggerHook1() {
    return <TriggerHook1Story />;
  }
};
function Duration100ReverseTrueStory() {
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
    const scrollScene = new ScrollScene({
      triggerElement,
      toggle: {
        element: containerElement,
        className: 'turn-blue',
        reverse: true
      },
      triggerHook: 1,
      duration: '100%'
    });
    return () => {
      scrollScene.destroy();
    };
  });
  return <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{
      height: '50vh'
    }} />

          <h3>duration: "100%", reverse: true</h3>
          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div ref={triggerRef}>
            When this hits the top of the page the page will turn blue and it will last for 100% of the viewport height
          </div>

          <div style={{
      height: '100vh'
    }} />

          <div ref={triggerRef} style={{
      color: 'white'
    }}>
            When this hits the top of the page the page will reverse the scene
          </div>

          <div style={{
      height: '150vh'
    }} />
        </div>;
}
export const Duration100ReverseTrue = {
  name: "duration: \"100%\", reverse: true",
  render: function RenderDuration100ReverseTrue() {
    return <Duration100ReverseTrueStory />;
  }
};
function Offset100TriggerHook05Story() {
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
    const scrollScene = new ScrollScene({
      controller: {
        loglevel: 3
      },
      triggerElement: triggerElement,
      toggle: {
        element: containerElement,
        className: 'turn-blue'
      },
      offset: 100,
      triggerHook: 0.5
    });
    scrollScene.Scene.addIndicators({
      name: 'pin scene',
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

          <h3>offset: 100, triggerHook: 0.5</h3>
          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div ref={triggerRef}>When this hits the middle of the page plus 100 pixels, the page with turn blue.</div>

          <div style={{
      height: '100px'
    }} />

          <div>offset: 100, triggerHook: 0.5,</div>

          <div style={{
      height: '100vh'
    }} />

          <div style={{
      height: '150vh'
    }} />
        </div>;
}
export const Offset100TriggerHook05 = {
  name: "offset: 100, triggerHook: 0.5",
  render: function RenderOffset100TriggerHook05() {
    return <Offset100TriggerHook05Story />;
  }
};

import * as React from 'react';
import { ScrollObserver } from '../ScrollObserver';
export default {
  title: "ScrollObserver/callback",
  parameters: {
    layout: 'fullscreen'
  }
};
function ConsoleLogActiveStory() {
  // init ref
  const triggerRef = React.useRef(null);
  React.useEffect(() => {
    const {
      current: triggerElement
    } = triggerRef;
    if (!triggerElement) {
      return undefined;
    }
    const scrollObserver = new ScrollObserver({
      triggerElement,
      callback: {
        active: () => console.log('active'),
        notActive: () => console.log('notActive')
      }
    });
    return () => {
      scrollObserver.destroy();
    };
  });
  return <div className="bg-lightgrey transition">
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
          <div style={{
      height: '50vh'
    }} />

          <div style={{
      height: '150vh'
    }} />
        </div>;
}
export const ConsoleLogActive = {
  name: "console.log(\"active\")",
  render: function RenderConsoleLogActive() {
    return <ConsoleLogActiveStory />;
  }
};
function DestroyImmediatelyTrueStory() {
  // init ref
  const triggerRef = React.useRef(null);
  React.useEffect(() => {
    const {
      current: triggerElement
    } = triggerRef;
    if (!triggerElement) {
      return undefined;
    }
    const scrollObserver = new ScrollObserver({
      triggerElement,
      callback: {
        active: () => console.log('active')
      },
      destroyImmediately: true
    });
    return () => {
      scrollObserver.destroy();
    };
  });
  return <div className="bg-lightgrey transition">
          <div style={{
      height: '50vh'
    }} />

          <h3>console.log("hello-world")</h3>
          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div ref={triggerRef}>
            While this is visible on the page, the console.log("hello-world") will fire once, and then the scene will
            destory itself
          </div>
          <div style={{
      height: '50vh'
    }} />

          <div style={{
      height: '150vh'
    }} />
        </div>;
}
export const DestroyImmediatelyTrue = {
  name: "destroyImmediately: true",
  render: function RenderDestroyImmediatelyTrue() {
    return <DestroyImmediatelyTrueStory />;
  }
};
function WhenVisible50Story() {
  // init ref
  const triggerRef = React.useRef(null);
  React.useEffect(() => {
    const {
      current: triggerElement
    } = triggerRef;
    if (!triggerElement) {
      return undefined;
    }
    const scrollObserver = new ScrollObserver({
      triggerElement,
      callback: {
        active: () => console.log('active'),
        notActive: () => console.log('notActive')
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

          <h3>whenVisible: "50%"</h3>
          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div ref={triggerRef} style={{
      height: 200,
      background: 'red'
    }}>
            While this is visible on the page, the console.log("hello-world") will fire once, and then the scene will
            destory itself
          </div>
          <div style={{
      height: '50vh'
    }} />

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
function MultipleTriggersStory() {
  // init ref
  const triggerRef1 = React.useRef(null);
  const triggerRef2 = React.useRef(null);
  React.useEffect(() => {
    const {
      current: triggerElement1
    } = triggerRef1;
    const {
      current: triggerElement2
    } = triggerRef2;
    if (!triggerElement1 && !triggerElement2) {
      return undefined;
    }
    const scrollObserver1 = new ScrollObserver({
      triggerElement: triggerElement1,
      callback: {
        active: () => console.log('trigger 1 active'),
        notActive: () => console.log('trigger 1 notActive')
      }
    });
    const scrollObserver2 = new ScrollObserver({
      triggerElement: triggerElement2,
      callback: {
        active: () => console.log('trigger 2 active'),
        notActive: () => console.log('trigger 2 notActive')
      }
    });
    return () => {
      scrollObserver1.destroy();
      scrollObserver2.destroy();
    };
  });
  return <div className="bg-lightgrey transition">
          <div style={{
      height: '50vh'
    }} />

          <h3>multiple triggers</h3>

          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div ref={triggerRef1}>
            While this is visible on the page, the console.log("trigger 1 active") will fire, and while it's not,
            console.log("trigger 1 notActive") will fire
          </div>
          <div style={{
      height: '75vh'
    }} />
          <div ref={triggerRef2}>
            While this is visible on the page, the console.log("trigger 2 active") will fire, and while it's not,
            console.log("trigger 2 notActive") will fire
          </div>

          <div style={{
      height: '150vh'
    }} />
        </div>;
}
export const MultipleTriggers = {
  name: "multiple triggers",
  render: function RenderMultipleTriggers() {
    return <MultipleTriggersStory />;
  }
};

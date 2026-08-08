import * as React from 'react';
import { ScrollScene } from '../ScrollScene';
export default {
  title: "ScrollScene/events",
  parameters: {
    layout: 'fullscreen'
  }
};
function OnEnterOnLeaveStory() {
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
    scrollScene.Scene.on('enter', function (event) {
      console.log('Scene entered.');
    });
    scrollScene.Scene.on('leave', function (event) {
      console.log('Scene left.');
    });
    return () => {
      scrollScene.destroy();
    };
  });
  return <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{
      height: '50vh'
    }} />

          <h3>{`scrollScene.Scene.on('enter', function(event) {console.log('Scene entered.')})`.toString()}</h3>
          <h3>{`scrollScene.Scene.on('leave', function(event) {console.log('Scene left.')})`.toString()}</h3>
          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div ref={triggerRef}>When this hits the top of the page, console.log('Scene entered.')</div>

          <div style={{
      height: '100vh'
    }} />

          <div ref={triggerRef} style={{
      color: 'white'
    }}>
            When this hits the top of the page, console.log("Scene left.");
          </div>

          <div style={{
      height: '150vh'
    }} />
        </div>;
}
export const OnEnterOnLeave = {
  name: "on enter, on leave",
  render: function RenderOnEnterOnLeave() {
    return <OnEnterOnLeaveStory />;
  }
};
function OnProgressStory() {
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
    scrollScene.Scene.on('progress', function (event) {
      console.log('Scene progress changed to ' + event.progress);
    });
    return () => {
      scrollScene.destroy();
    };
  });
  return <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{
      height: '50vh'
    }} />

          <h3>
            {`scrollScene.Scene.on('progress', function(event) {
          console.log('Scene progress changed to ' + event.progress)
        })`.toString()}
          </h3>
          <h1>Scroll Down</h1>

          <div style={{
      height: '150vh'
    }} />

          <div ref={triggerRef}>
            When this hits the top of the page, console.log the progress duration the active scene
          </div>

          <div style={{
      height: '100vh'
    }} />

          <div style={{
      color: 'white'
    }}>
            When this hits the top of the page, the progress will stop console logging
          </div>

          <div style={{
      height: '150vh'
    }} />
        </div>;
}
export const OnProgress = {
  name: "on progress",
  render: function RenderOnProgress() {
    return <OnProgressStory />;
  }
};

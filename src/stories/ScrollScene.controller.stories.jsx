import * as React from 'react';
import { ScrollScene } from '../ScrollScene';
export default {
  title: "ScrollScene/controller",
  parameters: {
    layout: 'fullscreen'
  }
};
function AddOptionsStory() {
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
      duration: '100%',
      controller: {
        loglevel: 3
      },
      useGlobalController: false
    });
    console.log(scrollScene.Controller.info());
    return () => {
      scrollScene.destroy();
    };
  });
  return <div className="bg-lightgrey transition" ref={containerRef}>
        <div style={{
      height: '50vh'
    }} />

        <h3>{`controller: { loglevel: 3 } will log all the goods`.toString()}</h3>
        <h1>Scroll and refresh page after leaving.</h1>
        <h4>Otherwise you'll get annoyed with the amount of console.logging</h4>

        <div style={{
      height: '150vh'
    }} />

        <div ref={triggerRef}>Scroll and the console.logging will begin.</div>
        <div>This page is using a local controller. Refresh page after leaving.</div>

        <div style={{
      height: '150vh'
    }} />
      </div>;
}
export const AddOptions = {
  name: "add options",
  render: function RenderAddOptions() {
    return <AddOptionsStory />;
  }
};

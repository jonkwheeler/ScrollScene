import * as React from 'react';
import { createScrollScene } from '../ScrollScene';
import { gsap } from 'gsap';
import { Stylesheet } from './Stylesheet';
export default {
  title: "ScrollScene/Examples",
  parameters: {
    layout: 'fullscreen'
  }
};
function MimicPinningStory() {
  // init ref
  const screen02trigger = React.useRef(null);
  const scaledBox = React.useRef(null);
  const screen03trigger = React.useRef(null);
  const heroScreen = React.useRef(null);
  const [LOADED, SET_LOADED] = React.useState(false);
  React.useEffect(() => {
    const scaleBoxTimeline = gsap.timeline({
      paused: true
    });
    scaleBoxTimeline.fromTo(scaledBox.current, {
      scale: 4
    }, {
      scale: 1,
      ease: 'power4.out'
    });
    const scaleBoxScene = createScrollScene({
      triggerElement: screen02trigger.current,
      gsap: {
        timeline: scaleBoxTimeline
      },
      useDuration: true,
      duration: '100%',
      triggerHook: 1
    });
    const moveOutTimeline = gsap.timeline({
      paused: true
    });
    moveOutTimeline.fromTo(heroScreen.current, {
      y: 0
    }, {
      y: '-100%',
      ease: 'none'
    });
    const moveOutScene = createScrollScene({
      triggerElement: screen03trigger.current,
      gsap: {
        timeline: moveOutTimeline
      },
      useDuration: true,
      duration: '100%',
      triggerHook: 1
    });
    SET_LOADED(true);
    return () => {
      scaleBoxScene.destroy();
      moveOutScene.destroy();
    };
  });
  return <>
        <Stylesheet />
        <div className="bg-lightgrey pos-r">
          <div className="actual-page">
            <div className={`fullscreen-scene pos-f loaded--${LOADED}`} ref={heroScreen}>
              <div className="text-block">
                <h1>Scroll Down</h1>
                <figure className="scaled-box" ref={scaledBox}>
                  imagine a computer screen here
                </figure>
              </div>
            </div>
            <div className="fullscreen-scene scene-spacer" />
            <div className="fullscreen-scene scene-spacer" />
            <div className="rest-of-the-page pos-r w100">
              <div className="page-padding">
                <h1>
                  I can't get involved! I've got work to do! It's not that I like the Empire, I hate it, but there's
                  nothing I can do about it right now. It's such a long way from here.
                </h1>
                <p>
                  The Force is strong with this one. I have you now. Remember, a Jedi can feel the Force flowing through
                  him. Red Five standing by. I call it luck. What good is a reward if you ain't around to use it?
                  Besides, attacking that battle station ain't my idea of courage. It's more like…suicide.
                </p>
                <p>
                  Look, I can take you as far as Anchorhead.{' '}
                  <strong> You can get a transport there to Mos Eisley or wherever you're going.</strong>{' '}
                  <em> I suggest you try it again, Luke.</em> This time, let go your conscious self and act on instinct.
                </p>
                <h2>You are a part of the Rebel Alliance and a traitor! Take her away!</h2>
                <p>
                  You are a part of the Rebel Alliance and a traitor! Take her away! I call it luck. Don't underestimate
                  the Force. Still, she's got a lot of spirit. I don't know, what do you think?
                </p>
                <ol>
                  <li>Ye-ha!</li>
                  <li>As you wish.</li>
                  <li>What?!</li>
                </ol>

                <h3>I find your lack of faith disturbing.</h3>
                <p>
                  I'm surprised you had the courage to take the responsibility yourself. As you wish. What?! Look, I can
                  take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going.
                </p>
                <ul>
                  <li>
                    Leave that to me. Send a distress signal, and inform the Senate that all on board were killed.
                  </li>
                  <li>I suggest you try it again, Luke. This time, let go your conscious self and act on instinct.</li>
                  <li>Hey, Luke! May the Force be with you.</li>
                </ul>

                <p>
                  What!? I need your help, Luke. She needs your help. I'm getting too old for this sort of thing. Hokey
                  religions and ancient weapons are no match for a good blaster at your side, kid. I can't get involved!
                  I've got work to do! It's not that I like the Empire, I hate it, but there's nothing I can do about it
                  right now. It's such a long way from here.
                </p>
                <p>
                  Still, she's got a lot of spirit. I don't know, what do you think? You don't believe in the Force, do
                  you? I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of
                  the Force and be a Jedi, like my father before me.
                </p>
                <p>
                  You don't believe in the Force, do you? You mean it controls your actions? I find your lack of faith
                  disturbing. Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or
                  wherever you're going.
                </p>
                <p>
                  Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is
                  insignificant next to the power of the Force. Look, I can take you as far as Anchorhead. You can get a
                  transport there to Mos Eisley or wherever you're going.
                </p>
                <p>
                  I can't get involved! I've got work to do! It's not that I like the Empire, I hate it, but there's
                  nothing I can do about it right now. It's such a long way from here. Don't act so surprised, Your
                  Highness. You weren't on any mercy mission this time. Several transmissions were beamed to this ship
                  by Rebel spies. I want to know what happened to the plans they sent you.
                </p>
                <p>
                  The plans you refer to will soon be back in our hands. What!? I'm trying not to, kid. Leave that to
                  me. Send a distress signal, and inform the Senate that all on board were killed.
                </p>
                <p>
                  You don't believe in the Force, do you? The more you tighten your grip, Tarkin, the more star systems
                  will slip through your fingers. He is here. Remember, a Jedi can feel the Force flowing through him.
                </p>
                <p>
                  You don't believe in the Force, do you? I suggest you try it again, Luke. This time, let go your
                  conscious self and act on instinct. I suggest you try it again, Luke. This time, let go your conscious
                  self and act on instinct.
                </p>
                <p>
                  Leave that to me. Send a distress signal, and inform the Senate that all on board were killed. I need
                  your help, Luke. She needs your help. I'm getting too old for this sort of thing. No! Alderaan is
                  peaceful. We have no weapons. You can't possibly…
                </p>
                <p>
                  The more you tighten your grip, Tarkin, the more star systems will slip through your fingers. Hey,
                  Luke! May the Force be with you. Leave that to me. Send a distress signal, and inform the Senate that
                  all on board were killed.
                </p>
                <p>
                  I need your help, Luke. She needs your help. I'm getting too old for this sort of thing. I have traced
                  the Rebel spies to her. Now she is my only link to finding their secret base. She must have hidden the
                  plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander.
                  There'll be no one to stop us this time!
                </p>
              </div>
            </div>
          </div>

          <div className="scene-length pos-a w100 top">
            <div className="fullscreen-scene screen01">
              <div className="mini-trigger middle" />
            </div>
            <div className="fullscreen-scene screen02">
              <div className="mini-trigger top active screen02-trigger" ref={screen02trigger} />
              <div className="mini-trigger middle" />
            </div>
            <div className="fullscreen-scene screen03">
              <div className="mini-trigger top active screen03-trigger" ref={screen03trigger} />
              <div className="mini-trigger middle" />
            </div>
          </div>
        </div>
      </>;
}
export const MimicPinning = {
  name: "mimic pinning",
  render: function RenderMimicPinning() {
    return <MimicPinningStory />;
  }
};

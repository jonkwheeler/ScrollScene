import * as React from 'react'
import { demoVideoPoster, demoVideoSrc } from './media'

interface DemoVideoProps {
  style?: React.CSSProperties
}

function DemoVideo(props: DemoVideoProps, ref: React.Ref<HTMLVideoElement>) {
  const [hasError, setHasError] = React.useState(false)

  if (hasError) {
    return (
      <div
        style={{
          ...(props.style || { width: '40%' }),
          aspectRatio: '16 / 9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2b5876',
          color: '#e8f4fc',
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        Demo video unavailable
      </div>
    )
  }

  return (
    <video
      ref={ref}
      style={props.style || { width: '40%' }}
      poster={demoVideoPoster}
      src={demoVideoSrc}
      playsInline
      muted
      loop
      controls={false}
      preload="none"
      onError={function handleVideoError() {
        setHasError(true)
      }}
    />
  )
}

export default React.forwardRef(DemoVideo)

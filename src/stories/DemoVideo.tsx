import * as React from 'react'
import { demoVideoSrc } from './media'

interface DemoVideoProps {
  style?: React.CSSProperties
}

function DemoVideo(props: DemoVideoProps, ref: React.Ref<HTMLVideoElement>) {
  const [hasError, setHasError] = React.useState(false)
  const [poster, setPoster] = React.useState<string | undefined>(undefined)
  const videoRef = React.useRef<HTMLVideoElement | null>(null)
  const posterCapturedRef = React.useRef(false)

  function setVideoRef(node: HTMLVideoElement | null) {
    videoRef.current = node

    if (typeof ref === 'function') {
      ref(node)
      return
    }

    if (ref) {
      ;(ref as React.MutableRefObject<HTMLVideoElement | null>).current = node
    }
  }

  function captureFirstFrame() {
    if (posterCapturedRef.current) {
      return
    }

    const video = videoRef.current

    if (!video || !video.videoWidth || !video.videoHeight) {
      return
    }

    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    const context = canvas.getContext('2d')

    if (!context) {
      return
    }

    context.drawImage(video, 0, 0, canvas.width, canvas.height)
    setPoster(canvas.toDataURL('image/jpeg', 0.92))
    posterCapturedRef.current = true
  }

  function handleLoadedMetadata() {
    const video = videoRef.current

    if (!video) {
      return
    }

    video.currentTime = 0
  }

  function handleSeeked() {
    captureFirstFrame()
  }

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
      ref={setVideoRef}
      style={props.style || { width: '40%' }}
      poster={poster}
      src={demoVideoSrc}
      playsInline
      muted
      loop
      controls={false}
      preload="metadata"
      onLoadedMetadata={handleLoadedMetadata}
      onSeeked={handleSeeked}
      onError={function handleVideoError() {
        setHasError(true)
      }}
    />
  )
}

export default React.forwardRef(DemoVideo)

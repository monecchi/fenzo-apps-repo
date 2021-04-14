import { Box } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { useCallback, useEffect, useRef } from 'react'
import { getPageOffsetLeft } from '../../utils/document-helpers'


const isDev = process.env.NODE_ENV === "development"

const slide = keyframes`
from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-50%, 0, 0);
  }
`

type Props = {
  duration?: number
  pushSx?: any
  isFullScreen?: boolean
  numberOfCopies?: number
}

const ScrollingSliderImages: React.FC<Props> = ({
  duration = 10,
  children,
  pushSx,
  isFullScreen = true,
  numberOfCopies = 2
}) => {
  if (numberOfCopies % 2 !== 0 && isDev) {
    throw new Error("numberOfCopies must be even")
  }

  const containerRef = useRef<HTMLDivElement>(null)
  const getChild = useCallback(
    (n: number) => (typeof children === "function" ? children(n) : children),
    []
  )

  useEffect(() => {
    if (isFullScreen && containerRef.current) {
      const offsetLeft = getPageOffsetLeft(containerRef.current)
      containerRef.current.style.left = `-${offsetLeft}px`
    }
  }, [isFullScreen, containerRef])

  return (
    <Box
      ref={containerRef}
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        width: isFullScreen ? "100vw" : "100%",
        ...pushSx
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          whiteSpace: "nowrap",
          overflow: "hidden",
          animation: `${slide} ${duration * 2}s linear infinite`
        }}
      >
        {Array.from({ length: numberOfCopies }, (_, i) => i + 1).map((n) => (
          <Box
            key={`auto-slider-copy-${n}`}
            sx={{
              display: "inline-flex",
              "& > div": { display: "inline-block" }
            }}
          >
            {getChild(n)}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ScrollingSliderImages;

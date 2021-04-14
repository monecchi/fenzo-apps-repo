import PropTypes from 'prop-types'
import { Dict, runIfFn } from "@chakra-ui/utils";
import { forwardRef, BoxProps, Box } from '@chakra-ui/react'

//
// SVG Shapes
//

export declare function SvgShape(shape: any): (props: Dict) => any;

// Curved
export const CurvedShape = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="none"><path fill="currentColor" d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" /></svg>
  )
}

// Curved Inverse
export const CurvedShapeY = () => {
  return (
    <svg viewBox="0 0 2880 56" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M720 28H0v28h2880V28h-720S1874 0 1440 0 720 28 720 28z" fill="currentColor" /></svg>
  )
}

// Angled
export const AngledShape = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor"><polygon points="0,100 100,0 100,100" /></svg>
  )
}

// Curved Angled
export const CurveAngleShape = () => {
  return (
    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor" /></svg>
  )
}

// Waves
export const WaveShape = () => {
  return (
    <>
      <svg className="wave" style={{ pointerEvents: 'none' }} fill="currentColor" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 75">
        <defs>
        </defs>
        <clipPath id="waves"><rect className="wave-a" width={1920} height={75} /></clipPath>
        <g className="b"><path className="wave-c" d="M1963,327H-105V65A2647.49,2647.49,0,0,1,431,19c217.7,3.5,239.6,30.8,470,36,297.3,6.7,367.5-36.2,642-28a2511.41,2511.41,0,0,1,420,48" /></g>
        <g className="b"><path className="wave-d" d="M-127,404H1963V44c-140.1-28-343.3-46.7-566,22-75.5,23.3-118.5,45.9-162,64-48.6,20.2-404.7,128-784,0C355.2,97.7,341.6,78.3,235,50,86.6,10.6-41.8,6.9-127,10" /></g>
        <g className="b"><path className="wave-d" d="M1979,462-155,446V106C251.8,20.2,576.6,15.9,805,30c167.4,10.3,322.3,32.9,680,56,207,13.4,378,20.3,494,24" /></g>
        <g className="b"><path className="wave-d" d="M1998,484H-243V100c445.8,26.8,794.2-4.1,1035-39,141-20.4,231.1-40.1,378-45,349.6-11.6,636.7,73.8,828,150" /></g>
      </svg>
      <style jsx>
        {`
          .wave-a {
            fill: none;
          }
          .wave-b {
            clip-path: url(#waves)
          }
          .wave-d {
            opacity: 0.5;
            isolation: isolate;
          }
        `}
      </style>
    </>
  )
}

export const WaveShapeLarge = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920.003 165">
      <path d="M0,40H35.6c35.467,0,107.067,0,177.733,10.8C284.4,61.6,356,83.3,426.667,97.7,497.733,112.4,569.333,119.2,640,112.2c71.067-7.2,142.667-28.9,213.333-32.5C924.4,75.8,996,90.7,1066.667,112.2c71.067,21.9,142.667,39.3,213.333,39.5,71.067-.2,142.667-17.6,213.333-35.9C1564.4,97.5,1636,90.7,1706.667,83.3c71.067-7.4,142.667-14.2,177.333-18.1l36-3.6V205c-71.067,0-1922.982-2.982-1920,0Z" fill="currentColor" />
    </svg>
  )
}

interface SectionProps extends BoxProps {
  type: string
}
/**
 *
 * @param type string (shape type name) - default values: "curve", "angle" and "waves"
 * @param color string
 * @returns JSX.Element (svg)
 */
// const SectionShape = forwardRef<BoxProps, "div">((props, ref) =>
const SectionShape = forwardRef<SectionProps, "div">((props, ref) => {

  const { type, color } = props

  let cssClass = ''

  if(!cssClass) {
    cssClass = 'svg-shape-curve'
  }

  let shape = <CurvedShape />

  switch (type) {
    case 'curve':
      cssClass = 'shape shape-bottom shape-fluid-x shape-curve'
      shape = <CurvedShape />
      break
    case 'curve-flip-y':
      cssClass = 'svg-shape-curve'
      shape = <CurvedShape />
      break
    case 'curve-inverse':
      cssClass = 'svg-shape-curve curve-inverse shape-fluid-x'
      shape = <CurvedShapeY />
      break
    case 'angle':
      cssClass = 'shape shape-bottom shape-fluid-x shape-angle'
      shape = <AngledShape />
      break
    case 'curve-angle':
      cssClass = 'shape shape-bottom shape-fluid-x shape-curve-angle'
      shape = <CurveAngleShape />
      break
    case 'wave':
      cssClass = 'svg-shape-waves'
      shape = <WaveShape />
      break
    case 'wave-large':
      cssClass = 'svg-shape-waves-large'
      shape = <WaveShapeLarge />
      break
    default:
      shape = <CurvedShape />
      break
  }

  return (
    <>
      <Box
        color={color ? color : 'inherit'}
        className={cssClass.toString()}
        {...props}
        ref={ref}
      >
        {shape}
        {props.children}
      </Box>

      <style jsx global>
        {`
        .shape {
          position: absolute;
          pointer-events: none;
          overflow: hidden;
        }

        .shape>* {
          display: block;
        }

        .shape svg {
          overflow: hidden;
        }

        .shape-bottom {
          right: 0;
          bottom: 0;
          left: 0;
        }

        .shape-bottom>* {
          transform-origin: top center;
        }

        .shape-fluid-x>* {
          width: 100%;
          height: auto;
        }

        .shape-flip-x {
          transform: scale(-1,1);
        }

        .shape-flip-y {
          transform: scale(-1);
        }

        .shape-curve-angle svg {
          transform: scale(2);
        }

        .shape-curve svg {
          height: .85rem;
          margin-bottom: -0.05rem;
        }

        @media (min-width: 576px) {
          .shape-curve svg {
            height: 1.5rem;
          }
        }
        @media (min-width: 768px) {
          .shape-curve svg {
            height: 2rem;
          }
        }
        @media (min-width: 992px) {
          .shape-curve svg {
            height: 2.5rem;
          }
        }
        @media (min-width: 1200px) {
          .shape-curve svg {
            height: 3rem;
          }
        }

        .shape-curve.curve-inverse {
          transform: scale(2);
        }

        .shape-angle {
          padding-top: 3rem;
        }
        .shape-angle svg {
          height: 3rem;
        }
        @media (min-width: 576px) {
          .shape-angle {
            padding-top: 3.5rem;
          }
          .shape-angle svg {
            height: 3.5rem;
          }
        }
        @media (min-width: 768px) {
          .shape-angle {
            padding-top: 4rem;
          }
          .shape-angle svg {
            height: 4rem;
          }
        }
        @media (min-width: 992px) {
          .shape-angle {
            padding-top: 4.5rem;
          }
          .shape-angle svg {
            height: 4.5rem;
          }
        }
        @media (min-width: 1200px) {
          .shape-angle {
            padding-top: 5rem;
          }
          .shape-angle svg {
            height: 5rem;
          }
        }

        .svg-shape-waves {
          padding-top: 1rem;
        }
        .svg-shape-waves svg {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2rem;
          width: 100%;
        }
        @media (min-width: 576px) {
          .svg-shape-waves {
            padding-top: 1.5rem;
          }
          .svg-shape-waves svg {
            height: 2.5rem;
          }
        }
        @media (min-width: 1200px) {
          .svg-shape-waves {
            padding-top: 2rem;
          }
          .svg-shape-waves svg {
            height: 3rem;
          }
        }

        .svg-shape-waves-large svg {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: auto !important;
          padding-top: 2rem;
        }
      `}
      </style>
    </>
  )
});

export default SectionShape;

SectionShape.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string
}

SectionShape.defaultProps = {
  type: 'Serralheria moderna',
  color: 'curve'
}

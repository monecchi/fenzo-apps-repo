import { ReactElement } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import FallbackSVG from '../../assets/illustrations/decoration_1.svg'

const decorationOffsetX = 191;
const decorationOffsetY = 80;

function Decoration(props: {
  horizontalAlign: string;
  verticalAlign: string;
}): ReactElement {
  const properties: BoxProps = {};

  if (props.horizontalAlign === "left") {
    properties.left = -decorationOffsetX;
  } else if (props.horizontalAlign === "right") {
    properties.right = -decorationOffsetX;
    properties.transform = "rotate(180deg)";
  }

  if (props.verticalAlign === "top") {
    properties.top = decorationOffsetY;
  } else if (props.verticalAlign === "bottom") {
    properties.bottom = -decorationOffsetY;
  }

  return (
    <>
      <Box
        position="absolute"
        display={["none", "none", "block"]}
        zIndex={1}
        {...properties}
      >
        <FallbackSVG />
      </Box>
    </>
  );
}

export default Decoration;

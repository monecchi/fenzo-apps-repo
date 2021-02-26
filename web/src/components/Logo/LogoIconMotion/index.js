import React from 'react'
import { motion } from 'framer-motion'
import { IconMotionContainer } from './IconMotionContainer'
import {
  Box
} from '@chakra-ui/react'
import styles from '../LogoIconMotion/icon-motion.module.css'

const iconMotion = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(0, 51, 255, 0)',
    stroke: 'rgba(0, 51, 255, 0)'
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(0, 51, 255, 1)',
    stroke: 'rgba(0, 51, 255, 1)'
  }
};

export const FenzoIconMotion = (props) => (
  <IconMotionContainer>
    <Box
      {...props}
      className={styles.icon_container}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 284.866 318.134"
        className={styles.item}
        width="100%"
        height="100%"
      >
        <motion.path
          d="M75.807,272.3V226.917l113.95,47.219L284.866,207.2l-1.844,48.14-93.725,62.8ZM0,246.176.923,66.02,96.955,0,280.716,71.98l-93.263,67.379L39.967,82.98,37.684,264.516Zm75.807-64.638V136.16l113.95,47.219,95.109-66.939-1.844,48.14-93.725,62.8Z"
          variants={iconMotion}
          initial="hidden"
          animate="visible"
          transition={{
            fill: { duration: 0.5, ease: [1, 0, 0.8, 1] }
          }}
        />
      </motion.svg>
    </Box>
  </IconMotionContainer>
);

import React from 'react'

const HeroContact = () => (
  <div>
  `<style jsx global>
    {`
      /* Make clicks pass-through */
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        position: fixed;
        background: #0070f3;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
      /* Fancy blur effect */
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #0070f3, 0 0 5px #0070f3;
        opacity: 1;
        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}
  </style>`
  </div>
);

export default HeroContact;

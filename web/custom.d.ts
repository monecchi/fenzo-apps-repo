import 'react';

//
// Fixes Typescript typings for jsx
// @see https://github.com/vercel/styled-jsx/issues/90#issuecomment-783382677
//
declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

//
// Extends HTMLAttrbutes for AOS plugin
// @see http://michalsnik.github.io/aos/
// @see https://stackoverflow.com/a/56109780/1152876
//
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes for aos data attibutes
    [aos]?: string;
    [aos-delay]?: number | string;
    [aos-offset]?: number | string;
    [aos-delay]?: number | string;
    [aos-duration]?: number | string;
    [aos-easing]?: string;
    [aos-mirror]?: boolean;
    [aos-once]?: boolean;
    [aos-id]?: string;
    [aos-anchor-placement]?: string;
    [data-overlay]?: string;
  }
}

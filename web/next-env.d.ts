/// <reference types="next" />
/// <reference types="next/types/global" />

//
// Fix Nextjs/Typescript "cannot find module" for svg & image formats on imports
//
declare module "*.svg" {
  const content: string
  export default content
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'

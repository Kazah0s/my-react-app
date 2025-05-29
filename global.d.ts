declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

/// <reference types="@testing-library/jest-dom" />
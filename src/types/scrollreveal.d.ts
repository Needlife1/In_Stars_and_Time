declare module 'scrollreveal' {
  interface ScrollRevealObject {
    reveal: (selector: string, config?: object) => void;
  }

  interface ScrollReveal {
    (): ScrollRevealObject;
    new (): ScrollRevealObject;
  }

  const scrollReveal: ScrollReveal;
  export = scrollReveal;
}

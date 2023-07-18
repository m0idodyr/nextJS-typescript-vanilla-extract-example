import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  grid: {
    baseline: '1rem',
    columns: '12',
    maxWidth: '2560px',
    maxWidthMedium: '1600px',
    maxWidthSmall: '1200px',
    spacing: {
      /*5px → 5px */
      xxxs: 'clamp(0.31rem, calc(0.27rem + 0.22vw), 0.63rem)',
      /*9px → 10px */
      xxs: 'clamp(0.56rem, calc(0.46rem + 0.54vw), 1.31rem)',
      /*14px → 15px */
      xs: 'clamp(0.88rem, calc(0.72rem + 0.76vw), 1.94rem)',
      /*18px → 20px */
      s: 'clamp(1.13rem, calc(0.92rem + 1.03vw), 2.56rem)',
      /*27px → 30px */
      m: 'clamp(1.69rem, calc(1.38rem + 1.56vw), 3.88rem)',
      /*36px → 40px */
      l: 'clamp(2.25rem, calc(1.84rem + 2.05vw), 5.13rem)',
      /*54px → 60px */
      xl: 'clamp(3.38rem, calc(2.76rem + 3.08vw), 7.69rem)',
      /*72px → 80px */
      xxl: 'clamp(4.50rem, calc(3.68rem + 4.11vw), 10.25rem)',
      /*108px → 120px */
      xxxl: 'clamp(6.75rem, calc(5.52rem + 6.16vw), 15.38rem)',
      /*144px → 160px */
      xxxxl: 'clamp(9.00rem, calc(7.36rem + 8.21vw), 20.50rem)',
      /*180px → 410px */
      xxxxxl: 'clamp(11.25rem, calc(9.20rem + 10.27vw), 25.63rem)',
    },
  },
  color: {
    neutral: {
      black: '#000',
      white: '#fff',
      gray: '#757575',
      darkGray: '#454545',
    },
    primary: {
      _00: '#4120A9',
      _0: '#4925c1',
      _1: '#633eda',
      _2: '#8569e2',
    },
    secondary: {
      _00: '#EB659E',
      _0: '#f08eb9',
      _1: '#f6bbd5',
      _2: '#fce8f1',
    },
    tertiary: {
      _00: '#D676C9',
      _0: '#6F2F92',
    },
    brandGradient: {
      _00: '#6A1B9A',
      _0: '#9224AB',
      _1: '#9C2CAA',
      _2: '#EA659D',
    },
    brand: {
      darkBlue: '#050A30',
      blueIris: '#4120A9',
      hotPink: '#EB659E',
      orchid: '#D676C9',
    },
    // We can add more colors here
    status: {
      error: '#ff0000',
    },
  },
  elements: {},
  ui: {
    border: {
      radius: {
        _0: '3px',
        _1: '5px',
        _2: '10px',
        _3: '16px',
        _4: '25px',
        _5: '32px',
        _6: '40px',
        _7: '58px',
        full: '999999px',
      },
    },
    shadow: {
      box: {
        low: `
          0px 0.9px 1.1px hsl(0deg 0% 60% / 0.32),
          0px 1.6px 1.9px -1.1px hsl(0deg 0% 60% / 0.35),
          0.1px 3.8px 4.4px -2.2px hsl(0deg 0% 60% / 0.38)`,
        medium: `
          0px 0.9px 1.1px hsl(0deg 0% 0% / 0.135),
          0.1px 2.6px 3px -0.5px hsl(0deg 0% 0% / 0.14),
          0.1px 5px 5.9px -1.1px hsl(0deg 0% 0% / 0.15),
          0.3px 9.9px 11.6px -1.6px hsl(0deg 0% 0% / 0.155),
          0.5px 18.9px 22.1px -2.2px hsl(0deg 0% 0% / 0.165)`,
        high: `
          0px 0.9px 1.1px hsl(0deg 0% 60% / 0.25),
          0.1px 5px 5.9px -0.2px hsl(0deg 0% 60% / 0.26),
          0.2px 9px 10.5px -0.5px hsl(0deg 0% 60% / 0.26),
          0.4px 13.5px 15.8px -0.7px hsl(0deg 0% 60% / 0.27),
          0.5px 19.3px 22.6px -1px hsl(0deg 0% 60% / 0.28),
          0.8px 27.4px 32.1px -1.2px hsl(0deg 0% 60% / 0.28),
          1.1px 38.4px 44.9px -1.5px hsl(0deg 0% 60% / 0.29),
          1.5px 53.2px 62.3px -1.7px hsl(0deg 0% 60% / 0.3),
          2px 72.5px 84.9px -2px hsl(0deg 0% 60% / 0.31),
          2.7px 97.2px 113.8px -2.2px hsl(0deg 0% 60% / 0.31)`,
        variant1: `
          0px 0px 49px #D1C4E9
        `,
      },
    },
    transition: {
      easing: {
        accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
        decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
        default: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
      duration: {
        default: '200ms',
        medium: '420ms',
        long: '1200ms',
      },
    },
  },
})

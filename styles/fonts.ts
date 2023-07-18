import { vars } from './vars.css'

// Different font options available:
export const fontOptions = {
  sans: {
    family: "'proxima-nova', 'sans-serif'",
    weight: {
      light: '300',
      regular: '400',
      bold: '600',
    },
  },
}

export const fonts = {
  body: {
    fontFamily: fontOptions.sans.family,
    fontSize: '17px',
    fontWeight: fontOptions.sans.weight.regular,
    letterSpacing: '1px',
    lineHeight: 1.42,
  },
  p: {
    color: vars.color.neutral.darkGray,
    fontFamily: fontOptions.sans.family,
    /*15.75px → 28.33px */
    fontSize: 'clamp(0.98rem, calc(0.92rem + 0.30vw), 1.41rem)',
    fontWeight: fontOptions.sans.weight.regular,
    letterSpacing: '1px',
    lineHeight: 1.42,
  },
  bold: {
    fontFamily: fontOptions.sans.family,
    fontWeight: fontOptions.sans.weight.bold,
  },
  h1: {
    fontFamily: fontOptions.sans.family,
    fontSize: 'clamp(1.71rem, calc(1.52rem + 1.67vw), 5.29rem)',
    fontWeight: fontOptions.sans.weight.bold,
    letterSpacing: '2px',
    lineHeight: 1,
  },
  h2: {
    fontFamily: fontOptions.sans.family,
    fontSize: 'clamp(2.04rem, calc(1.92rem + 0.63vw), 2.92rem)',
    fontWeight: fontOptions.sans.weight.bold,
    letterSpacing: '2px',
    lineHeight: 1,
  },
  h3: {
    fontFamily: fontOptions.sans.family,
    fontSize: 'clamp(1.18rem, calc(1.11rem + 0.52vw), 2.43rem)',
    fontWeight: fontOptions.sans.weight.regular,
    letterSpacing: '2px',
    lineHeight: 1,
  },
  h4: {
    fontFamily: fontOptions.sans.family,
    fontSize: 'clamp(1.42rem, calc(1.33rem + 0.43vw), 2.03rem)',
    fontWeight: fontOptions.sans.weight.regular,
    letterSpacing: '1.5px',
    lineHeight: 1.8,
  },
  h5: {
    fontFamily: fontOptions.sans.family,
    fontSize: 'clamp(1.18rem, calc(1.11rem + 0.36vw), 1.69rem)',
    fontWeight: fontOptions.sans.weight.regular,
    letterSpacing: '1px',
    lineHeight: 1.5,
  },
  button: {
    fontFamily: fontOptions.sans.family,
    fontSize: 'clamp(0.98rem, calc(0.92rem + 0.30vw), 1.41rem)',
    fontWeight: fontOptions.sans.weight.light,
    letterSpacing: '0.75px',
    lineHeight: 1,
  },
  small: {
    fontFamily: fontOptions.sans.family,
    /*13.13px → 23.61px */
    fontSize: 'clamp(0.82rem, calc(0.77rem + 0.25vw), 1.17rem)',
    fontWeight: fontOptions.sans.weight.light,
    letterSpacing: '0.5px',
    lineHeight: 1,
  },
}

import { keyframes, style } from '@vanilla-extract/css'

const glitch = keyframes({
  '0%': {
    filter: 'url(#glitchshadow)',
    opacity: 1,
    width: '100%',
  },
  '100%': {
    filter: 'url(#glitchshadow)',
    opacity: 1,
    width: '100%',
  },
})

export const image = style({
  display: 'none',
  '@media': {
    '(min-width: 980px)': {
      display: 'flex',
      animation: `${glitch} 7s infinite linear`,
    },
  },
})

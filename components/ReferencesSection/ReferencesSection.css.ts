import { style } from '@vanilla-extract/css'
import { container } from '../../styles'

export const background = style({
  backgroundImage: 'url(/img/references/references-opaque-background.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: '10vw 5vw',
  '@media': {
    '(min-width: 768px)': {
      backgroundSize: '100% 100%',
    },
  },
})

export const content = style([
  container,
  {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
])

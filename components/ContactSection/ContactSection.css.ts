import { style } from '@vanilla-extract/css'
import { container, vars } from '../../styles'
import { fonts } from '../../styles/fonts'

export const contact = style([
  container,
  {
    alignItems: 'center',
    backgroundImage: "url('/img/general/background-wave.png')",
    backgroundSize: 'cover',
    backgroundPositionX: '10%',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    zIndex: '-1',
  },
])

export const content = style([
  container,
  {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: '0vw 15vw',
    margin: '30vw 0vw 10vw 0vw',
    '@media': {
      '(min-width: 768px)': {
        maxWidth: '100vw',
      },
    },
  },
])

export const inner = style({
  alignItems: 'center',
  background: 'rgba(255,255,255,0.2)',
  borderRadius: vars.ui.border.radius._6,
  boxShadow: vars.ui.shadow.box.low,
  justifyContent: 'center',
  padding: '8% 15.5%',
})

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.grid.spacing.s,
})

export const textContent = style({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: vars.grid.spacing.s,
})

export const header = style([fonts.h2])

export const text = style([
  fonts.p,
  {
    color: vars.color.neutral.white,
    textAlign: 'center',
  },
])

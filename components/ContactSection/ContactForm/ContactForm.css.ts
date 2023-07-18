import { style } from '@vanilla-extract/css'
import {
  buttonRecipe,
  font,
  glass,
  input as inputRecipe,
  vars,
} from '../../../styles'

export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.grid.spacing.s,
})

export const bottom = style({
  marginTop: vars.grid.spacing.s,
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  '@media': {
    '(min-width: 768px)': {
      flexDirection: 'row',
      textAlign: 'right',
      justifyContent: 'flex-end',
    },
  },
})

export const input = style([inputRecipe])

export const messageInput = style([
  inputRecipe,
  {
    minHeight: '45vw',
    '@media': {
      '(min-width: 768px)': {
        minHeight: '15vw',
      },
    },
  },
])

export const button = style([
  font.small,
  buttonRecipe({
    size: 'small',
    type: 'lightToDarkOnHover',
  }),
])

export const verification = style([
  glass,
  {
    display: 'inline-block',
    marginBlock: '0.5rem',
    paddingBlock: '0.5rem',
    paddingInline: '1rem',
  },
])

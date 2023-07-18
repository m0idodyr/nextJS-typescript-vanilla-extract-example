import { style } from '@vanilla-extract/css'
import { fonts } from './../../../styles/fonts'
import { container } from './../../../styles/recipes.css'
import { vars } from './../../../styles/vars.css'

export const valueText = style([
  container,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: vars.grid.spacing.m,
  },
])

/*Header text of individual feature element*/
export const header = style([
  fonts.h2,
  {
    color: vars.color.neutral.gray,
  },
])

export const text = style([
  fonts.p,
  {
    lineHeight: '1.7',
    marginBottom: vars.grid.spacing.xxs,
  },
])

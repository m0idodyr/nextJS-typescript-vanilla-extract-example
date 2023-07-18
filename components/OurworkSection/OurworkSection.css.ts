import { style } from '@vanilla-extract/css'
import { vars } from '../../styles'

export const ourWork = style({
  marginBottom: vars.grid.spacing.xxs,
})

export const intro = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.grid.spacing.s,
  justifyContent: 'center',
  textAlign: 'center',
  color: vars.color.neutral.darkGray,
})

export const introHeader = style({
  color: vars.color.brand.blueIris,
})

export const activeIndicator = style({
  borderRadius: '1rem',
  borderBottom: '0.6rem solid',
  borderBottomColor: vars.color.brand.blueIris,
  width: '4rem',
  display: 'block',
  marginTop: vars.grid.spacing.xxxs,
  marginBottom: vars.grid.spacing.xxxs,
})

export const introText = style({
  color: vars.color.neutral.darkGray,
})

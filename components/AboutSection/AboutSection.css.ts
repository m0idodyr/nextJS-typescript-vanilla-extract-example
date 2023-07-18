import { style } from '@vanilla-extract/css'
import { buttonRecipe, vars } from '../../styles'

export const about = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: vars.grid.spacing.xs,
  justifyContent: 'center',
  padding: vars.grid.spacing.xxl,
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
  '@media': {
    '(min-width: 980px)': {
      maxWidth: '48ch',
    },
  },
})

export const button = style([
  buttonRecipe({
    size: 'medium',
    type: 'lightToDarkOnHover',
  }),
  {
    boxShadow: vars.ui.shadow.box.low,
    '@media': {
      '(min-width: 980px)': {
        width: '10vw',
        minWidth: '9rem',
        padding: '0.8rem 0rem',
      },
    },
  },
])

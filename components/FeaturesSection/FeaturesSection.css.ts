import { style } from '@vanilla-extract/css'
import { buttonRecipe, container, vars } from '../../styles'

export const background = style({
  backgroundImage: 'url(/img/features/features-opaque-background.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  '@media': {
    '(min-width: 768px)': {
      backgroundSize: '100% 100%',
    },
  },
})

export const featuresContentWrapper = style([
  container,
  {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
  },
])

export const featuresHeader = style({
  color: vars.color.primary._00,
  fontStyle: 'italic',
  textAlign: 'center',
  marginBottom: vars.grid.spacing.l,
})

export const featuresHeaderSpan = style({
  color: vars.color.brand.orchid,
})

/*Large button at the end of the features section*/
export const button = style([
  buttonRecipe({
    size: 'large',
    type: 'lightDarkBorderOnHover',
  }),
  {
    alignSelf: 'center',
    marginTop: vars.grid.spacing.xxl,
    marginBottom: vars.grid.spacing.xxl,
    '@media': {
      '(max-width: 768px)': {
        maxWidth: '14rem',
        padding: vars.grid.spacing.xxxs,
      },
    },
  },
])

/*Header text of individual feature element*/
export const featuresItemHeader = style({
  color: vars.color.primary._00,
})

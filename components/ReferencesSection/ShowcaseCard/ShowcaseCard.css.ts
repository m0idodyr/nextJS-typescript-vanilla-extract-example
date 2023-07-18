import { style } from '@vanilla-extract/css'
import { buttonRecipe, container, font, vars } from '../../../styles'

export const showcaseCard = style([
  container,
  {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
])

export const inner = style({
  alignItems: 'center',
  backgroundColor: vars.color.neutral.white,
  borderRadius: vars.ui.border.radius._6,
  boxShadow: vars.ui.shadow.box.variant1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  '@media': {
    '(min-width: 980px)': { maxWidth: '60%' },
  },
})

export const top = style({
  background:
    'linear-gradient(90deg, rgba(106,27,154,1) 0%, rgba(146,36,171,1) 46%, rgba(156,44,170,1) 55%, rgba(234,101,157,1) 100%)',
  borderTopLeftRadius: vars.ui.border.radius._6,
  borderTopRightRadius: vars.ui.border.radius._6,
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  textAlign: 'center',
  width: '100%',
  '@media': {
    '(min-width: 980px)': { padding: '2vw' },
  },
})

export const title = style([font.h2])

export const middle = style({
  alignItems: 'center',
  color: vars.color.neutral.darkGray,
  display: 'flex',
  flexDirection: 'column',
  flex: 2,
  gap: vars.grid.spacing.xs,
  justifyContent: 'center',
  padding: vars.grid.spacing.m,
  textAlign: 'center',
  width: '100%',
  '@media': {
    '(min-width: 980px)': {
      padding: '4vw 3vw 4vw 3vw',
      flexDirection: 'column',
    },
  },
})

export const innerTitle = style([font.h3])

export const innerContent = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  '@media': {
    '(min-width: 980px)': {
      flexDirection: 'row',
    },
  },
})

export const subtitle = style([font.small])
export const subtitle2 = style([font.small])

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    '(min-width: 980px)': {
      flexDirection: 'row',
    },
  },
})

export const text = style({
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  padding: vars.grid.spacing.s,
  maxWidth: '25ch',
  '@media': {
    '(min-width: 980px)': {
      textAlign: 'left',
    },
  },
})

export const imageWrapper = style({
  maxWidth: '400px',
  '@media': {
    '(min-width: 980px)': {},
  },
})

export const image = style({
  display: 'flex',
})

export const bottom = style({
  alignItems: 'center',
  backgroundColor: vars.color.brandGradient._0,
  borderBottomLeftRadius: vars.ui.border.radius._6,
  borderBottomRightRadius: vars.ui.border.radius._6,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: vars.grid.spacing.xs,
  justifyContent: 'center',
  textAlign: 'center',
  padding: '2rem',
  width: '100%',
  '@media': {
    '(min-width: 980px)': { padding: '2vw' },
  },
})

export const button = style([
  font.small,
  buttonRecipe({
    size: 'large',
    type: 'alwaysOnLight',
  }),
  {
    textAlign: 'center',
    '@media': {
      '(max-width: 768px)': {
        maxWidth: '350px',
      },
    },
  },
])

export const showcaseCardImage = style({})

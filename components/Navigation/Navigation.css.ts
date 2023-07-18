import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { buttonRecipe, vars } from '../../styles'

export const header = recipe({
  base: [
    {
      color: vars.color.neutral.white,
      left: 0,
      position: 'fixed',
      top: 0,
      transition: `transform ${vars.ui.transition.duration.default} ${vars.ui.transition.easing.default}`,
      width: '100%',
      willChange: 'transform',
      zIndex: 10,
    },
  ],
  variants: {
    isHidden: {
      true: {
        transform: 'translateY(-100%)',
      },
      false: {
        transform: 'translateY(0)',
      },
    },
    showBackground: {
      true: {
        background:
          'linear-gradient(90deg, rgba(106,27,154,1) 0%, rgba(146,36,171,1) 46%, rgba(156,44,170,1) 55%, rgba(234,101,157,1) 100%)',
      },
      false: {
        backgroundColor: 'transparent',
      },
    },
  },
})

export const nav = style({
  paddingBlock: '1rem',
  paddingInline: '.5rem',
  '@media': {
    '(min-width: 540px)': {
      paddingInline: '2rem',
    },
  },
})

export const logo = style({
  width: '100%',
  maxWidth: '150px',
  '@media': {
    '(min-width: 540px)': {
      display: 'block',
    },
  },
})

export const wrapper = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginLeft: vars.grid.spacing.xxs,
  marginRight: vars.grid.spacing.xxs,
  position: 'relative',
  '@media': {
    '(min-width: 540px)': {
      flexDirection: 'row',
      margin: 0,
      justifyContent: 'space-between',
    },
  },
})

export const links = style({
  alignItems: 'center',
  gap: vars.grid.spacing.xxs,
  whiteSpace: 'nowrap',
  display: 'none',
  '@media': {
    '(max-width: 540px)': {},
    '(min-width: 540px)': {
      gap: vars.grid.spacing.s,
      display: 'flex',
    },
  },
})

export const item = style({
  display: 'flex',
})

export const active = style({
  color: 'pink',
})

export const button = style([
  buttonRecipe({
    size: 'small',
    type: 'lightToDarkOnHover',
  }),
  {
    display: 'none',
    maxWidth: '16rem',
    padding: '0.4rem 2rem',
    '@media': {
      '(min-width: 840px)': {
        display: 'flex',
      },
    },
  },
])

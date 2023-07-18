import { style } from '@vanilla-extract/css'
import { buttonRecipe, container, font, vars } from '../../styles'

export const hero = style({
  background:
    'linear-gradient(90deg, rgba(106,27,154,1) 0%, rgba(146,36,171,1) 46%, rgba(156,44,170,1) 55%, rgba(234,101,157,1) 100%)',
  backgroundPositionX: '5%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  minHeight: '100vh',
  maxHeight: '100vh',
  zIndex: '-1',
  '@media': {
    //Table sizing
    '(min-width: 768px) and (max-width: 1024px)': {
      minHeight: 'clamp(min(80vw, 60rem), 300px, max(100vw, 90rem))',
    },
  },
})

export const content = style([
  container,
  {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    gap: vars.grid.spacing.s,
    marginLeft: vars.grid.spacing.s,
    marginRight: vars.grid.spacing.s,
    '@media': {
      '(min-width: 768px)': {
        marginBottom: vars.grid.spacing.l,
      },
    },
  },
])

export const inner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.grid.spacing.xxl,
  justifyContent: 'center',
  '@media': {
    '(min-width: 980px)': {
      flexDirection: 'row',
      marginBottom: vars.grid.spacing.m,
    },
  },
})

export const textContent = style({
  alignItems: 'center',
  display: 'flex',
  flex: 2,
  flexDirection: 'column',
  gap: vars.grid.spacing.xxs,
  textAlign: 'center',
  '@media': {
    '(min-width: 980px)': {
      textAlign: 'left',
      alignItems: 'flex-start',
    },
  },
})

export const headerText = style([
  font.h1,
  {
    lineHeight: '1.1',
    '@media': {
      //Horizontal mobile
      '(max-width: 768px) and (max-height: 414px)': {
        fontSize: 'clamp(0rem, 0.3063rem + 3.5vw, 5.5rem)',
        marginTop: vars.grid.spacing.xs,
      },
      '(min-width: 980px)': {
        maxWidth: '19ch',
        minWidth: '19ch',
      },
    },
  },
])

export const secondaryText = style({
  lineHeight: '1.7',
  marginBottom: vars.grid.spacing.xxs,
  '@media': {
    //Horizontal mobile
    '(max-width: 768px) and (max-height: 414px)': {
      fontSize: 'clamp(0.3rem, 0.3813rem + 1vw, 2rem)',
      maxWidth: '80%',
    },
    '(min-width: 980px)': {
      fontSize: '1.328vw',
      maxWidth: '42ch',
      minWidth: '24rem',
    },
  },
})

export const button = style([
  buttonRecipe({
    size: 'medium',
    type: 'lightToDarkOnHover',
  }),
  {
    '@media': {
      '(min-width: 980px)': {
        width: '10vw',
        minWidth: '9rem',
        padding: '0.8rem 0rem',
      },
    },
  },
])

export const imageWrapper = style({
  maxWidth: '15vw',
  minWidth: '11.5rem',
  flex: 1,
})

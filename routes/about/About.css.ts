import { style } from '@vanilla-extract/css'
import { container, vars } from '../../styles'
import { font } from './../../styles/'

export const about = style({
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
    //Tablet sizing
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
        marginBottom: vars.grid.spacing.xxl,
      },
    },
  },
])

export const inner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    '(min-width: 980px)': {
      flexDirection: 'row',
      gap: vars.grid.spacing.xxxl,
      maxWidth: '68vw',
    },
  },
})

export const textContent = style({
  alignItems: 'center',
  display: 'flex',
  flex: 2,
  flexDirection: 'column',
  gap: vars.grid.spacing.s,
  justifyContent: 'center',
  textAlign: 'center',
  marginBottom: vars.grid.spacing.s,
})

export const headerText = style([
  font.h2,
  {
    lineHeight: '1.1',
    '@media': {
      //Horizontal mobile
      '(max-width: 768px) and (max-height: 414px)': {
        fontSize: 'clamp(0rem, 0.3063rem + 2.5vw, 5.5rem)',
      },
    },
  },
])

export const secondaryText = style([
  font.p,
  {
    marginBottom: vars.grid.spacing.xxs,
    color: vars.color.neutral.white,
    '@media': {
      //Horizontal mobile
      '(max-width: 768px) and (max-height: 414px)': {
        fontSize: 'clamp(0.3rem, 0.3813rem + 1vw, 2rem)',
        maxWidth: '80%',
        marginBottom: vars.grid.spacing.xl,
      },
    },
  },
])

export const mid = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: vars.grid.spacing.xl,
})

export const intro = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: vars.grid.spacing.xxs,
  justifyContent: 'center',
  maxWidth: '90%',
  textAlign: 'center',
  color: vars.color.neutral.darkGray,
  '@media': {
    '(min-width: 980px)': {
      maxWidth: '64ch',
      marginTop: vars.grid.spacing.m,
    },
  },
})

export const item = style({
  display: 'flex',
  alignSelf: 'center',
  maxWidth: '90%',
  '@media': {
    '(min-width: 980px)': {
      maxWidth: '52ch',
    },
  },
})

export const commitments = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: vars.grid.spacing.xl,
  justifyContent: 'center',
  marginTop: vars.grid.spacing.xxxl,
  textAlign: 'center',
})

export const values = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: vars.grid.spacing.xl,
  justifyContent: 'center',
  textAlign: 'center',
})

export const team = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
})

export const profile = style([
  {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: vars.grid.spacing.m,
  },
])

export const profilePicture = style({
  flex: 1,
})

export const profileTextWrapper = style({
  flex: 1,
})

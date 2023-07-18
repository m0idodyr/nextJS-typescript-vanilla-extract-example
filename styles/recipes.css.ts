import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { fonts } from './fonts'
import { vars } from './vars.css'

export const container = style({
  marginInline: 'auto',
  maxWidth: vars.grid.maxWidth,
  paddingInline: '1rem',
  width: '100%',
  '@media': {
    '(min-width: 768px)': {
      paddingInline: vars.grid.spacing.s,
    },
  },
})

export const containerMedium = style({
  marginInline: 'auto',
  maxWidth: vars.grid.maxWidthMedium,
  paddingInline: '1rem',
  width: '100%',
  '@media': {
    '(min-width: 768px)': {
      paddingInline: vars.grid.spacing.s,
    },
  },
})

export const containerSmall = style({
  marginInline: 'auto',
  maxWidth: vars.grid.maxWidthSmall,
  paddingInline: '1rem',
  width: '100%',
  '@media': {
    '(min-width: 768px)': {
      paddingInline: vars.grid.spacing.s,
    },
  },
})

export const absolute = style({
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  width: '100%',
})

// Roughly generated with https://css.glass
export const glass = style({
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: vars.ui.border.radius._0,
})

export const gradientText = style({
  background: `-webkit-linear-gradient(0deg, ${vars.color.secondary._00}, ${vars.color.primary._00})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
})

export const input = style({
  font: 'inherit',
  fontSize: fonts.body.fontSize,
  background: 'transparent',
  border: '1px solid white',
  borderRadius: vars.ui.border.radius._2,
  color: vars.color.neutral.white,
  outline: 0,
  padding: '1rem',
  selectors: {
    '&::-webkit-input-placeholder': {
      color: 'inherit',
      opacity: 0.5,
    },
    '&::-moz-placeholder': {
      color: 'inherit',
      opacity: 0.5,
    },
    '&:-ms-input-placeholder': {
      color: 'inherit',
      opacity: 0.5,
    },
    '&::placeholder': {
      color: 'inherit',
      opacity: 0.5,
    },
  },
})

export const buttonRecipe = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.color.neutral.white,
    borderRadius: vars.ui.border.radius.full,
    color: vars.color.brand.blueIris,
    cursor: 'pointer',
    transition: `color ${vars.ui.transition.duration.medium} ${vars.ui.transition.easing.default}`,
    width: '100%',
    height: '100%',
  },
  variants: {
    size: {
      small: {
        fontSize: 'inherit',
        fontWeight: 'bold',
        letterSpacing: '1px',
        maxWidth: '200px',
        maxHeight: '64px',
        padding: '10px',
      },
      medium: {
        fontWeight: 'bold',
        letterSpacing: '1px',
        maxWidth: '279px',
        maxHeight: '68px',
        padding: '15px',
      },
      large: {
        fontWeight: 'bold',
        letterSpacing: '1px',
        maxWidth: '400px',
        maxHeight: '98px',
        padding: '17px',
      },
      xl: {
        fontWeight: 'bold',
        letterSpacing: '1px',
        maxWidth: '947px',
        maxHeight: '162px',
        padding: '25px',
      },
    },
    type: {
      alwaysOnLight: {
        color: vars.color.brand.blueIris,
        backgroundColor: vars.color.neutral.white,
      },
      alwaysOnDark: {
        color: vars.color.neutral.white,
        backgroundColor: vars.color.brand.blueIris,
      },
      lightDarkBorder: {
        color: vars.color.brand.blueIris,
        backgroundColor: vars.color.neutral.white,
        border: '0.8rem solid',
        borderColor: vars.color.brand.blueIris,
        borderRadius: vars.ui.border.radius._5,
      },
      lightDarkBorderOnHover: {
        border: '0.3rem solid',
        borderColor: vars.color.brand.blueIris,
        borderRadius: vars.ui.border.radius._5,
        selectors: {
          '&:hover': {
            color: vars.color.neutral.white,
            backgroundColor: vars.color.brand.blueIris,
          },
        },
      },
      lightToDarkOnHover: {
        selectors: {
          '&:hover': {
            color: vars.color.neutral.white,
            backgroundColor: vars.color.brand.blueIris,
          },
        },
      },
      darkToLightOnHover: {
        color: vars.color.neutral.white,
        backgroundColor: vars.color.brand.blueIris,
        selectors: {
          '&:hover': {
            color: vars.color.neutral.white,
            backgroundColor: vars.color.neutral.white,
          },
        },
      },
    },
  },
})

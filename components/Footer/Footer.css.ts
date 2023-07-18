import { style } from '@vanilla-extract/css'
import { vars } from '../../styles'

export const footer = style([
  {
    backgroundColor: vars.color.tertiary._0,
    isolation: 'isolate',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
])

export const inner = style([
  {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: vars.grid.spacing.xxs,
    justifyContent: 'center',
    paddingBlock: vars.grid.spacing.xxs,
    paddingInline: vars.grid.spacing.xxs,
    paddingTop: vars.grid.spacing.l,
    paddingBottom: vars.grid.spacing.l,
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    zIndex: '1',
    '@media': {
      '(min-width: 768px)': {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: vars.grid.spacing.l,
        paddingRight: vars.grid.spacing.l,
        paddingTop: vars.grid.spacing.xxs,
        paddingBottom: vars.grid.spacing.xxs,
        textAlign: 'inherit',
      },
    },
  },
])

export const footerLogo = style({
  maxWidth: '38px',
})

export const copyright = style({
  '@media': {
    '(max-width: 768px)': {
      marginTop: vars.grid.spacing.xxs,
    },
  },
})

export const social = style({
  display: 'flex',
  flexDirection: 'row',
  '@media': {
    '(min-width: 768px)': {
      marginLeft: 'auto',
    },
  },
})

export const img = style({
  maxWidth: '38px',
  maxHeight: 'auto',
})

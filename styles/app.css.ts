// Global Styles
import { globalStyle } from '@vanilla-extract/css'

import './fontImport.css'
import { fonts } from './fonts'
import './normalize.css'
import { vars } from './vars.css'

globalStyle('html', {
  scrollBehavior: 'smooth',
})

globalStyle('html, body', {
  ...fonts.body,
  color: vars.color.neutral.white,
  height: '100%',
  width: '100%',
})

globalStyle('#__next', {
  ...fonts.p,
  color: vars.color.neutral.white,
  height: '100%',
  width: '100%',
})

globalStyle('b,strong', {
  ...fonts.bold,
})

globalStyle('h1', {
  ...fonts.h1,
})

globalStyle('h2', {
  ...fonts.h2,
})

globalStyle('h3', {
  ...fonts.h3,
})

globalStyle('h4', {
  ...fonts.h4,
})

globalStyle('h5', {
  ...fonts.h5,
})

globalStyle('p', {
  font: 'inherit',
})

globalStyle('p + p', {
  marginTop: vars.grid.spacing.xxs,
})

globalStyle('pre code', {
  backgroundColor: 'transparent',
  whiteSpace: 'pre-wrap',
})

globalStyle('button', {
  ...fonts.button,
})

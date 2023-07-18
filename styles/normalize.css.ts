import { globalStyle } from '@vanilla-extract/css'

globalStyle('*, ::after, ::before', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
})

globalStyle('html, body', {
  minHeight: '100%',
})

globalStyle('textarea', {
  overflow: 'auto',
})

globalStyle('progress', {
  verticalAlign: 'baseline',
})

globalStyle('canvas, figure, img, video', {
  borderStyle: 'none',
  display: 'block',
  height: 'auto',
  width: '100%',
})

globalStyle('a', {
  backgroundColor: 'transparent',
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('button', {
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: 0,
  color: 'currentcolor',
  cursor: 'pointer',
  display: 'inline-block',
  outline: 'none',
  overflow: 'visible',
  padding: 0,
  WebkitAppearance: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
})

import { style } from '@vanilla-extract/css'

export const waves = style({
  minHeight: '261',
})

export const wave1 = style({
  backgroundImage: "url('/img/hero/hero-white-wave.svg')",
  backgroundSize: 'cover',
  backgroundPositionX: '10%',
  backgroundRepeat: 'no-repeat',
  height: '261px',
  marginBottom: '-2px',
  marginTop: '-261px',
})
export const wave2 = style({
  height: '248.9px',
  backgroundImage: "url('/img/hero/hero-opaque-wave1.svg')",
  backgroundSize: 'cover',
  backgroundPositionX: '10%',
  backgroundRepeat: 'no-repeat',
  marginBottom: '-10px',
  marginTop: '-250px',
})
export const wave3 = style({
  height: '340px',
  backgroundImage: "url('/img/hero/hero-opaque-wave2.svg')",
  backgroundSize: 'cover',
  backgroundPositionX: '10%',
  backgroundRepeat: 'no-repeat',
  marginTop: '-264px',
})

import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { buttonRecipe, container, gradientText, vars } from '../../../styles'
import { fonts } from '../../../styles/fonts'

export const textImage = style({
  marginBlock: vars.grid.spacing.s,
  marginBottom: vars.grid.spacing.l,
  overflow: 'hidden',
  paddingBlock: vars.grid.spacing.s,
  width: '100%',
  '@media': {
    '(min-width: 768px)': {
      marginBlock: vars.grid.spacing.s,
      paddingBlock: vars.grid.spacing.s,
    },
  },
})

export const inner = recipe({
  base: [
    container,
    {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column-reverse',
      gap: vars.grid.spacing.xs,
      justifyContent: 'center',
      '@media': {
        '(min-width: 768px)': {
          flexDirection: 'row',
          gap: vars.grid.spacing.l,
        },
      },
    },
  ],
  variants: {
    swap: {
      true: {
        '@media': {
          '(min-width: 768px)': {
            flexDirection: 'row-reverse',
          },
        },
      },
      false: {},
    },
  },
})

export const textContentWrapper = recipe({
  base: [
    {
      alignItems: 'flex-end',
      justifyContent: 'center',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      gap: vars.grid.spacing.s,
      textAlign: 'right',
      '@media': {
        '(max-width: 768px)': {
          alignItems: 'center',
          textAlign: 'center',
        },
      },
    },
  ],
  variants: {
    swap: {
      true: {
        '@media': {
          '(min-width: 768px)': {
            alignItems: 'flex-start',
            textAlign: 'left',
          },
        },
      },
      false: {},
    },
  },
})

export const content = style({
  flex: 1,
  maxWidth: '52ch',
  gap: vars.grid.spacing.s,
})

export const title = style([
  gradientText,
  {
    marginBottom: vars.grid.spacing.xxs,
    textAlign: 'center',
    '@media': {
      '(min-width: 768px)': {
        textAlign: 'inherit',
      },
    },
  },
])

export const text = style([
  fonts.p,
  {
    opacity: 0.8,
    marginBottom: vars.grid.spacing.s,
    maxWidth: '30rem',
  },
])

export const imageContentWrapper = style({
  display: 'grid',
  flex: 1,
})

/*This is here cause backgroundImage stylevariants didn't accept baseBackgroundImageStyle as a recipe.
this piece of code with imageContentWrapper ensure that the blobs align neatly. Without it
I cannot use flex: 1 to define common size for picture and text sections, without the blobs with swap
property aligning themselves to the beginning of the container. Let me know if there's a better solution*/

export const imageWrapper = recipe({
  base: [
    {
      '@media': {
        '(min-width: 768px)': {},
      },
    },
  ],
  variants: {
    swap: {
      true: {
        '@media': {
          '(min-width: 768px)': {
            justifySelf: 'flex-end',
          },
        },
      },
      false: {},
    },
  },
})

const baseBackgroundImageStyle = style({
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  minWidth: '250px',
  minHeight: '283px',
  height: '30vw',
  width: '25vw',
})

export const backgroundImage = styleVariants({
  background1: [
    baseBackgroundImageStyle,
    {
      backgroundImage: "url('/img/features/background-blob1.png')",
    },
  ],
  background2: [
    baseBackgroundImageStyle,
    {
      backgroundImage: "url('/img/features/background-blob2.png')",
    },
  ],
  background3: [
    baseBackgroundImageStyle,
    {
      backgroundImage: "url('/img/features/background-blob3.png')",
    },
  ],
})

export const button = style([
  buttonRecipe({
    size: 'small',
    type: 'alwaysOnDark',
  }),
  {
    padding: '0.6rem',
  },
])

export const activeIndicator = style({
  borderRadius: '1rem',
  borderBottom: '0.6rem solid',
  borderBottomColor: vars.color.brand.blueIris,
  width: '4rem',
  display: 'block',
  marginTop: vars.grid.spacing.xxxs,
  marginBottom: vars.grid.spacing.xxxs,
})

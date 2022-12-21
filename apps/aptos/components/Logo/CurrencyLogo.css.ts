import { style } from '@vanilla-extract/css'

export const aptosLogoClass = style({
  selectors: {
    '[data-theme="dark"] &': {
      filter: 'invert(1)',
    },
  },
})

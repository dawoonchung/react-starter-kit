module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
  ],
  ignoreFiles: [
    '**/vendor/*',
  ],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'lost', // Lost grid
        'value', // CSS modules
      ],
    }],
    'declaration-no-important': true,
    'order/properties-alphabetical-order': null,
    'order/properties-order': [
      [
        'position',
        'z-index',
        'top',
        'right',
        'bottom',
        'left',
        'display',
        'overflow',
        'overflow-x',
        'overflow-y',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'box-sizing',
        'flex',
        'flex-basis',
        'flex-direction',
        'flex-flow',
        'flex-grow',
        'flex-shrink',
        'flex-wrap',
        'grid',
        'grid-area',
        'grid-auto-columns',
        'grid-auto-rows',
        'grid-auto-flow',
        'gap',
        'grid-gap',
        'grid-column',
        'column-gap',
        'grid-column-gap',
        'grid-column-start',
        'grid-column-end',
        'grid-row',
        'row-gap',
        'grid-row-gap',
        'grid-row-start',
        'grid-row-end',
        'grid-template',
        'grid-template-areas',
        'grid-template-columns',
        'grid-template-rows',
        'align-content',
        'align-items',
        'align-self',
        'justify-content',
        'justify-items',
        'justify-self',
        'place-content',
        'place-items',
        'place-self',
        'order',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'border',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'border-radius',
        'border-radius-top',
        'border-radius-right',
        'border-radius-bottom',
        'border-radius-left',
        'border-color',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
      ],
      {
        unspecified: 'bottomAlphabetical',
      },
    ],
    'property-no-unknown': [true, {
      ignoreProperties: [
        // CSS modules
        'composes',
        'compose-with',
        // Lost grid
        'lost-align',
        'lost-center',
        'lost-column',
        'lost-flex-container',
        'lost-masonry-column',
        'lost-masonry-wrap',
        'lost-move',
        'lost-offset',
        'lost-row',
        'lost-unit',
        'lost-utility',
        'lost-waffle',
      ],
      // CSS modules
      ignoreSelectors: [
        ':export',
        /^:import/,
      ],
    }],
    'selector-class-pattern': [
      '^[a-z0-9\\-\\_]+$',
      {
        message: 'Selector should be written in lowercase with hyphens or underscore (selector-class-pattern)',
      },
    ],
    // CSS modules
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: [
        'export',
        'import',
        'global',
        'local',
        'external',
      ],
    }],
    // CSS modules
    'selector-type-no-unknown': [true, {
      ignoreTypes: ['from'],
    }],
  },
};

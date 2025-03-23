import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const configuration = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '#d6d9e0',
      100: '#aeb4c2',
      200: '#868fa3',
      300: '#5e6a84',
      400: '#374465',
      500: '#0f172a',
      600: '#0c1322',
      700: '#090f1a',
      800: '#070b14',
      900: '#05070f',
      950: '#020308'
    }
  }
});

export default configuration;

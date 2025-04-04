import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const configuration = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: '#d6d9e0',
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
      },
      dark: {
        primary: {
          50: '#ffffff',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#b2b2b2',
          400: '#999999',
          500: '#808080',
          600: '#404040',
          700: '#262626',
          800: '#121212',
          900: '#0a0a0a',
          950: '#000000'
        }
      },
    }
  }
});


export default configuration;

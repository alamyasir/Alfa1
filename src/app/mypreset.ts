import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MyPreset = definePreset(Aura, {
    semantic: {
        // primary: {
        //     50: '{blue.50}',
        //     100: '{blue.100}',
        //     200: '{blue.200}',
        //     300: '{blue.300}',
        //     400: '{blue.400}',
        //     500: '{blue.500}',
        //     600: '{blue.600}',
        //     700: '{blue.700}',
        //     800: '{blue.800}',
        //     900: '{blue.900}',
        //     950: '{blue.950}',
        // },
        colorScheme: {
            light: {
                primary: {
                    color: '#5D5FEF',
                    // inverseColor: '#ffffff',
                    hoverColor: '#5456D7',
                    activeColor: '#4A4CBF',
                },
                highlight: {
                    background: '#5456D7',
                    focusBackground: '#5456D7',
                    color: '#ffffff',
                    focusColor: '#ffffff',
                },

            },
            dark: {
                primary: {
                    color: '{blue.700}',
                    inverseColor: '{blue.50}',
                    hoverColor: '{blue.100}',
                    activeColor: '{blue.200}',
                },
                highlight: {
                    background: '{blue.950}',
                    focusBackground: '{blue.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff',
                },
            },
        },

    },
});

export default MyPreset;

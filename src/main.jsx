import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
	blue: {
		900: '#324152',
		500: '#5457B6',
		100: '#C3C4EF',
	},
	gray: {
		900: '#67727E',
		500: '#CFD1D6',
		100: '#F5F6FA',
	},
	red: {
		900: '#D71A1F',
		500: '#ED6468',
		100: '#FFB8BB',
	},
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);

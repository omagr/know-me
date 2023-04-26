import { ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import NavWinddow from '../components/NavWinddow';
import Socials from '../components/Socials';
import { CustomTheme } from '../Constants/customTheme';
import '../styles/globals.css';
export const navWin = React.createContext();

function MyApp({ Component, pageProps }) {
	// by default nav window
	const [navWindow, set_navWindow] = useState(false);

	return (
		<ChakraProvider
			theme={CustomTheme}
			className='myApp'
			style={{ backgroundColor: 'red' }}>
			<navWin.Provider value={[navWindow, set_navWindow]}>
				<Navbar />
				{!navWindow && <Component {...pageProps} />}

				{/* <Socials /> */}

				<NavWinddow />
			</navWin.Provider>
		</ChakraProvider>
	);
}

export default MyApp;

import { AppProps } from 'next/app'
import RelayEnviroment from "../relay/RelayEnviroment";
import { ChakraProvider } from '@chakra-ui/react'
import { RelayEnvironmentProvider } from "react-relay";

import theme from '../theme'
import './styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RelayEnvironmentProvider environment={RelayEnviroment}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RelayEnvironmentProvider>
  )
}

export default MyApp

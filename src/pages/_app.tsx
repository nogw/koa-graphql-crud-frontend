import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { AppProps } from 'next/app'
import RelayEnviroment from "../../relay/RelayEnviroment";
import { RelayEnvironmentProvider } from "react-relay";
import './styles.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <RelayEnvironmentProvider environment={RelayEnviroment}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RelayEnvironmentProvider>
  )
}

export default MyApp

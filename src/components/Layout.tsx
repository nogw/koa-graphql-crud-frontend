import {
  Box,
} from '@chakra-ui/react'

import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { FormRegistration } from '../components/FormRegistration'

const Layout = ({ children }) => (
  <Container height="100vh">
    <DarkModeSwitch />
    <Box 
      as="form"
      maxWidth="400px"
      display="flex" 
      gridGap="6px"
      flexDirection="column"  
    >
      {children}
    </Box>
  </Container>
)

export default Layout

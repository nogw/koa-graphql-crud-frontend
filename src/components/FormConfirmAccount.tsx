import { 
  Button, 
  PinInput, 
  PinInputField, 
  HStack,
} from "@chakra-ui/react"

import { CloseButton } from "@chakra-ui/close-button";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { Box } from "@chakra-ui/layout";
import { useToast } from '@chakra-ui/toast'
import { useState } from "react";

const AlertError = ({ message, action, setAction }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>{message}</AlertTitle>
      <CloseButton onClick={()=>setAction(!action)} position="absolute" right="8px" top="8px" />
    </Alert>  
  )
}

export const FormConfirmAccount = () => {
  const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleClick = () => setShow(!show)
  const toast = useToast()

  const handleSendCodeFake = () => {
    setIsLoading(true)
    setTimeout(() => { 
      setIsLoading(false) 
      toast({
        title: "Verificado com sucesso.",
        status: "success",
        variant: "top-accent",
        duration: 1000,
        isClosable: true,
      })
    }, 1000);
  }

  return (
    <>
      <HStack width="100%">
        <PinInput size="lg" placeholder="🐒">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Button 
        mt={4} 
        width="100%"
        isLoading={isLoading}
        onClick={handleSendCodeFake}
      >
        Confirm
      </Button>
    </>
  );
}
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Text
} from "@chakra-ui/react"

import { Box, Link } from "@chakra-ui/layout";
import { useToast } from '@chakra-ui/toast'
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import * as NextLink  from 'next/link'
import { useFormik, FormikProvider } from 'formik'
import { useMutation } from 'react-relay';
import * as yup from 'yup';

type Values = {
  name: string,
  email: string,
  password: string,
  passwordConfirm: string
}

export const FormRegistration = () => {
  const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleClick = () => setShow(!show)
  const toast = useToast()

  const onSubmit = (values: Values) => {
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

    const config = {
      variables: {
        input: {
          name: values.name,
          email: values.email,
          password: values.password,
        }
      },
      onCompleted(data) {
        console.log(data)
        setIsLoading(false) 
        toast({
          title: "Verificado com sucesso.",
          status: "success",
          variant: "top-accent",
          duration: 1000,
          isClosable: true,
        })
      }
    }
  }

  const formik = useFormik<Values>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
    },
    validateOnMount: true,
    validationSchema: yup.object().shape({
      name: yup.string().email().required("Email is required"),
      email: yup.string().required("Email is required"),
      password: yup.string().required("Email is required"),
      passwordConfirm: yup.string().required("Email is required"),
    }),
    onSubmit,
  })

  return (
    <FormikProvider value={formik}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input type="name" name="name"/>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" name="email"/>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              pr="2.5rem"
              type={show ? "text" : "password"}
              name="password"
            />
            <InputRightElement>
              <Box h="1.75rem" size="xs" cursor="pointer"onClick={handleClick}>
                {show ? <ViewIcon color="#e3e3e3"/> : <ViewOffIcon/>}
              </Box>
            </InputRightElement>
          </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password confirm</FormLabel>
          <InputGroup>
            <Input
              pr="2.5rem"
              type={show ? "text" : "password"}
              name="passwordConfirm"
            />
            <InputRightElement>
              <Box h="1.75rem" size="xs" cursor="pointer"onClick={handleClick}>
                {show ? <ViewIcon color="#e3e3e3"/> : <ViewOffIcon/>}
              </Box>
            </InputRightElement>
          </InputGroup>
      </FormControl>
      <Button 
        mt={4} 
        width="100%"
        isLoading={isLoading}
        // onClick={onSubmit}
      >
        Sign up
      </Button>
   
      <Text color="#7c7c7c" mt={2}>
        Already have an account?
        <NextLink.default href="/login">
          <Link color="blue.700"> Log in</Link>
        </NextLink.default>
      </Text>
    </FormikProvider>
  );
}
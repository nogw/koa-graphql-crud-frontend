import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Checkbox,
  Link,
  Box,
  Stack,
  Text,
  useToast
} from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useFormik, FormikProvider } from 'formik';
import * as yup from 'yup';
import { useState } from "react";
import * as NextLink  from 'next/link'
import { useMutation } from 'react-relay'
import Router from 'next/router'
import { UserLoginMutation } from './UserLoginMutation'
import { UserLoginMutation_UserMutation, UserLoginMutation_UserMutationResponse } from './__generated__/UserLoginMutation_UserMutation.graphql'

type Values = {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleClick = () => setShow(!show)
  const toast = useToast()

  const [commit] = useMutation<UserLoginMutation_UserMutation>(UserLoginMutation)

  const onSubmit = (values: Values) => {
    // setIsLoading(true)
    
    const config = {
      variables: {
        input: {
          email: values.email,
          password: values.password
        }
      },
      onCompleted({ userLoginMutation }: UserLoginMutation_UserMutationResponse) {
        if (userLoginMutation?.error) {
          toast({
            title: userLoginMutation.error,
            status: "error",
            variant: "top-accent",
            duration: 1000,
            isClosable: true,
          })

          setIsLoading(false)
          return
        }

        if (userLoginMutation?.token) {
          console.log(userLoginMutation.token)

          setIsLoading(false)
        }

        Router.push("/profile")
      }
    }

    commit(config)
  }

  const formik = useFormik<Values>({
    initialValues: {
      email: "",
      password: ""
    },
    validateOnMount: true,
    validationSchema: yup.object().shape({
      email: yup.string().email().required("Email is required"),
      password: yup.string().required("Password is required"),
    }),
    onSubmit
  })

  const { handleChange, handleSubmit, values } = formik

  return (
    <FormikProvider value={formik}>
      <FormControl isRequired>
        <FormLabel>Email address</FormLabel>
        <Input 
          type="email" 
          name="email"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              pr="2.5rem"
              type={show ? "text" : "password"}
              name="password"
              onChange={handleChange}
            />
            <InputRightElement>
              <Box h="1.75rem" size="xs" cursor="pointer" onClick={handleClick}>
                {show ? <ViewIcon color="#e3e3e3"/> : <ViewOffIcon/>}
              </Box>
            </InputRightElement>
          </InputGroup>
      </FormControl>
      <Stack
        mt={2}
        direction={{ base: 'column', sm: 'row' }}
        align={'start'}
        justify={'space-between'}>
        <Checkbox>Remember me</Checkbox>
        {/* <Link color={'blue.400'}>Forgot password?</Link> */}
      </Stack>
      <Button 
        mt={2} 
        pb={isLoading ? 0 : 0.8}
        width="100%"
        isLoading={isLoading}
        onClick={() => handleSubmit()}
      >
        Login
      </Button>
      <Text color="#7c7c7c" mt={2}>
        Don't have an account?
        <NextLink.default href="/">
          <Link color="blue.700"> Create</Link>
        </NextLink.default>
      </Text>
    </FormikProvider>
  );
}
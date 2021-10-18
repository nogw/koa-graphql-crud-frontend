import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Text,
  Box,
  Link,
  useToast
} from "@chakra-ui/react";

import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import * as NextLink  from 'next/link';
import { useFormik, FormikProvider } from 'formik';
import { useMutation } from 'react-relay';
import * as yup from 'yup';
import { UserMutation } from "../mutations/UserMutation";
import { UserMutation as UserMutationT, UserMutationResponse } from "../mutations/__generated__/UserMutation.graphql";
import { useRouter } from "next/router";

type Values = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const FormRegistration = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()
  const Router = useRouter()

  const [commit] = useMutation<UserMutationT>(UserMutation)

  const onSubmit = (values: Values) => {
    // setIsLoading(true)
    console.log(process.env.GRAPHQL_URI)

    const config = {
      variables: {
        input: {
          name: values.name,
          email: values.email,
          password: values.password,
        }
      },
      onCompleted({ userCreateMutation }: UserMutationResponse) {
        if (userCreateMutation?.error) {
          toast({
            title: userCreateMutation?.error,
            status: "error",
            variant: "top-accent",
            duration: 1000,
            isClosable: true,
          })
          return
        }

        if (userCreateMutation.token) {
          console.log(userCreateMutation)
          setIsLoading(false) 
          toast({
            title: "Conta criada com sucesso.",
            status: "success",
            variant: "top-accent",
            duration: 1000,
            isClosable: true,
          })
        }

        Router.push("/profile")
      }
    }

    commit(config)
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
        name: yup.string().required("Name is required"),
        email: yup.string().email().required("Email is required"),
        password: yup.string().required("Password is required"),
        passwordConfirm: yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required("Password Confirm is required")
      }),
    onSubmit,
  })

  const { handleSubmit, handleChange, isValid, values } = formik;
  const isSubmitDisabled = !isValid;

  return (
    <FormikProvider value={formik}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input 
          type="text" 
          name="name"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email address</FormLabel>
        <Input 
          type="text" 
          name="email"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              pr="2.5rem"
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
            />
            <InputRightElement>
              <Box h="1.75rem" size="xs" cursor="pointer"onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <ViewIcon color="#e3e3e3"/> : <ViewOffIcon/>}
              </Box>
            </InputRightElement>
          </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password confirm</FormLabel>
          <InputGroup>
            <Input
              pr="2.5rem"
              type={showPasswordConfirm ? "text" : "password"}
              name="passwordConfirm"
              onChange={handleChange}
            />
            <InputRightElement>
              <Box h="1.75rem" size="xs" cursor="pointer"onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}>
                {showPasswordConfirm ? <ViewIcon color="#e3e3e3"/> : <ViewOffIcon/>}
              </Box>
            </InputRightElement>
          </InputGroup>
      </FormControl>
      <Button 
        mt={4} 
        width="100%"
        isLoading={isLoading}
        disabled={isSubmitDisabled}
        onClick={() => handleSubmit()}
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
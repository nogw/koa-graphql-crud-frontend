import nookies from 'nookies'
import { GetServerSideProps } from "next";

import { FormLogin } from '../components/FormLogin'
import Layout from '../components/Layout'

const Login = () => (
  <Layout>
    <FormLogin/>
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async ( ctx ) => {
  const { 'koa.graphql.user.token': token } = nookies.get(ctx)

  if (token) {
    return {
      redirect: {
        permanent: false,
        destination: "/"
      }
    }
  }

  return {
    props: {}
  }
}

export default Login
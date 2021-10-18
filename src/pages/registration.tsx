import nookies from 'nookies'
import { GetServerSideProps } from "next";

import { FormRegistration } from '../components/FormRegistration'
import Layout from '../components/Layout'

const Registration = () => (
  <Layout>
    <FormRegistration/>
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

export default Registration
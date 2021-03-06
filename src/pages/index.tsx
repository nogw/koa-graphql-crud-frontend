import nookies from 'nookies'
import { GetServerSideProps } from "next";

function Index() {
  return (
    <h1>Index</h1>
  );
}

export const getServerSideProps: GetServerSideProps = async ( ctx ) => {
  const { 'koa.graphql.user.token': token } = nookies.get(ctx)

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login"
      }
    }
  }

  return {
    props: {}
  }
}

export default Index;
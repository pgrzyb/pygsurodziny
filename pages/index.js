import Head from 'next/head'

import Tabs from '@components/Tabs'

export async function getStaticProps(context) {
  return {
    props: {

    }, // will be passed to the page component as props
  }
}

export default function Home({ days }) {

  return (
    <div>
      <Head>
        <title>PYGSUrodziny! Paulinkowa strona urodzinowa :)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Tabs />
    </div>
  )
}

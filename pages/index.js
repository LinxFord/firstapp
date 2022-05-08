import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Litot!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          <h3>I'm Wisdom Kwabena aka Linxford, am into web3 and Developing, feel free to contact me for any project</h3>
        </p>
      </main>

      <Footer />
    </div>
  )
}

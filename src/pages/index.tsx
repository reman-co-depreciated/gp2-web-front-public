import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Reman</title>
        <meta name="description" content="Reman company public frontend application." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/light-scheme-icon.png" />
      </Head>
      <main>
        <h1 className='text-3xl font-bold underline'>Hello World! :P</h1>
      </main>
    </>
  )
}

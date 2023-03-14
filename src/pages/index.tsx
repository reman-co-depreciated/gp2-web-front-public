import Head from 'next/head'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

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
        <Navbar />

        <h1 className='text-2xl font-bold underline'>Hello World! :P</h1>
        <h1 className='text-2xl font-bold'>Reman</h1>
        <img src='/imgs/illustrator-svg-cornerstone-reman.png'/>

        <button className='btn'>DaisyUI Button</button>

        <Footer />
      </main>
    </>
  )
}

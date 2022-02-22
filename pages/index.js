import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Team from '../components/Team'
import Description from '../components/Description'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AR-Monix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-slate-100'>
      <Layout>
        <Description/>
        <Team />



      </Layout>

      
        
      </main>
    </div>
  )
}

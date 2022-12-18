import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import utilStyle from '../styles/utils.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <section className={utilStyle.headingMd}>
          <p>React/Next.js学習中！作ってて楽しいです。</p>
        </section>
        <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
          <h2>🗒エンジニアのブログ</h2>
          <div className={styles.grid}>
            <article>
              <Link href='/'>
                <img src='/images/thumbnail01.jpg' className={ styles.thumbnailImage} />
              </Link>
              <Link href='/' className={utilStyle.boldText}>
                タイトル０１
              </Link>
              <br />
              <small className={utilStyle.lightText}>Febrary 23, 2022</small>
            </article>
            <article>
              <Link href='/'>
                <img src='/images/thumbnail01.jpg' className={ styles.thumbnailImage} />
              </Link>
              <Link href='/' className={utilStyle.boldText}>
                タイトル０１
              </Link>
              <br />
              <small className={utilStyle.lightText}>Febrary 23, 2022</small>
            </article>
            <article>
              <Link href='/'>
                <img src='/images/thumbnail01.jpg' className={ styles.thumbnailImage} />
              </Link>
              <Link href='/' className={utilStyle.boldText}>
                タイトル０１
              </Link>
              <br />
              <small className={utilStyle.lightText}>Febrary 23, 2022</small>
            </article>
            <article>
              <Link href='/'>
                <img src='/images/thumbnail01.jpg' className={ styles.thumbnailImage} />
              </Link>
              <Link href='/' className={utilStyle.boldText}>
                タイトル０１
              </Link>
              <br />
              <small className={utilStyle.lightText}>Febrary 23, 2022</small>
            </article>
          </div>
        </section>
      </Layout>
    </>
  )
}

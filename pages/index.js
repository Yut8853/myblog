import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout, {siteTitle } from '../components/Layout'
import utilStyle from '../styles/utils.module.css'
import { getPostsData } from '../lib/post'

export async function getStaticProps() {
  const allPostsData = getPostsData() //ID,Title,data....

  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({allPostsData}) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{ siteTitle }</title>
        </Head>
        <section className={utilStyle.headingMd}>
          <p>React/Next.js学習中！作ってて楽しいです。</p>
        </section>
        <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
          <h2>🗒エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => ( 
              <article key={id}>
                <Link href={`./posts/${id}`}>
                  <img src={`${thumbnail}`} className={ styles.thumbnailImage} />
                </Link>
                <Link href={`./posts/${id}`} className={utilStyle.boldText}>
                  <p className={utilStyle.boldText}>{title}</p>
                </Link>
                <br />
                <small className={utilStyle.lightText}>{date}</small>
              </article>
            ))}

          </div>
        </section>
      </Layout>
    </>
  )
}

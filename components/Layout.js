import Head from "next/head";
import styles from './Layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'MyBlog'
export const siteTitle = "MyBlog"

function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img className={utilStyles.borderCircle} src="/images/profile.png" alt="Nextタイトル" />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
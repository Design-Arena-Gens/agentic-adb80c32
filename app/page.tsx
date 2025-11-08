import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>Agentic App</span>
        </h1>
        <p className={styles.description}>
          A modern web application built with Next.js 14
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Fast Refresh</h2>
            <p>Instant feedback on edits</p>
          </div>
          <div className={styles.card}>
            <h2>TypeScript</h2>
            <p>Type-safe development</p>
          </div>
          <div className={styles.card}>
            <h2>Optimized</h2>
            <p>Production-ready performance</p>
          </div>
          <div className={styles.card}>
            <h2>Deployed</h2>
            <p>Live on Vercel</p>
          </div>
        </div>
      </div>
    </main>
  )
}

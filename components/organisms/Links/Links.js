import styles from './Links.module.css'

export function Links() {
  const linkList = [
    {
      link: "https://nextjs.org/docs/",
      title: "Documentation",
      description: "Find in-depth information about Next.js features and API."
    },
    {
      link: "https://nextjs.org/learn/",
      title: "Learn",
      description: "Learn about Next.js in an interactive course with quizzes!"
    },
    {
      link: "https://github.com/vercel/next.js/tree/canary/examples/",
      title: "Examples",
      description: "Discover and deploy boilerplate example Next.js projects."
    },
    {
      link: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app/",
      title: "Deploy",
      description: "Instantly deploy your Next.js site to a public URL with Vercel."
    },
  ];

  return (
    <div className={styles.grid}>
      {linkList.map(el => {
        return (
          <a href={el.link} className={styles.card} target="_blank" rel="noopener">
            <h2 className={styles.title}>{el.title} &rarr;</h2>
            <p className={styles.description}>{el.description}</p>
          </a> 
        )
      })}
    </div>
  )
}
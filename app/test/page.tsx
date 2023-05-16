import { Redis } from '@upstash/redis'
// import styles from './page.module.css'

export const revalidate = 0 // disable cache 

const redis = new Redis({
    url: 'https://living-mackerel-34730.upstash.io',
    
    token: 'AYeqACQgMzFjNTEyYzAtOWUzMi00ZmQ5LTk5MGQtNGI3NzRkY2JmNDZiNjNiYmE3OTdhYzA2NGY5ZGFmNmIwZDQwNTg2MDRlZDk=',
  })

export default async function Home() {
  const member = await redis.srandmember<string>("nextjs13")

  return (
    <div 
    // className={styles.container}
    >
      <main 
    //   className={styles.main}
      >
        <h1 
        // className={styles.title}
        >
          Welcome {member}
        </h1>
        <p 
        // className={styles.description}
        >
          You have been randomly chosen by the redis algorithm.
        </p>
      </main>
    </div>
  )
}
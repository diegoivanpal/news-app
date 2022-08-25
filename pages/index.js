
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home({articles}) {  
  return (
    <PageLayout title='NewsApp -Home' >
      <div className={styles.container}>
       {articles.length === 0 && <p>No tenemos articulos</p>}
       {articles.length > 0 && articles.map((article, index) => (
        <div key={index}>
          <img 
          alt={`Image for the article${article.title}`} 
          src={article.urlToImage} 
          width={450} 
          height={300} 
          layout= 'responsive' 
          priority={index < 2}
          />
          <h2>{article.title}</h2>
          <p>{article.description}</p>

        </div>
       ))}
      </div>
    </PageLayout>
  )
}

export async function getStaticProps () {
  const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-07-17&sortBy=publishedAt&apiKey=0d4bbc730b3544789ada4d4af573360d')
  const {articles} = await response.json()
  return {      
    props:{
    articles
    }
  } 
}

// export async function getServerSideProps () {
//     const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-07-17&sortBy=publishedAt&apiKey=0d4bbc730b3544789ada4d4af573360d')
//     const {articles} = await response.json()
//     return {      
//       props:{
//       articles
//       }
//     } 
// }

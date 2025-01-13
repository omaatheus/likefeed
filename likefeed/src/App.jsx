import { Post } from "./components/Post";
import { Header } from "./components/Header";

import styles from './App.module.css';

import "./global.css"
import { Sidebar } from "./components/Sidebar";



const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/omaatheus.png",
      name: 'Matheus Silva',
      role: 'Fullstack Developer'
    },
    content: [
      {
        type: "paragraph",
        content: "🏁 E aí Pessoal!"
      }, 
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto para meu portifolio. É um projeto que fiz nas minhas férias de jan/2025."
      },
      {
        type: "link", 
        content: "https://www.linkedin.com/in/matheusspsilva"
      }
    ],
    publishedAt: new Date("2025-01-08 11:38:54")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/isacaramigo.png",
      name: 'Isabella Caramigo',
      role: 'Psicóloga'
    },
    content: [
      {
        type: "paragraph",
        content: "Oii gente!"
      }, 
      {
        type: "paragraph",
        content: "Trago uma técnica muito boa pra vocês, a respiração profunda é uma técnica simples e eficaz para reduzir a ansiedade. Tente a técnica 4-7-8: Inspire pelo nariz por 4 segundos, segure a respiração por 7 segundos e expire pela boca por 8 segundos. Repita de 3 a 4 vezes e sinta a diferença!"
      },
      {
        type: "link", 
        content: "https://clinicaagilpsicologia.com.br/40-ideias-de-posts-para-psicologos-no-instagram/"
      }
    ],
    publishedAt: new Date("2024-12-20 15:30:54")
  },
]


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            
            return <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          }) }
        </main>
      </div>
    </div>
  );
}

export default App;

import styles from './Comment.module.css'

import { Trash, ThumbsUp } from 'phosphor-react'
 
export function Comment() {
    return(
        <div className={styles.comment}>
            <img src='https://github.com/omaatheus.png' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Silva</strong>
                            <time title='05 de Janeiro de 2025 às 19:25h' dateTime='2025-01-05 19:26:15'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 🔥</p>
                </div>
            

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>17</span>
                </button>
            </footer>
            </div>
        </div>
    )
}
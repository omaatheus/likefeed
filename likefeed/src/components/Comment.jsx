import styles from './Comment.module.css'
import { Avatar } from './Avatar'

import { Trash, ThumbsUp } from 'phosphor-react'
 
// eslint-disable-next-line react/prop-types
export function Comment({content, deleteComment}) {

    function handleDeleteComment(){

        deleteComment(content)

    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/omaatheus.png' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Silva</strong>
                            <time title='05 de Janeiro de 2025 às 19:25h' dateTime='2025-01-05 19:26:15'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
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
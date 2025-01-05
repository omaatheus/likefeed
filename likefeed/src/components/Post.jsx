import { Comment } from './Comment'
import s from './Post.module.css'
import { Avatar } from './Avatar'


export function Post() {
    return(
        <article className={s.post}>
            <header>
                <div className={s.author}>
                    <Avatar hasBorder={true} src='https://github.com/omaatheus.png' />
                    <div className={s.authorInfo}>
                        <strong>
                            Matheus Silva
                        </strong>
                        <span>
                            Web Developer
                        </span>
                    </div>
                </div>

                <time title='05 de Janeiro de 2025 as 18:42h' dateTime='2025-01-05 18:42:50'>Publicado há 1h</time>

            </header>

            <div className={s.content}>
                <p>🏁 E aí Pessoal!</p>
                <p>Acabei de subir mais um projeto para meu portifolio. É um projeto que fiz nas minhas férias de jan/2025.</p>
                <p>➡️ <a target='_blank' href='https://www.linkedin.com/in/matheusspsilva/'>www.linkedin.com/matheusspsilva</a></p>
                <p><a href='#/'>#novoprojeto</a> <a href='#/'>#ferias</a> <a href='#/'>#estudos</a></p>

            </div>

            <form className={s.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                placeholder='Deixe um comentário'
                />

                <button type='submit'>Comentar</button>

            </form>

            <div className={s.commentList}>
                <Comment />
            </div>
        </article>
    )
}
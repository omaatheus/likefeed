/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Comment } from './Comment'
import s from './Post.module.css'
import { Avatar } from './Avatar'


export function Post({author, publishedAt, content}) {
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'

    }).format(publishedAt)

    return(
        <article className={s.post}>
            <header>
                <div className={s.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl} />
                    <div className={s.authorInfo}>
                        <strong>
                            {author.name}
                        </strong>
                        <span>
                            {author.role}
                        </span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt}>{publishedDateFormatted}</time>

            </header>

            <div className={s.content}>
                {content.map(line => {
                    if(line.type == "paragraph"){
                        return <p>{line.content}</p>
                    } else if (line.type == "link"){
                        return <p><a href={line.content} target='_blank'>{line.content}</a></p>
                        
                        
                    }
                })
            }

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
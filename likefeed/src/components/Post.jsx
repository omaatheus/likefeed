/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Comment } from './Comment';
import s from './Post.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(['Post Muito bacana, hein?']); 
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedAt);

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText('')

  }

  function handleNewCommandChange(){
    setNewCommentText(event.target.value)
    
  }

  return (
    <article className={s.post}>
      <header>
        <div className={s.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={s.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt}>
          {publishedDateFormatted}
        </time>
      </header>

      <div className={s.content}>
        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={index}>
                <a href={line.content} target="_blank" rel="noopener noreferrer">
                  {line.content}
                </a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={s.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea value={newCommentText} onChange={handleNewCommandChange} name='comment' placeholder="Deixe um comentário" />

        <button type="submit">Comentar</button>
      </form>

      <div className={s.commentList}>
        {comments.map((comment, index) => (
          // eslint-disable-next-line react/jsx-key
          <Comment content={comment} />
        ))}
      </div>
    </article>
  );
}

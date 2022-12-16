import styled from "styled-components";
import { format } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import Avatar from "../avatar";
import Comment from "../comment";
import { formatDistanceToNow } from "date-fns/esm";
import { comments } from "../../App";
import { useState } from "react";

export default function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  const [comments, setComments]=useState([1,2])

  function handleAddComment(){
    
    console.log(comments)
    setComments(...comments, comments.length +1)
  }
  return (
    <SCard>
      <SHeader>
        <SAuthor>
          <Avatar hasBorder src={author.avatarUrl} />
          <SAuthorInfo>
            <strong>{author.name}</strong>
            <span> {author.role} </span>
          </SAuthorInfo>
        </SAuthor>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </SHeader>
      <SContent>
        {content.map( line =>{
          if(line.type === "paragraph"){
            return <p>{line.content}</p>
          } else if(line.type === "link"){
            return <p><a href="#">{line.content}</a></p>
          }
        })}
        <p>
          <a href="https://google.com">#novoprojeto</a>{" "}
          <a href="https://lp.rocketseat.com.br/nlw">#nlw</a>{" "}
          <a href="https://rocketseat.com.br">#rocketseat</a>
        </p>
      </SContent>
      <hr />
      <SFeedback onSubmit={handleAddComment}>
        <label >Deixe seu feedback</label>
        <textarea placeholder="deixe um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </SFeedback>
      {comments.map(comment =>{
        return <Comment />
      })}
    </SCard>
  );
}

const SCard = styled.div`
  background-color: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  hr {
    margin: 1.5rem 0;
    border: 1px solid var(--gray-600);
  }
`;
const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  time {
    font-size: 0.875rem;
    color: var(--gray-400);
    font-weight: 400;
    line-height: 1.6;
  }
`;
const SAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const SAuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.6;
    color: var(--gray-100);
  }
  span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--gray-400);
  }
`;
const SContent = styled.div`
  p {
    margin: 1.5rem 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.635rem;
    color: var(--gray-300);
  }
  a {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.625rem;
    color: var(--green-500);
    text-decoration: none;
    :hover {
      color: var(--green-300);
    }
  }
`;
const SFeedback = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  label {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.625rem;
    color: var(--gray--100);
  }
  textarea {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5rem;
    border-radius: 8px;
    padding: 1rem;
    border: none;
    background-color: var(--gray-900);
    color: var(--gray--300);
    resize: none;
    :focus-visible {
      outline: 2px solid var(--green-500);
    }
  }
  footer {
    visibility: hidden;
    max-height: 0;
    button {
      width: fit-content;
      height: fit-content;
      padding: 1rem 1.5rem;
      background-color: var(--green-500);
      border-radius: 8px;
      border: 0;
      color: var(--white);
      transition: background-color 0.2s;
      cursor: pointer;
      :hover {
        background-color: var(--green-300);
        color: var(--white);
      }
    }
  }
  :focus-within footer {
    visibility: visible;
    max-height: none;
  }
`;

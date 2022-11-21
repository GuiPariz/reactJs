import styled from "styled-components";
import Comment from "../comment";

export default function Post() {
  return (
    <SCard>
      <SHeader>
        <SAuthor>
          <img src="https://pps.whatsapp.net/v/t61.24694-24/311897119_532903698682915_7770589364732851892_n.jpg?ccb=11-4&oh=01_AdROPGOGQWaiEXcGGNBg-YDrtzopzWyYMqMryvmAS0du2Q&oe=63820935" />
          <SAuthorInfo>
            <strong>Kevin Juan</strong>
            <span>Artist-Mc</span>
          </SAuthorInfo>
        </SAuthor>
        <time title="Publicado 16 de novembro às 11:03h">publicado há 1h</time>
      </SHeader>
      <SContent>
        <p>Fala galeraa 👋</p>
        <br />
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <br />
        <p>
          👉 <a href="https://google.com">Sensei.Mc/doctorcare</a>
        </p>
        <br />
        <p>
          <a href="https://google.com">#novoprojeto</a>{" "}
          <a href="https://lp.rocketseat.com.br/nlw">#nlw</a>{" "}
          <a href="https://rocketseat.com.br">#rocketseat</a>
        </p>
      </SContent>
      <hr />
      <SFeedback>
        <label htmlFor="">Deixe seu feedback</label>
        <textarea placeholder="deixe um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </SFeedback>
      <Comment/>
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
  img {
    border-radius: 8px;
    height: calc(3rem + 12px);
    width: calc(3rem + 12px);
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--green-500);
  }
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
const SFeedback = styled.div`
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
    max-height:0;
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

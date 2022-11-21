import styled from "styled-components";
import { Trash, ThumbsUp } from "phosphor-react";

export default function Comment() {
  return (
    <SBody>
      <aside>
        <img src="https://pps.whatsapp.net/v/t61.24694-24/308690542_1235735647204348_9029192383439785161_n.jpg?ccb=11-4&oh=01_AdQQIQFJgDb9JZTqcA2IfuNeuyCrnXtGfgQTfHV7w0d9kw&oe=638343E7" />
      </aside>
      <main>
        <SBox>
          <SHeaderComment>
            <SCommentInfo>
              <strong>Sabrina Maria</strong>
              <time 
                title="17 de novembro às 13:42h" 
                dateTime="2022-11-17 13:42:34"
                >
                cerca de 2h
                </time>
            </SCommentInfo>
            <button title="Deletar">
            <Trash size={24} />
            </button>
          </SHeaderComment>
          <br />
          <p>Muito Bom Kevin, parabéns!!!👏👏</p>
        </SBox>
        <footer>
          <button title="curtir">
            <ThumbsUp size={20}/>
            Aplaudir • 03
          </button>
        </footer>
      </main>
    </SBody>
  );
}

const SBody = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  background-color: transparent;
  gap: 1rem;
  margin-top: 1.5rem;
  img{
    height: 3.125rem;
    width: 3.125rem;
    border-radius: 8px;
  }
  main{
    button{
      background-color: transparent;
      color: var(--gray-400);
      border: none;
      display: flex;
      align-items: center;
      line-height: 0;
      :hover{
          color: var(--red-500);
        }
    }
    footer{
      button{
        margin-top: 1rem;
        gap: 0.625rem;
        font-weight: 700;
        font-size: 0.875rem;
        :hover{
          color: var(--green-500);
        }
      }
    }
  }
`;
const SBox = styled.div`
  background-color: var(--gray-700);
  border-radius: 9px;
  border: none;
  padding: 1rem;
  p{
    font-weight: 400;
    font-size: 0.874rem;
    line-height: 1.6;
    color: var(--gray-300);
  }
`;
const SCommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  strong{
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.6;
  }
  time{
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.6;
    color: var(--gray-400);
  }
`;
const SHeaderComment=styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content:space-between;
`
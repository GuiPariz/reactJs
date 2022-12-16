import styled, { css } from "styled-components";

export default function Avatar(props) {
  return (
    <SImage hasBorder={props.hasBorder}>
      <img src={props.src} />
    </SImage>
  );
}

const SImage = styled.div`
  img {
    border-radius: 8px;
    ${props => props.hasBorder &&css`
    height: calc(3rem + 12px);
    width: calc(3rem + 12px);
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--green-500);
    `}
    ${props => props.hasBorder === false &&css`
      height: 3rem;
      width: 3rem;
    `}
  }
`;

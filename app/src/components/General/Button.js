import styled from 'styled-components'

export const Button = styled.button`
  background-color: var(--primary);
  color: var(--white);
  padding: 16px 0;
  border-radius: 6px;
  text-align: center;
  position: relative;

  &:hover {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(255 255 255 /50%);
      z-index: 0;
    }
  }
`
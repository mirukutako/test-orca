import styled from 'styled-components'

export const Wrapper = styled.a`
  width: 27px;
  height: 27px;
  /* padding: 8px; */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 4px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    color: var(--accent-color);
    cursor: pointer;
  }

  &[data-active='true'] {
    background-color: var(--accent-color);
    color: white;
  }
`

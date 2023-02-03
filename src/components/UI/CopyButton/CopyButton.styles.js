import styled from 'styled-components'

export const Wrapper = styled.button`
  display: block;
  width: 10px;
  height: 12px;
  color: var(--gray-color);
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  transition: color 0.2s ease;
  &:hover {
    cursor: pointer;
    color: var(--accent-color);
  }
`

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  padding: calc(var(--space) / 2) var(--space);
  outline: 1px solid var(--gray-color);
  outline-offset: -1px;
  border-radius: calc(var(--space) / 2);
  max-width: 100%;
  gap: var(--space);
  box-sizing: border-box;
  transition: color 0.2s ease;
`

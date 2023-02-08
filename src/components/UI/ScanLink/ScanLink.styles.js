import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: calc(var(--space) / 2);
  max-width: 100%;
  .scan-link {
    &__icon {
      color: var(--gray-color);
      flex-shrink: 0;
      transition: color 0.2s ease;
      font-size: 0;
    }
  }
  a {
    width: 70%;
    flex-grow: 1;
  }
`

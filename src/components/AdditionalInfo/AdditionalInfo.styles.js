import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: white;
  box-sizing: border-box;

  .additional-info {
    &__title {
      position: sticky;
      top: 0px;
      padding-top: 32px;
      padding-bottom: 8px;
      background: white;
    }
    &__body {
      white-space: normal;
      word-break: break-all;
    }
  }

  &[data-view='table'] {
    padding: 0 32px 32px;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid var(--gray-color);
    border-top: none;
    display: none;

    &[data-expand='true'] {
      display: block;
    }
  }
  &[data-view='card'] {
    display: none;
  }
  &[data-view='modal'] {
    padding: calc(var(--space) * 3);
  }
`

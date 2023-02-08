import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: white;
  box-sizing: border-box;

  .additional-info {
    &__title {
      position: sticky;
      top: 0px;
      z-index: 5;
      padding-top: 32px;
      padding-bottom: 8px;
      background: white;
    }
    &__body {
      white-space: normal;
      word-break: break-all;
    }
    &__footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 16px;
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }

  &[data-view='table'] {
    padding: 0 32px 32px;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid var(--gray-color);
    border-radius: 0 0 4px 4px;
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
    .additional-info__title {
      padding: 0 0 8px 0;
    }
  }
`

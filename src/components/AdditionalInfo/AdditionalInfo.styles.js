import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: white;
  box-sizing: border-box;
  position: relative;

  &[data-view='table'] {
    display: none;
    border: 1px solid var(--gray-color);
    border-radius: 0 0 4px 4px;
    border-top: none;
    height: 208px;
    margin-top: -8px;
    padding-top: 8px;

    &::after {
      //hack for scroll bar (left border)
      content: '';
      display: block;
      width: 1px;
      height: 100%;
      background: var(--gray-color);
      position: absolute;
      bottom: 0;
      top: 0;
      right: 12px;
      pointer-events: none;
    }

    &[data-expand='true'] {
      display: block;
    }
  }

  &[data-view='card'] {
    display: none;
  }

  &[data-view='modal'] {
    .additional-info {
      padding: 0 24px 24px 32px;
      &__title {
        padding-top: 24px;
      }
    }
  }

  .additional-info {
    padding: 0 20px 24px 32px;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    position: relative;

    ::-webkit-scrollbar {
      width: 12px;
      box-sizing: border-box;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 0px 0px 3px 0px;
      background: var(--scroll-bar-color);
      /* border-left: 1px solid var(--gray-color); */
    }

    ::-webkit-scrollbar-thumb {
      background: var(--scroll-thumb-color);
      width: 9px;
      border: 3px solid var(--scroll-bar-color);
      border-radius: 100px;
      &:hover {
        cursor: pointer;
      }
    }

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
    }
  }
`

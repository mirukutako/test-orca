import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  background: rgba(16, 17, 29, 0.3);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 20;
  display: flex;
  padding: 32px;

  &[data-visible='false'] {
    display: none;
  }

  .modal {
    margin: auto;
    width: 100%;
    max-width: 900px;
    background-color: white;
    &__header {
      height: 80px;
      border-bottom: 1px solid var(--gray-color);
      padding: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
    }

    &__close {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      appearance: none;
      padding: 0;
      border: none;
      color: var(--gray-color);
      transition: color 0.2s ease, transform 0.2s ease;
      box-sizing: border-box;
      background: none;
      &:hover {
        color: var(--accent-color);
        cursor: pointer;
        transform: scale(1.1);
      }
    }

    &__footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: calc(var(--space) * 2);
      padding: 0 calc(var(--space) * 3) calc(var(--space) * 3);
    }
  }

  .item-status {
    display: flex;
    align-items: center;
    gap: 12px;
    &__icon {
      width: 32px;
      height: 32px;
      color: white;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      &[data-color='high'] {
        background-color: var(--high-color);
      }
      &[data-color='medium'] {
        background-color: var(--medium-color);
      }
      &[data-color='low'] {
        background-color: var(--low-color);
      }

      svg {
        width: 16px;
        height: 16px;
      }
    }

    &__name {
      font-size: 24px;
      line-height: 18px;
    }
  }
`

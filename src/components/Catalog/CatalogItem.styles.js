import styled from 'styled-components'

export const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  border: 1px solid var(--gray-color);
  border-radius: 4px;
  box-sizing: border-box;
  color: var(--main-color);
  transition: background-color 0.2s ease, border-color 0.2s ease;
  position: relative;
  z-index: 1;

  .catalog-item {
    &__cell {
      box-sizing: border-box;
    }

    &__value {
      display: inline-flex;
      max-width: 100%;
      .caption {
        color: var(--gray-color);
      }
    }
  }

  &[data-view='table'] {
    display: flex;
    align-items: center;
    padding: 11px;
    min-height: 60px;
    position: relative;
    z-index: 1;

    &:not(:first-child) {
      margin-top: var(--space);
    }

    &:hover {
      cursor: pointer;
      background-color: var(--main-color);
      border-color: var(--main-color);
      color: white;
      .caption {
        color: white;
        transition: color 0.2s ease;
      }
      .copy-bttn,
      .scan-link__icon {
        color: white;
      }

      .item-status {
        &__icon {
          color: white !important;
        }
      }
    }

    .catalog-item {
      &__caption,
      &__additional {
        display: none;
      }
      &__cell {
        padding: 0px 16px 0 21px;
      }
      &__status,
      &__name,
      &__file {
        transition: color 0.2s ease;
      }

      &__status {
        width: 66px;
      }
      &__name {
        width: 13%;
      }
      &__file {
        width: 18%;
      }
      &__ip-v4 {
        width: 17%;
      }
      &__ip-v6 {
        width: 20%;
      }
      &__source {
        width: 20%;
        flex-grow: 1;
      }
    }

    .item-status {
      display: flex;
      align-items: center;
      gap: 4px;
      &__icon {
        width: 24px;
        height: 24px;
        border-radius: 4px;
        border: 1px solid currentColor;
        display: flex;
        justify-content: center;
        align-items: center;
        &[data-color='high'] {
          color: var(--high-color);
        }
        &[data-color='medium'] {
          color: var(--medium-color);
        }
        &[data-color='low'] {
          color: var(--low-color);
        }
        svg {
          width: 12px;
          height: 12px;
        }
      }
      &__name {
        display: none;
      }
    }
  }

  &[data-view='card'] {
    width: calc(50% - 16px);
    padding: calc(var(--space) * 3) calc(var(--space) * 4) calc(var(--space) * 6 + 30px)
      calc(var(--space) * 4);
    display: grid;
    align-items: flex-start;
    grid-template-columns: 38% 56%;
    grid-auto-rows: max-content;
    column-gap: calc(var(--space) * 4);
    row-gap: calc(var(--space) * 2);
    min-width: 450px;
    @media (max-width: 600px) {
      width: 100%;
      min-width: auto;
    }

    .catalog-item {
      &__cell {
        display: flex;
        align-items: center;
        height: 18px;
        gap: var(--space);
        .caption {
          flex-shrink: 0;
        }
      }

      &__value {
        width: 30%;
        flex-grow: 1;
      }

      &__status,
      &__name,
      &__file {
        grid-column-start: 1;
        grid-column-end: 2;
        .catalog-item {
          &__caption {
            width: 66px;
          }
        }
        @media (max-width: 600px) {
          grid-column-start: 1;
          grid-column-end: 3;
        }
      }
      &__status {
        grid-row-start: 1;
        grid-row-end: 2;
      }
      &__name {
        grid-row-start: 2;
        grid-row-end: 3;
      }
      &__file {
        grid-row-start: 3;
        grid-row-end: 4;
      }

      &__ip-v4,
      &__ip-v6,
      &__source,
      &__additional {
        grid-column-start: 2;
        grid-column-end: 3;
        @media (max-width: 600px) {
          grid-column-start: 1;
          grid-column-end: 3;
        }
        .catalog-item {
          &__caption {
            width: 94px;
          }
        }
      }
      &__ip-v4 {
        @media (min-width: 601px) {
          grid-row-start: 1;
          grid-row-end: 2;
        }
      }
      &__ip-v6 {
        @media (min-width: 601px) {
          grid-row-start: 2;
          grid-row-end: 3;
        }
      }
      &__source {
        height: auto;
        align-items: flex-start;
        @media (min-width: 601px) {
          grid-row-start: 3;
          grid-row-end: 4;
        }
      }
      &__additional {
        height: auto;
        padding-top: 8px;
        @media (min-width: 601px) {
          grid-row-start: 4;
          grid-row-end: 5;
          position: absolute;
          bottom: 24px;
          right: 0;
          width: 100%;
        }
        @media (max-width: 1100px) {
          .catalog-item__caption {
            display: none;
          }
          .catalog-item__value {
            width: 100%;
          }
        }

        button {
          width: 100%;
          justify-content: center;
        }
      }
    }

    .item-status {
      display: flex;
      align-items: center;
      gap: 4px;
      &__icon {
        width: 16px;
        height: 16px;
        border-radius: 4px;
        border: 1px solid var(--gray-color);
        display: flex;
        justify-content: center;
        align-items: center;
        &[data-color='high'] {
          color: var(--high-color);
        }
        &[data-color='medium'] {
          color: var(--medium-color);
        }
        &[data-color='low'] {
          color: var(--low-color);
        }
        svg {
          width: 8px;
          height: 8px;
        }
      }
    }

    .scan-link {
      & > svg {
        align-self: flex-start;
        margin-top: 4px;
      }
      .text-overflow {
        overflow: visible;
        white-space: normal;
        word-break: break-all;
      }
    }
  }

  a {
    color: currentColor;
  }
`

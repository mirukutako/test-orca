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

    &[data-expand='true'] {
      &::before {
        content: '';
        display: block;
        height: 12px;
        box-sizing: border-box;
        border-left: 1px solid var(--gray-color);
        border-right: 1px solid var(--gray-color);
        position: absolute;
        left: -1px;
        right: -1px;
        bottom: -2px;
        z-index: -1;
        pointer-events: none;
      }
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
  }

  &[data-view='card'] {
    width: calc(50% - 16px);
    padding: calc(var(--space) * 3) calc(var(--space) * 4);
    display: grid;
    grid-template-columns: 38% 56%;
    column-gap: calc(var(--space) * 4);
    row-gap: calc(var(--space) * 2);

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
        .catalog-item {
          &__caption {
            width: 94px;
          }
        }
      }
      &__ip-v4 {
        grid-row-start: 1;
        grid-row-end: 2;
      }
      &__ip-v6 {
        grid-row-start: 2;
        grid-row-end: 3;
        .caption {
          width: 94px;
        }
      }
      &__source {
        grid-row-start: 3;
        grid-row-end: 4;
      }
      &__additional {
        grid-row-start: 4;
        grid-row-end: 5;

        button {
          width: 100%;
          justify-content: center;
        }
      }
    }
  }

  a {
    color: currentColor;
  }
`

import styled from 'styled-components';

const ItemDetailsStyles = styled.div`
  .single-item-price {
    font-size: 2rem;
    font-weight: 400;
    text-align: end;
    padding-right: 2rem;
    color: var(--dark);
    margin: 2rem 0;
  }

  .single-item-price-placeholder {
    color: var(--dark);
    text-align: end;
    font-size: 1.7rem;
    font-weight: 300;
    a {
      text-decoration: underline;
      font-style: italic;
    }
  }

  .type-select-input {
    margin-bottom: 3rem;
    display: flex;
    align-items: center;

    span {
      color: var(--dark);
      margin-right: 1rem;
      text-transform: capitalize;
      font-weight: 400;
      font-size: 2rem;
    }
  }

  .available-sizes {
    font-size: 2rem;
    color: var(--dark);
    font-weight: 400;
    margin: 0;
  }
  .size-input-btn {
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0.5rem 0.5rem 2rem 0.5rem;
    padding: 1rem 2rem;
    border: none;
    background: var(--blue3);
    color: var(--white);
    transition: background 0.25s;
    cursor: pointer;
    @media (hover: hover) {
      &:hover {
        background: var(--blue4);
      }
    }
  }
  .active-size-btn {
    background: var(--blue4);
    pointer-events: none;
  }
`;

export { ItemDetailsStyles };

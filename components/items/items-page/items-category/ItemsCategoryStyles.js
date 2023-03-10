import styled from 'styled-components';

const ItemsCategoryStyles = styled.div`
  padding: 5rem 3rem 10rem 3rem;
  margin-top: var(--layoutHeaderHeight);

  .items-category-title {
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 1rem;
    color: var(--dark);
    @media (max-width: 850px) {
      font-size: 2.5rem;
    }
  }

  .title-underline {
    height: 1px;
    border: none;
    margin-bottom: 10rem;
    background-color: var(--blue3);
    width: 75%;
    margin-left: 0;
  }

  .category-container {
    display: grid;
    grid-gap: 2rem;
    justify-content: center;
    grid-template-columns: repeat(
      auto-fill,
      minmax(200px, 1fr)
    );
    @media (max-width: 500px) {
      grid-template-columns: repeat(
        auto-fill,
        minmax(135px, 1fr)
      );
    }
  }

  .no-items {
    font-size: 2rem;
    color: var(--gray);
  }
`;

export { ItemsCategoryStyles };

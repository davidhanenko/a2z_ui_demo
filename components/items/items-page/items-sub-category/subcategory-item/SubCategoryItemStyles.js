import styled from 'styled-components';

const SubCategoryItemStyles = styled.div`
  padding: 1rem;

  .subcategory-title {
    color: var(--blue2);
    font-weight: 400;
    font-size: 1.6rem;
    text-transform: uppercase;
    padding: 0rem 0 1.5rem 0;
    margin: 0;
    transition: all 0.25s;

    @media (max-width: 600px) {
      font-size: 1.3rem;
    }
  }

  .sub-image {
    transition: all 0.25s;
  }
  @media (hover: hover) {
    &:hover {
      .subcategory-title {
        color: var(--blue4);
      }

      .sub-image {
        transform: scale(0.95);
      }
    }
  }
  .no-item {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 150px;

    p {
      position: absolute;
      top: 20%;
      left: 10%;
      font-size: 1.5rem;
      color: var(--gray);
    }
  }
`;

export { SubCategoryItemStyles };

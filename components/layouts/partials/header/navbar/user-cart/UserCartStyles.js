import styled from 'styled-components';

const UserCartStyles = styled.div`
  color: var(--blue3);
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 2rem;
  margin-right: 3rem;
  .user {
    padding: 0 1rem;
  }
  .user,
  .cart {
    transition: all 0.2s;
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        transform: scale(1.2);
        color: var(--darkBlue);
      }
    }
  }

  @media print {
    display: none;
  }
`;

export { UserCartStyles };

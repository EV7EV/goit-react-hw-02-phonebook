import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  align-items: center;
  margin-top: 30px;
  li {
    display: flex;
    gap: 30px;
  }

  button {
    border-radius: 50%;
    padding: 15px;
    width: 50px;
    height: 50px;
    border: none;
    cursor: pointer;
  }
`;

export { List };

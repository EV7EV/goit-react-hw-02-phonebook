import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  align-items: center;
  margin: 0 auto;

  input {
    width: 100%;
    border-radius: 5px;
    padding: 10px 15px;
  }
`;

export { Label };

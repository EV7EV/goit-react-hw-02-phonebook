import styled from 'styled-components';

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 20px;
  margin: 0 auto;

  label {
    display: flex;
    gap: 15px;
    flex-direction: column;
  }

  input {
    border-radius: 5px;
    padding: 5px;
  }

  button {
    width: 120px;
    display: block;
    margin: 0 auto;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export { Form };

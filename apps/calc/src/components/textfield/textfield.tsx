import styled from 'styled-components';

const Textfield = styled.input.attrs({ type: 'text' })`
  background-color: var(--me-background-100);
  outline: none;
  border: thin solid var(--me-text-200);
  border-radius: 10px;
  width: 100%;
  min-width: 100px;
  font-size: 2.5em;
  font-weight: var(--me-font-weight-normal);
  color: var(--me-text-400);
  padding: 0.6em 0.75em;

  &::placeholder {
    color: var(--me-text-100);
  }

  &:focus {
    border: thin solid var(--me-text-400);
  }
`;

export default Textfield;

import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 22rem 1fr 1fr;
  gap: 2.5rem;

  padding: 1.1rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey10);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.1rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.3rem;
  color: var(--color-red7);
`;

/* eslint-disable react/prop-types */
function FormZeile({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormZeile;

import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.5rem 3rem;

      border-radius: var(--border-radius-md);
      background-color: var(--color-grey1);
      border: 1px solid var(--color-grey10);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 70rem;
    `}
    
  overflow: hidden;
  font-size: 1.2rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;

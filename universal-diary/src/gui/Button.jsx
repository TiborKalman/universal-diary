import styled, { css } from "styled-components";

const variations = {
  primary: css`
    color: var(--color-brand5);
    background-color: var(--color-brand5);

    &:hover {
      background-color: var(--color-brand7);
    }
  `,
  secondary: css`
    color: var(--color-grey6);
    background: var(--color-grey1);
    border: 1px solid var(--color-grey2);

    &:hover {
      background-color: var(--color-grey5);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red7);

    &:hover {
      background-color: var(--color-red8);
    }
  `,
};

const sizes = {
  medium: css`
    font-size: 1.5rem;
    padding: 1.3rem 1.5rem;
    font-weight: 450;
  `,
  small: css`
    font-weight: 550;
    text-align: center;
    font-size: 1.3rem;
    padding: 0.5rem 0.7rem;
    text-transform: uppercase;
  `,
  large: css`
    font-size: 1.5rem;
    padding: 1.3rem 2.5rem;
    font-weight: 450;
  `,
};

const Button = styled.button`
  border: 1px solid var(--color-grey2);
  background-color: var(--color-red7);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;

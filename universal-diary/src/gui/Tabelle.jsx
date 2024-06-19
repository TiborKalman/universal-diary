import styled from "styled-components";
import { createContext, useContext } from "react";
import EmptyResource from "./EmptyResource";

const StyledBody = styled.section`
  margin: 0.5rem 0;
`;

const StyledTabelle = styled.div`
  border: 1px solid var(--color-grey2);
  overflow: hidden;
  font-size: 1.5rem;
  background-color: var(--color-grey1);
  border-radius: 6px;
`;

const AllgemeineZeile = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.5rem;
  align-items: center;
  transition: none;
`;

const Footer = styled.footer`
  justify-content: center;
  padding: 1.2rem;
  background-color: var(--color-grey5);
  display: flex;

  &:not(:has(*)) {
    display: none;
  }
`;

const StyledZeile = styled(AllgemeineZeile)`
  padding: 1rem 2.5rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey10);
  }
`;

const StyledHeader = styled(AllgemeineZeile)`
  padding: 1.6rem 2.4rem;

  text-transform: uppercase;

  background-color: var(--color-grey5);
  border-bottom: 1px solid var(--color-grey10);

  letter-spacing: 0.5px;
  font-weight: 600;
  color: var(--color-grey6);
`;

const TabelleContext = createContext();

/* eslint-disable react/prop-types */
function Tabelle({ columns, children }) {
  //console.log("Tabelle");
  //console.log("Spalten " + columns);
  //console.log("Children " + children);
  return (
    <TabelleContext.Provider value={{ columns }}>
      <StyledTabelle role="table">{children}</StyledTabelle>
    </TabelleContext.Provider>
  );
}

/* eslint-disable react/prop-types */
function Header({ children }) {
  const { columns } = useContext(TabelleContext);

  //console.log("Children Hedaer " + children);
  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}

/* eslint-disable react/prop-types */
function Body({ data, render }) {
  if (!data.length)
    return <EmptyResource>No data to show at the moment</EmptyResource>;

  return <StyledBody>{data.map(render)}</StyledBody>;
}

/* eslint-disable react/prop-types */
function Zeile({ children }) {
  const { columns } = useContext(TabelleContext);
  return (
    <StyledZeile role="row" columns={columns}>
      {children}
    </StyledZeile>
  );
}

Tabelle.Header = Header;
Tabelle.Body = Body;
Tabelle.Zeile = Zeile;
Tabelle.Footer = Footer;

export default Tabelle;

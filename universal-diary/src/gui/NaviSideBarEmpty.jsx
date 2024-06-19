import styled from "styled-components";
import MainNavigation from "./MainNavigation";

const StyledNaviSidebar = styled.aside`
  gap: 3rem;
  background-color: #ffffff;
  padding: 3rem 2.5rem;
  grid-row: 1 / -1;
  flex-direction: column;
  display: flex;
`;

function NaviSideBarEmpty() {
  return (
    <>
      <StyledNaviSidebar></StyledNaviSidebar>
    </>
  );
}

export default NaviSideBarEmpty;

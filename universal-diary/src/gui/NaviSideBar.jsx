import styled from "styled-components";
import MainNavigation from "./MainNavigation";

const StyledNaviSidebar = styled.aside`
  gap: 3rem;
  border-right: 1px solid var(--color-grey9);
  background-color: #ffffff;
  padding: 3rem 2.5rem;
  grid-row: 1 / -1;
  flex-direction: column;
  display: flex;
`;

function NaviSideBar() {
  return (
    <>
      <StyledNaviSidebar>
        <div>
          <b>
            <em>Navigation</em>
          </b>
        </div>
        <MainNavigation />
      </StyledNaviSidebar>
    </>
  );
}

export default NaviSideBar;

import styled from "styled-components";
import NaviSideBar from "./NaviSideBar";
import HeaderMain from "./HeaderMain";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import NaviSideBarEmpty from "./NaviSideBarEmpty";

const StyledApplicationLayout = styled.div`
  height: 110vh;
  display: grid;
  grid-template-columns: 30rem 1fr;
  grid-template-rows: auto 1fr;
  h
`;

const StyledApplicationLayoutClosedNavi = styled.div`
  height: 110vh;
  display: grid;
  grid-template-columns: 0rem 1fr;
  grid-template-rows: auto 1fr;
  h
`;

const MainContent = styled.main`
  background-color: #eeeeee;
  padding: 4rem 4.5rem 6rem;
  overflow: scroll;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 110rem;
  margin: 0 auto;
`;

function ApplicationLayout() {
  const [naviShown, setNaviShown] = useState(true);
  function handleClick() {
    setNaviShown(!naviShown);
  }
  return (
    <>
      {naviShown && <button onClick={handleClick}>&lt;</button>}
      {naviShown && (
        <StyledApplicationLayout>
          <HeaderMain></HeaderMain>
          <NaviSideBar />
          <MainContent>
            <Content>
              <Outlet />
            </Content>
          </MainContent>
        </StyledApplicationLayout>
      )}

      {!naviShown && (
        <button onClick={handleClick}>&gt; Navigation anzeigen</button>
      )}
      {!naviShown && (
        <StyledApplicationLayoutClosedNavi>
          <HeaderMain />
          <NaviSideBarEmpty />
          <MainContent>
            <Content>
              <Outlet />
            </Content>
          </MainContent>
        </StyledApplicationLayoutClosedNavi>
      )}
    </>
  );
}

export default ApplicationLayout;

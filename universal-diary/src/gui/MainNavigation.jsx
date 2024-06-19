import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { HiOutlineCalendarDays } from "react-icons/hi2";

const StyledNavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

function MainNavigation() {
  return (
    <nav>
      <StyledNavigationList>
        <li>
          <NavLink to="/testboard">
            <HiOutlineCalendarDays />
            Testboard from Navi
          </NavLink>
        </li>
        <li>
          <NavLink to="/testboard2">
            <HiOutlineCalendarDays />
            Testboard2 from Navi
          </NavLink>
        </li>
        <li>
          <NavLink to="/bloodpressure">
            <HiOutlineCalendarDays />
            Bloodpressure from Navi
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <HiOutlineCalendarDays />
            About
          </NavLink>
        </li>
      </StyledNavigationList>
    </nav>
  );
}

export default MainNavigation;

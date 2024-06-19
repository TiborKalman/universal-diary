import styled from "styled-components";
import { useContext } from "react";
//import UserContextBloodpressure from "../App";
import ExampleContext from "../App";
import { UserContext, useUserContext } from "../contexts/UserContext";

const StyledHeaderMain = styled.header`
  display: flex;
  gap: 2.5rem;
  background-color: #ffffff;
  padding: 1rem 5rem;
  border-bottom: 1px solid var(--color-grey3);
  align-items: center;
  justify-content: flex-end;
`;

function HeaderMain() {
  //const bloodpressureUserContext = useContext(UserContextBloodpressure);
  //const valueFromexampleContext = useContext(ExampleContext);
  const currentUser = useContext(ExampleContext);

  //const userContext = useContext(UserContext);
  const userContext = useUserContext();
  //const { userNumber, setUserNumber } = valueFromexampleContext;
  //setCurrentUser("23233");
  return (
    <StyledHeaderMain>
      <header>
        <div>
          {userContext}. Bloodpressures. dof {currentUser}{" "}
        </div>
      </header>
    </StyledHeaderMain>
  );
}

export default HeaderMain;

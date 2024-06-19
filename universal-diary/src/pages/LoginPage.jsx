import { useContext, useState, useEffect } from "react";
//import ExampleContext from "../App";

function LoginPage({ myHandleLoginClick }) {
  const [user, setUser] = useState("some user x");

  /*
  this.setState({
    user: "6582",
  });
  */
  //const [userContextBloodpressure, setU] = useContext(UserContextBloodpressure);
  //const exampleContext = useContext(ExampleContext);
  //const { currentUser, setCurrentUser } = useContext(ExampleContext);
  //const { items, setItems } = useContext(UserContextBloodpressure);
  //const [userNumber, setUserNumber] = exampleContext;
  //const [userName, setUserName] = useState(userContextBloodpressure);
  /*
  useEffect(() => {
    setUser(user);
  }, [user, setUser]);
*/

  const handleClickOne = (e) => {
    e.preventDefault();
    //console.log("The link was clicked.");
    //userNumber = "658276fa-7ee7-11ee-b962-0242ac120000";
    //setUser("658276fa-7ee7-11ee-b962-0242ac120000");

    /*this.setState({
      user: "658276fa-7ee7-11ee-b962-0242ac120000",
    });
    */
    //setCurrentUser("658276fa-7ee7-11ee-b962-0242ac120000");
    //setUserNumber("werwr");
    //alert(userNumber);
    myHandleLoginClick(true, user);
  };

  const handleClickTwo = (e) => {
    e.preventDefault();
    //console.log("The link was clicked.");
    //setUser("658276fa-7ee7-11ee-b962-0242ac120000");
    myHandleLoginClick(true, user);
  };

  const handleClickLogout = (e) => {
    e.preventDefault();
    myHandleLoginClick(false, "empty");
    //setUserContextBloodpressure("empty");
  };

  const handleUser = (e) => {
    setUser(e.target.value);
    //setUser("658276fa-7ee7-11ee-b962-0242ac120000");
  };

  return (
    <>
      <div>LoginPage ucB: exc: </div>
      <br />
      <form onSubmit={handleClickOne}>
        <button
          onClick={(e) => {
            //determineLoginUser(e);
            setUser("658276fa-7ee7-11ee-b962-0242ac120000");
            handleClickOne(e);
          }}
        >
          Login UUID 658276fa-7ee7-11ee-b962-0242ac120000
        </button>
        <br />
        <br />
        <button onClick={handleClickTwo}>
          Login UUID 658276fa-7ee7-11ee-b962-0242ac120001
        </button>
        <br />
        <br />
        <button onClick={handleClickLogout}>Logout</button>
        <input
          type="text"
          placeholder="Enter"
          onChange={handleUser}
          onClick={handleUser}
          defaultValue="658276fa-7ee7-11ee-b962-0242ac120000"
        />
        <button type="submit">
          In INput-Feld klicken oder ändern und dann hier drücken
        </button>
      </form>
    </>
  );
}

export default LoginPage;

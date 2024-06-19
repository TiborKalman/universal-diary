import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import {
  useState,
  useContext,
  createContext,
  useRef,
  useMemo,
  useEffect,
} from "react";

import ApplicationLayout from "./gui/ApplicationLayout";
import MyGlobalStyles from "./styles/MyGlobalStyles";

import Testboard from "./pages/Testboard";
import Testboard2 from "./pages/Testboard2";

import Bloodpressures from "./pages/Bloodpressures";

import LoginPage from "./pages/LoginPage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Bloodpressure from "./pages/Bloodpressure";
import About from "./pages/About";

import { UserContext, useUserContext } from "./contexts/UserContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

export const ExampleContext = createContext(null);

function App() {
  const [userNumber, setUserNumber] = useState("w");
  //const [items, setItems] = useState("content of example Context provider 2");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [items1, setItems1] = useState("Updated Value");
  //const [loading, setLoading] = useState(false);
  //const [uc, setUc] = useState(UserContextBloodpressure);
  const testContext = useContext(ExampleContext);
  //const [userNumberC, setUserNumberC] = useContext(ExampleContext);

  const [user, setUser] = useState("blbla");

  /*useEffect(() => {
    setUserNumber(userNumber);
  }, [userNumber]);*/

  function handleLoginClick(param, use) {
    //console.log("back in app.jsx ");
    // useEffect(() => {
    //setLoading(true);
    setIsLoggedIn(param);

    //alert("userNumber:" + use);

    //setUserNumber(use);
    //setTestContext(userNumber);
    //setUc(userNumber);
    //setUserNumberC(userNumber);
    // }, []);
    setUser(use);
  }

  if (!isLoggedIn) {
    return <LoginPage myHandleLoginClick={handleLoginClick} />;
  }

  return (
    <UserContext.Provider value={user}>
      <ExampleContext.Provider value={userNumber}>
        <QueryClientProvider client={queryClient}>
          <MyGlobalStyles />

          <Router>
            <Routes>
              <Route element={<ApplicationLayout />}>
                <Route index element={<Navigate replace to="testboard" />} />
                <Route
                  path="testboard"
                  element={<Testboard userNumber={userNumber} />}
                />
                <Route path="testboard2" element={<Testboard2 />} />
                <Route path="bloodpressure" element={<Bloodpressures />} />
                <Route path="about" element={<About />} />

                <Route
                  path="bloodpressure/:bloodpressureId"
                  element={<Bloodpressure />}
                />
              </Route>
            </Routes>
          </Router>
        </QueryClientProvider>
      </ExampleContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

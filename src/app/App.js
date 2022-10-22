import { useEffect, useState } from "react";
import MainPage from "./components/pages/mainPage";

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("userOfPiggiBank")));
  }, []);

  return <MainPage currentUser={currentUser} />;
}

export default App;

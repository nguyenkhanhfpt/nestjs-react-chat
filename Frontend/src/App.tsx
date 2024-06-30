import "./App.css";
import { Render } from "./Pages/Render";
import "./assets/css/index.css";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
    <UserProvider>
    <Render></Render>
    </UserProvider>
      
    </>
  );
}

export default App;

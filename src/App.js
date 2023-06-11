import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import PostView from "./Components/PostView/PostView";
import { auth } from "./utils/firebase";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoaded(true);
      } else {
        setIsLoaded(false);
      }
    });
  });

  if (isLoaded) {
    return (
      <div className="app" style={{ display: "inline-flex" }}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post/:id" element={<PostView />} />
        </Routes>
      </div>
    );
  } else {
    return <Login />;
  }
}

export default App;

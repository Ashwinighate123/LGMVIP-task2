import React from "react";
// eslint-disable-next-line
import { useState } from "react";
import Cards from "./Components/user";
//import Footer from "./components/footer";
import "./App.css";

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    //  fetch data  https://reqres.in/api/users?page=1 (api)
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <section className="wholecontainer">
        {/*creating get users button*/}
        <div class="topnav" id="myTopnav">
         
          <a href="#getusers" class="btn" onClick={handleClick}>Get Users</a>
        </div>

        <div className="container">
          <div className="row justify-content-center ">
            {isButtonClick ? (
              isDateLoaded ? (
                <Cards userData={userData} />
              ) : (
                <div class="loader"></div>
              )
            ) : (
              <div className="instruction">
                <p> "Display User " </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

                
         
        




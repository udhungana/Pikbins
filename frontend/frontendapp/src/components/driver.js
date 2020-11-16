import React, { useEffect, useState } from "react";
import "./driver.css";
import TodoItem from "./listItem";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Button } from "reactstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

//const Driver = () => {
function Driver() {
  const [logout, setLogout] = useState(false);
  const [todos, setTodos] = useState([]);
  const [token, setToken, deleteToken] = useCookies(["mr-token"]);
  //static deleteMovie(mov_id, token) {
  //    return fetch(`http://localhost:8000/api/movies/${mov_id}/`, {
  //        method: 'DELETE',
  //        headers: {
  //            'Content-Type':'application/json',
  //            'Authorization': `Token ${token}`
  //        }
  //      })

  const logoutClicked = () => {
    deleteToken(["mr-token"]);
    setLogout(true);
    console.log(logout);
  };

  useEffect(() => {
    // Run! Like go get some data from an API.
    if (logout == false && token["mr-token"]) {
      axios
        .get("/getTask", {
          headers: { Authorization: `Bearer ${token["mr-token"]}` },
        })
        .then((response) => {
          setTodos(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      window.location.href = "/";
    }
  }, [logout, token]);

  const deleteItem = (addr) => {
    //API.deleteMovie(movie.id, token['mr-token'])
    //    .then(() => props.removeClicked(movie))
    //    .catch(error => console.log())
    console.log("delete clicked");
    console.log(addr);
    //const name = e.target.getAttribute("name")
    setTodos(todos.filter((item) => item.address !== addr));

    //updating location of driver
    axios
      .post(
        "/updateDriverLocation",
        { current_location: addr },
        { headers: { Authorization: `Bearer ${token["mr-token"]}` } }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="todo-list" style={{ flex: 1 }}>
          <h1 style={{ color: "green" }}>Pickup Locations List</h1>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              deleteItem={() => deleteItem(todo.address)}
            />
          ))}
        </div>
        <div
          style={{
            flex: 0.1,
          }}
        >
          <Button
            style={{ color: "red", backgroundColor: "white" }}
            onClick={logoutClicked}
          >
            {" "}
            <FontAwesomeIcon icon={faSignOutAlt} />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Driver;

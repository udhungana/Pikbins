import React, { useEffect, useState } from "react";
import "./driver.css";
import TodoItem from "./listItem";
import axios from "axios";
import { useCookies } from "react-cookie";

//const Driver = () => {
function Driver() {
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

  useEffect(() => {
    // Run! Like go get some data from an API.
    axios
      .get("/getTask")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <h1 style={{ color: "green" }}>Pickup Locations List</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            deleteItem={() => deleteItem(todo.address)}
          />
        ))}
      </div>
    </div>
  );
}

export default Driver;

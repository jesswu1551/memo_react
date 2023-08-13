import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "./constants";
import Edit from "./Edit";
import List from "./List";
import "./style.css"

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({data})
  })
}

function App() {
  const [data, setData] = useState([]);
  const submitStatus = useRef(false);

  useEffect(() => {
    if (!submitStatus.current) {
      return;
    }
    fetchSetData(data)
    .then(data => submitStatus.current = false);
  }, [data]);

  useEffect(() => {
    fetchData(setData);
    // fetch('http://localhost:3000/posts/1')
    // .then(res => res.json())
    // .then(data => console.log(data))
  }, []);

  return (
    <>
      <Edit add={setData} submitStatus={submitStatus} />
      <List listData={data} deleteData={setData} submitStatus={submitStatus} />
    </>
  );
}

export default App;

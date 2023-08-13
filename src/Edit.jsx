// const Edit = () => {
//   return <div>Edit page</div>
// }

// export default Edit;

import { useState } from "react";
import { v4 } from "uuid";

function Edit({ add, submitStatus }) {
  // const [a, setA] = useState(100);
  // function plus() {
  //   console.log(a);
  //   setA(function (prev) {
  //     console.log(prev);
  //     return prev + 200
  //     // a+200
  //   });
  // }

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function addItem() {
    submitStatus.current = true;
    add(function (prev) {
      return [
        ...prev,
        { id: v4(), name: name, date: date, time: time },
      ];
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function handleTimeChange(e) {
    setTime(e.target.value);
  }

  return (
    <>
      <h1>MEMO</h1>
      <label htmlFor="taskName">任務名稱</label>
      <input
        type="text"
        id="taskName"
        data-item="123"
        value={name}
        onChange={handleNameChange}
      />

      <label htmlFor="taskDate">日期</label>
      <input
        type="date"
        id="taskDate"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="taskTime">時間</label>
      <input
        type="time"
        id="taskTime"
        value={time}
        onChange={handleTimeChange}
      />

      <button onClick={addItem}>新增</button>
    </>
  );
}

export default Edit;

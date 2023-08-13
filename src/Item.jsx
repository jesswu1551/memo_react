const Item = ({ id, name, date, time, deleteData, submitStatus }) => {

  function handleItemDelete() {
    submitStatus.current = true;
    deleteData(function (prev) {
      console.log(prev);
      return prev.filter(item => item.id !== id);
    })
  }

  return (
    <div className="item">
      Item 名稱: {name} 日期: {date} {time}
      <button className="remove" onClick={handleItemDelete}>刪除</button>
    </div>
  );
};

export default Item;

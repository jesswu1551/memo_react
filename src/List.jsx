import Item from "./Item";

const List = ({ listData, deleteData, submitStatus }) => {
  return (
    <div>
      {
        listData.map((item) => {
          const { id, name, date, time } = item;
          return <Item key={id} name={name} date={date} time={time} id={id} deleteData={deleteData} submitStatus={submitStatus} />;
        })
      }
    </div>
  );
};

export default List;

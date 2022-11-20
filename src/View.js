import React, { useEffect, useState } from "react";
import { useContext } from "react";
import ItemContext from "./ItemContext";
export const View = () => {
  const { props, items, deleteitem } = useContext(ItemContext);
  console.log(props);

  let [total, setTotal] = useState(Number(0));
  const [getValue, setValue] = useState("");
  useEffect(() => {
    let sum = 0;

    items.map((val) => sum += Number(val.Price))
    setTotal(sum)
  },
    [items])

  return <div className="container   table-responsive ">
    {items.length === 0 && <h1 className="text-center mt-5 p-1 rounded  ">No Item in List</h1>}
    {items.length > 0 && <table className={`table table-hover table-${props.theme.bg} shadow mt-4 `}>
      <thead className="p-2 m-2 ">
        <tr>
          <th colSpan='5'><input type="text" placeholder="Type to search..." className="float-end ps-3 rounded-pill " value={getValue} onChange={(e) => setValue(e.target.value)} ></input></th>
        </tr>
        <tr className="text-center">
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Delete</th>

        </tr>
      </thead>
      <tbody className="text-center">
        {
          items.filter((val) => {
            if (getValue === "") { return val; }
            if (val.title.toLowerCase().includes(getValue.toLowerCase())) {
              return val;
            }
            else return false;

          }).map((item, index) => (
            <tr key={item.title}>
              <td >{index + 1}</td>
              <td>{item.title}</td>
              <td>Quantity: {item.Quantity}</td>
              <td>₹{item.Price}</td>
              <td><button className="btn btn-danger pb-0 pt-0 pl-2 pr-2" onClick={() => deleteitem(item.title)}>Delete</button></td>

            </tr>

          ))
        }
        <tr >
          <th colSpan="3">Total</th>
          <th colSpan="2">₹{total}</th>

        </tr>
      </tbody>

    </table>




    }
  </div>
};

import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { View } from "./View";
import ItemContext from "./ItemContext";
import "./App.css";
//getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("items");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Home = (props) => {
  const navigate = useNavigate();
  const navigateToAddItem = () => {
    // navigate to /AddItem
    navigate('./AddItem');
  };

  // main array of objects state || items state || items array of objects
  const [items, setitems] = useState(getDatafromLS());



  // delete item from LS
  const deleteitem = (title) => {
    const filtereditems = items.filter((element) => {
      return element.title !== title;
    });
    setitems(filtereditems);
  };
  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="container shadow rounded mt-5 p-5" style={{ minHeight: "60vh" }}>
      <div className="d-flex ">
        <button className="btn btn-primary btn-sm m-2 fw-bold" onClick={navigateToAddItem}>Add Item</button>
        <h1 className='text-center m-1 p-1 rounded shadow flex-fill '>Daily Groceries</h1>
      </div>
      <div >
        <ItemContext.Provider value={{ props, items, deleteitem }}>
          <View />
        </ItemContext.Provider>
        {/* <View  items={items} deleteitem={deleteitem} /> */}

      </div>
    </div>
  );
};

export default Home;

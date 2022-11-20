import React, { useState, useEffect } from "react";//to dynamically update data
import { useNavigate } from 'react-router-dom';//for navgation on page
import "./App.css";
// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("items");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function AddItem() {
  const navigate = useNavigate();

  const navigateHome = () => {
    //  navigate to /
    navigate('/');
  };


  // main array of objects state || items state || items array of objects
  const [items, setitems] = useState(getDatafromLS());

  // input field states
  const [title, setTitle] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Price, setPrice] = useState("");

  // form submit event
  const handleAdditemsubmit = (e) => {
    // e.preventDefault();
    // creating an object

    let item = {
      title,
      Quantity,
      Price
    };
    if (title !== '') {
      setitems([...items, item]);
    }
    // alert(`Added ${title} to list`,navigateHome())

    setTitle("");
    setQuantity("");
    setPrice("");



  };



  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="container shadow rounded  mt-5 p-5">
      <div className="d-flex ">

        <button className="btn btn-primary btn-sm m-2 fw-bold" onClick={navigateHome}>Go Home  </button>
        <h1 className='text-center m-1  p-1 rounded shadow flex-fill' >Add Item</h1>
      </div>
      <form onSubmit={handleAdditemsubmit} action="/" >
        <div className="form-group">
          <label htmlFor="titleId">Title*:</label>
          <input
            id="titleId"
            type="text"
            className="form-control rounded-pill"
            placeholder="Enter Item..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="quantityId">Quantity:</label>
          <input
            id="quantityId"
            type="text"
            className="form-control rounded-pill"
            placeholder="Enter Quantity..."

            onChange={(e) => setQuantity(e.target.value)}
            value={Quantity}
          ></input>
        </div>
        <div className="form-group">

          <label htmlFor="priceId">Price:</label>
          <input
            id="priceId"
            type="number"
            className="form-control rounded-pill"
            placeholder="Enter Price..."

            onChange={(e) => setPrice(e.target.value)}
            value={Price}
          ></input>
        </div>
        <div className="pt-2 pb-2">
          <button type="submit" className="btn btn-primary"  >
            Add To List
          </button>
        </div>
      </form>
    </div>

  )
}

export default AddItem;

import React, { useState, useEffect } from "react";
import "../../styles/FarmerDashboard.css";
import counties from "../../data";
import { Card, Button } from "react-bootstrap";
import config from "../../config/config";

function FarmerDashboard() {
  const [farmers, setFarmers] = useState([]);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().substr(0, 10),
    name: "",
    phoneNumber: "",
    productName: "",
    productImage: null, // updated type to File and set default value to null
    productVideo: null, // updated type to File and set default value to null
    pricePerUnit: "",
    county: "",
    subCounty: "",
  });

  useEffect(() => {
    fetch(`${config.backendUrl}/api/farmers`)
      .then((res) => res.json())
      .then((data) => setFarmers(data))
      .catch((err) => console.log(err));
  }, []);

  const onChange = (e) => {
    if (e.target.name === "county") {
      const selectedCounty = counties.find(
        (county) => county.name === e.target.value
      );
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        subCounty: "",
        subCountyOptions: selectedCounty.sub_counties,
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onImageChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const onVideoChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      const res = await fetch(`${config.backendUrl}/api/farmers`, {
        method: "POST",
        body: formDataToSend,
      });
      const data = await res.json();
      setFarmers([...farmers, data]);
      setFormData({
        date: new Date().toISOString().substr(0, 10),
        name: "",
        phoneNumber: "",
        productName: "",
        productImage: null, // updated type to File and set default value to null
        productVideo: null, // updated type to File and set default value to null
        pricePerUnit: "",
        county: "",
        subCounty: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onDelete = async (id) => {
    try {
      await fetch(`${config.backendUrl}/api/farmers/${id}`, {
        method: "DELETE",
      });
      setFarmers(farmers.filter((farmer) => farmer._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const onUpdate = async (id) => {
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      const res = await fetch(`${config.backendUrl}/api/farmers/${id}`, {
        method: "PUT",
        body: formDataToSend,
      });
      const data = await res.json();
      const updatedFarmers = farmers.map((farmer) =>
        farmer._id === id ? data : farmer
      );
      setFarmers(updatedFarmers);
      setFormData({
        date: new Date().toISOString().substr(0, 10),
        name: "",
        phoneNumber: "",
        productName: "",
        productImage: null,
        productVideo: null,
        pricePerUnit: "",
        county: "",
        subCounty: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="container">
        <h1 className="dashboard__title">Farmer Dashboard</h1>
        <div className="dashboard__cards">
          {farmers.map((farmer) => (
            <Card key={farmer._id}>
              <Card.Img
                variant="top"
                src={farmer.productImage}
                alt="product1"
              />
              <Card.Body>
                <Card.Title>{farmer.productName}</Card.Title>
                <Card.Text>
                  <strong>Date:</strong>{" "}
                  {new Date(farmer.date).toLocaleDateString()}
                  <br />
                  <strong>Name:</strong> {farmer.name}
                  <br />
                  <strong>Phone Number:</strong> {farmer.phoneNumber}
                  <br />
                  <strong>Price per Unit:</strong> {farmer.pricePerUnit}
                  <br />
                  <strong>County:</strong> {farmer.county}
                  <br />
                  <strong>Sub-County:</strong> {farmer.subCounty}
                </Card.Text>
                <Button variant="danger" onClick={() => onDelete(farmer._id)}>
                  Delete
                </Button>{" "}
                <Button variant="primary" onClick={() => onUpdate(farmer._id)}>
                  Edit
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <form onSubmit={onSubmit} className="form-container">
          <h2>Add Farmer</h2>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productName">Product Name:</label>
            <textarea
              className="form-control"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="productImage">Product Image :</label>
            <input
              type="file"
              className="form-control"
              id="productImage"
              name="productImage"
              onChange={onImageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productVideo">Product Video:</label>
            <input
              type="file"
              className="form-control"
              id="productVideo"
              name="productVideo"
              onChange={onVideoChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pricePerUnit">Price per Unit:</label>
            <input
              type="number"
              className="form-control"
              id="pricePerUnit"
              name="pricePerUnit"
              value={formData.pricePerUnit}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="county">County:</label>
            <select
              className="form-control"
              id="county"
              name="county"
              value={formData.county}
              onChange={onChange}
            >
              <option value="">--Select County--</option>
              {counties.map((county) => (
                <option key={county.name} value={county.name}>
                  {county.name}
                </option>
              ))}
            </select>
          </div>
          {formData.subCountyOptions && (
            <div className="form-group">
              <label htmlFor="subCounty">Sub-county:</label>
              <select
                className="form-control"
                id="subCounty"
                name="subCounty"
                value={formData.subCounty}
                onChange={onChange}
              >
                <option value="">--Select Sub-county--</option>
                {formData.subCountyOptions.map((subCounty) => (
                  <option key={subCounty} value={subCounty}>
                    {subCounty}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default FarmerDashboard;

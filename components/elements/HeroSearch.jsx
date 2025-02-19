"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import MyDatePicker from "./MyDatePicker";

export default function HeroSearch() {
  const [vehicles, setVehicles] = useState([]);
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    // Fetch car data from JSON file
    fetch("https://demos.kickass.co.za/penta-now/vehicles.php")
      .then((response) => response.json())
      .then((data) => {
        setVehicles(data);

        // Extract makes
        const uniqueMakes = [...new Set(data.map((car) => car.Make))].sort();
        setMakes(uniqueMakes);
      })
      .catch((error) => console.error("Error fetching car data:", error));
  }, []);

  // Handle Make Selection
  const handleMakeSelect = (make) => {
    setSelectedMake(make);
    setSelectedModel(""); // Reset model selection

    // Extract unique models based on selected make
    const filteredModels = [
      ...new Set(
        vehicles.filter((car) => car.Make === make).map((car) => car.Model)
      ),
    ].sort();
    setModels(filteredModels);
  };

  return (
    <>
      <div className="box-bottom-search background-card">
        <div className="item-search">
          <label className="text-sm-bold neutral-500">Vehicle Make</label>
          <Dropdown className="dropdown">
            <Dropdown.Toggle
              as="div"
              className="btn btn-secondary dropdown-toggle btn-dropdown-search location-search"
              aria-expanded="false"
            >
              {selectedMake || "All Makes"}
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul" className="dropdown-menu">
              {makes.map((make, index) => (
                <Dropdown.Item as="li" key={index} onClick={() => handleMakeSelect(make)}>
                  <Link className="dropdown-item" href="#">
                    {make}
                  </Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="item-search item-search-2">
          <label className="text-sm-bold neutral-500">Vehicle Model</label>
          <Dropdown className="dropdown">
            <Dropdown.Toggle
              as="div"
              className="btn btn-secondary dropdown-toggle btn-dropdown-search location-search"
            >
              Delaware, USA
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul" className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="#">
                  Paris, France
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Tokyo, Japan
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  New York City, USA
                </Link>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="item-search item-search-3">
          <label className="text-sm-bold neutral-500">Min Price</label>
          <div className="box-calendar-date">
            <MyDatePicker />
          </div>
        </div>
        <div className="item-search bd-none">
          <label className="text-sm-bold neutral-500">Max Price</label>
          <div className="box-calendar-date">
            <MyDatePicker />
          </div>
        </div>
        <div className="item-search bd-none d-flex justify-content-end">
          <button className="btn btn-brand-2 text-nowrap">
            <svg
              className="me-2"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 19L14.6569 14.6569M14.6569 14.6569C16.1046 13.2091 17 11.2091 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C11.2091 17 13.2091 16.1046 14.6569 14.6569Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Find a Vehicle
          </button>
        </div>
      </div>
    </>
  );
}

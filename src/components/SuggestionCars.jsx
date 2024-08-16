import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import approvedBadge from "../assets/Approved_badge.png";
import carOne from "../assets/Mercedes-Benz-B-class.jpg";
import carTwo from "../assets/chevrolet-utility.jpg";
import carThree from "../assets/nissan-qashqai.jpg";
import carFour from "../assets/Honda_Jazz.jpg";
import carFive from "../assets/datsun-go.jpg";
import carSix from "../assets/kwid-1.0-life.jpg";
import carSeven from "../assets/kwid-1.0-expression.jpg";
import carEight from "../assets/Renault-Triber.jpg";
import carNine from "../assets/suzuki-s-presso-1.0-gl.jpg";
import carTen from "../assets/suzuki-jimny-1.3.jpg";
import carEleven from "../assets/haval-h1.jpg";
import carTwelve from "../assets/nissan-np200.jpg";
import carThirteen from "../assets/mahindra-pikup.jpg";
import carFourteen from "../assets/suzuki-celerio-1.0.jpg";
import carFifteen from "../assets/suzuki-s-presso-s-edition.jpg";
import carSixteen from "../assets/suzuki-vitara-1.6-glx.jpg";
import carSeventeen from "../assets/vitara-1.6-glx-allgrip.jpg";
import "../styles/AllCars.css"; // Ensure this file contains your styling

const SuggestionCars = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { car } = location.state || {};

  console.log("Branch Info:", car.branchInfo);

  if (!car) {
    return <p>No car data available.</p>;
  }

  // Extract branch info from the car data
  const branchInfo = car.branchInfo[0];
  const branchName = branchInfo.branchName;

  // Since `address` is an array of objects, you need to access the first element.
  const address = branchInfo.address[0];

  // Destructure the address object correctly.
  const { addressLine, town, city, code } = address;

  const addressLink = branchInfo.directionsLink;

  // Find cars from the same branch
  const suggestionCars = [
    {
      image: carOne,
      type: "Hatch",
      make: "Mercedes Benz",
      model: "B-class",
      variant: "B180",
      year: 2011,
      mileage: 192323,
      price: "99 950",
      engine: 1800,
      fuel: "Petrol",
      transmission: "Automatic",
      color: "Comet Grey",
      branch: "Lynnwood",
      pentaApproved: "no",
      stockNo: "UNL10023",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Lynnwood",
          address: [
            {
              addressLine: "Cnr Simon Vermooten, Lynnwood Rd",
              town: "Lynnwood",
              city: "Pretoria",
              code: "0081",
            },
          ],
          cell: "083 488 5391",
          email: "lynwood@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//Penta+Now+Lynnwood,+and,+Lynnwood+Road,+Lynnwood,+Pretoria/@-25.7653919,28.2802744,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1e955f1ef1a42b95:0xdd087d6ca5261286!2m2!1d28.321474!2d-25.7653977?entry=ttu",
        },
      ],
    },
    {
      image: carTwo,
      type: "Hatch",
      make: "Chevrolet",
      model: "Utility",
      variant: "1.4 A/C Pick Up",
      year: 2014,
      mileage: 86000,
      price: "117 900",
      engine: 1400,
      fuel: "Diesel",
      transmission: "Manual",
      color: "WHITE",
      branch: "Centurion",
      pentaApproved: "no",
      stockNo: "PCU10006",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Centurion",
          address: [
            {
              addressLine: "3 Lenchen Ave, Centurion Central",
              town: "Centurion",
              city: "Pretoria",
              code: "0014",
            },
          ],
          cell: "084 639 8663",
          email: "centurion@now.co.za",
          directionsLink:
            "https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014",
        },
      ],
    },
    {
      image: carThree,
      type: "SUV",
      make: "Nissan",
      model: "Qashqai",
      variant: "2.0 ACENTA CVT",
      year: 2012,
      mileage: 181000,
      price: "119 900",
      engine: 2,
      fuel: "Petrol",
      transmission: "CVT",
      color: "Metallic Silky Silver",
      branch: "Gezina",
      pentaApproved: "no",
      stockNo: "UNG38",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Gezina",
          address: [
            {
              addressLine: "1073 SteveBiko Road",
              town: "Wonderboom South",
              city: "Pretoria",
              code: "0084",
            },
          ],
          cell: "083 488 5391",
          email: "gezina@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//1073+Steve+Biko+Road,+Wonderboom+South,+Pretoria,+Gauteng/@-25.7019383,28.1970394,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ebfd8ce70a712e7:0x9219098789acd039!2m2!1d28.1996143!2d-25.7019383?entry=ttu",
        },
      ],
    },
    {
      image: carFour,
      type: "Hatchback",
      make: "Honda",
      model: "Jazz",
      variant: "1.2 COMFORT",
      year: 2016,
      mileage: 130000,
      price: "129 900",
      engine: 1200,
      fuel: "Petrol",
      transmission: "Manual",
      color: "WHITE",
      branch: "Centurion",
      pentaApproved: "no",
      stockNo: "PCU10067",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Centurion",
          address: [
            {
              addressLine: "3 Lenchen Ave, Centurion Central",
              town: "Centurion",
              city: "Pretoria",
              code: "0014",
            },
          ],
          cell: "084 639 8663",
          email: "centurion@now.co.za",
          directionsLink:
            "https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014",
        },
      ],
    },
    {
      image: carFive,
      type: "Hatchback",
      make: "Datsun",
      model: "Go",
      variant: "1.2 LUX",
      year: 2020,
      mileage: 52200,
      price: "129 900",
      engine: 1200,
      fuel: "Petrol",
      transmission: "Manual",
      color: "Silver",
      branch: "Gezina",
      pentaApproved: "no",
      stockNo: "UNG36",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Gezina",
          address: [
            {
              addressLine: "1073 SteveBiko Road",
              town: "Wonderboom South",
              city: "Pretoria",
              code: "0084",
            },
          ],
          cell: "083 488 5391",
          email: "gezina@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//1073+Steve+Biko+Road,+Wonderboom+South,+Pretoria,+Gauteng/@-25.7019383,28.1970394,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ebfd8ce70a712e7:0x9219098789acd039!2m2!1d28.1996143!2d-25.7019383?entry=ttu",
        },
      ],
    },
    {
      image: carSix,
      type: "Hatchback",
      make: "Renault",
      model: "Kwid",
      variant: "1.0 LIFE",
      year: 2023,
      mileage: 71000,
      price: "129 900",
      engine: 1000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "White",
      branch: "Gezina",
      pentaApproved: "no",
      stockNo: "UNG51",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Gezina",
          address: [
            {
              addressLine: "1073 SteveBiko Road",
              town: "Wonderboom South",
              city: "Pretoria",
              code: "0084",
            },
          ],
          cell: "083 488 5391",
          email: "gezina@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//1073+Steve+Biko+Road,+Wonderboom+South,+Pretoria,+Gauteng/@-25.7019383,28.1970394,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ebfd8ce70a712e7:0x9219098789acd039!2m2!1d28.1996143!2d-25.7019383?entry=ttu",
        },
      ],
    },
    {
      image: carSeven,
      type: "Hatchback",
      make: "Renault",
      model: "Kwid",
      variant: "1.0 EXPRESSION / LIFE 5DR",
      year: 2022,
      mileage: 28000,
      price: "139 900",
      engine: 1000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "White",
      branch: "Lynnwood",
      pentaApproved: "no",
      stockNo: "UNL10035",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Lynnwood",
          address: [
            {
              addressLine: "Cnr Simon Vermooten, Lynnwood Rd",
              town: "Lynnwood",
              city: "Pretoria",
              code: "0081",
            },
          ],
          cell: "083 488 5391",
          email: "lynwood@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//Penta+Now+Lynnwood,+and,+Lynnwood+Road,+Lynnwood,+Pretoria/@-25.7653919,28.2802744,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1e955f1ef1a42b95:0xdd087d6ca5261286!2m2!1d28.321474!2d-25.7653977?entry=ttu",
        },
      ],
    },
    {
      image: carEight,
      type: "Hatchback",
      make: "Renault",
      model: "Triber",
      variant: "1.0 EXPRESSION P/V",
      year: 2022,
      mileage: 32838,
      price: "149 800",
      engine: 1000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "White",
      branch: "Klerksdorp",
      pentaApproved: "no",
      stockNo: "UNK51",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Klerksdorp",
          address: [
            {
              addressLine: "70 Buffelsdoorn Rd",
              town: "Wilkoppies",
              city: "Klerksdorp",
              code: "2571",
            },
          ],
          cell: "083 628 3195",
          email: "klerksdorp@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//Penta+Now+Klerksdorp,+Buffelsdoorn+Road,+Wilkoppies,+Klerksdorp/@-26.8420402,26.6349068,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1e96f13a9209dca1:0x653387b48ebe9d5c!2m2!1d26.6761064!2d-26.8420462?entry=ttuu",
        },
      ],
    },
    {
      image: carNine,
      type: "Hatchback",
      make: "Suzuki",
      model: "S.presso",
      variant: "1.0 GL MT",
      year: 2023,
      mileage: 37900,
      price: "149 900",
      engine: 1000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "White",
      branch: "Centurion",
      pentaApproved: "no",
      stockNo: "PCU10025",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Centurion",
          address: [
            {
              addressLine: "3 Lenchen Ave, Centurion Central",
              town: "Centurion",
              city: "Pretoria",
              code: "0014",
            },
          ],
          cell: "084 639 8663",
          email: "centurion@now.co.za",
          directionsLink:
            "https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014",
        },
      ],
    },
    {
      image: carTen,
      type: "Hatchback",
      make: "Suzuki",
      model: "Jimny",
      variant: "1.3",
      year: 2012,
      mileage: 161000,
      price: "149 900",
      engine: 1300,
      fuel: "Petrol",
      transmission: "Manual",
      color: "Grey",
      branch: "Gezina",
      pentaApproved: "no",
      stockNo: "UNG12",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Gezina",
          address: [
            {
              addressLine: "1073 SteveBiko Road",
              town: "Wonderboom South",
              city: "Pretoria",
              code: "0084",
            },
          ],
          cell: "083 488 5391",
          email: "gezina@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//1073+Steve+Biko+Road,+Wonderboom+South,+Pretoria,+Gauteng/@-25.7019383,28.1970394,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ebfd8ce70a712e7:0x9219098789acd039!2m2!1d28.1996143!2d-25.7019383?entry=ttu",
        },
      ],
    },
    {
      image: carNine,
      type: "Hatchback",
      make: "Suzuki",
      model: "S.presso",
      variant: "1.0 GL MT",
      year: 2023,
      mileage: 37801,
      price: "149 900",
      engine: 1000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "White",
      branch: "Mokopane",
      pentaApproved: "no",
      stockNo: "UNM13",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Mokopane",
          address: [
            {
              addressLine1: "102 Thabo Mbeki Dr",
              town: "Mokopane",
              city: "Limpopo",
              code: "0601",
            },
          ],
          cell: "079 053 6663",
          email: "mokopane@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//102+Thabo+Mbeki+Dr,+Mokopane,+Limpopo,+0601/@-24.187992,28.9706074,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ec0b53aaf551993:0x43890edcbdb36306!2m2!1d29.011807!2d-24.1879975?entry=ttu",
        },
      ],
    },
    {
      image: carEleven,
      type: "Hatchback",
      make: "Haval",
      model: "H1",
      variant: "1.5 VVT",
      year: 2020,
      mileage: 106000,
      price: "149 950",
      engine: 1500,
      fuel: "Petrol",
      transmission: "Manual",
      color: "Red",
      branch: "Centurion",
      pentaApproved: "no",
      stockNo: "PCU10052",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Centurion",
          address: [
            {
              addressLine: "3 Lenchen Ave, Centurion Central",
              town: "Centurion",
              city: "Pretoria",
              code: "0014",
            },
          ],
          cell: "084 639 8663",
          email: "centurion@now.co.za",
          directionsLink:
            "https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014",
        },
      ],
    },
    {
      image: carTwelve,
      type: "Pickup",
      make: "Nissan",
      model: "NP200",
      variant: "1.5 (A/C) Safety UA7",
      year: 2020,
      mileage: 143430,
      price: "159 900",
      engine: 1600,
      fuel: "Petrol",
      transmission: "Manual",
      color: "WHITE",
      branch: "Mokopane",
      pentaApproved: "no",
      stockNo: "UNM5",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Mokopane",
          address: [
            {
              addressLine1: "102 Thabo Mbeki Dr",
              town: "Mokopane",
              city: "Limpopo",
              code: "0601",
            },
          ],
          cell: "079 053 6663",
          email: "mokopane@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//102+Thabo+Mbeki+Dr,+Mokopane,+Limpopo,+0601/@-24.187992,28.9706074,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ec0b53aaf551993:0x43890edcbdb36306!2m2!1d29.011807!2d-24.1879975?entry=ttu",
        },
      ],
    },
    {
      image: carThirteen,
      type: "Pickup",
      make: "Mahindra",
      model: "PIK UP",
      variant: "2.2 mHAWK S4 P/U S/C",
      year: 2022,
      mileage: 85331,
      price: "179 900",
      engine: 2200,
      fuel: "Diesel",
      transmission: "Manual",
      color: "WHITE",
      branch: "Brits",
      pentaApproved: "no",
      stockNo: "UNB96",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Brits",
          address: [
            {
              addressLine: "73 Spoorweg Street",
              town: "Brits",
              city: "North West",
              code: "0250",
            },
          ],
          cell: "079 488 0244",
          email: "brits@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//73+Spoorweg+Street,+Brits/@-25.6426674,27.7341603,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ebe3028dfbda5e9:0x72ee6fe05457f1f8!2m2!1d27.7753599!2d-25.6426732?entry=ttu",
        },
      ],
    },
    {
      image: carFourteen,
      type: "Hatchback",
      make: "Suzuki",
      model: "Celerio",
      variant: "1.0 GL MT",
      year: 2022,
      mileage: 49000,
      price: "169 900",
      engine: 1000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "WHITE",
      branch: "Centurion",
      pentaApproved: "yes",
      stockNo: "PCU10057",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Centurion",
          address: [
            {
              addressLine: "3 Lenchen Ave, Centurion Central",
              town: "Centurion",
              city: "Pretoria",
              code: "0014",
            },
          ],
          cell: "084 639 8663",
          email: "centurion@now.co.za",
          directionsLink:
            "https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014",
        },
      ],
    },
    {
      image: carFifteen,
      type: "Hatchback",
      make: "Suzuki",
      model: "S.presso",
      variant: "1.0 S-Edition MT MC",
      year: 2023,
      mileage: 6000,
      price: "173 900",
      engine: 1000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "Silver",
      branch: "Gezina",
      pentaApproved: "yes",
      stockNo: "UNG19",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Gezina",
          address: [
            {
              addressLine: "1073 SteveBiko Road",
              town: "Wonderboom South",
              city: "Pretoria",
              code: "0084",
            },
          ],
          cell: "083 488 5391",
          email: "gezina@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//1073+Steve+Biko+Road,+Wonderboom+South,+Pretoria,+Gauteng/@-25.7019383,28.1970394,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ebfd8ce70a712e7:0x9219098789acd039!2m2!1d28.1996143!2d-25.7019383?entry=ttu",
        },
      ],
    },
    {
      image: carFifteen,
      type: "Hatchback",
      make: "Suzuki",
      model: "S.presso",
      variant: "1.0 S-Edition MT MC",
      year: 2023,
      mileage: 11577,
      price: "173 900",
      engine: 1000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "Silver",
      branch: "Gezina",
      pentaApproved: "yes",
      stockNo: "UNG21",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Gezina",
          address: [
            {
              addressLine: "1073 SteveBiko Road",
              town: "Wonderboom South",
              city: "Pretoria",
              code: "0084",
            },
          ],
          cell: "083 488 5391",
          email: "gezina@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//1073+Steve+Biko+Road,+Wonderboom+South,+Pretoria,+Gauteng/@-25.7019383,28.1970394,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ebfd8ce70a712e7:0x9219098789acd039!2m2!1d28.1996143!2d-25.7019383?entry=ttu",
        },
      ],
    },
    {
      image: carSixteen,
      type: "Hatchback",
      make: "Suzuki",
      model: "Vitara",
      variant: "1.6 GLX ALLGRIP",
      year: 2024,
      mileage: 130,
      price: "388 900",
      engine: 130,
      fuel: "Petrol",
      transmission: "Manual",
      color: "TURQUOISE/BLACK",
      branch: "Brits",
      pentaApproved: "yes",
      stockNo: "UNB55",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Brits",
          address: [
            {
              addressLine: "73 Spoorweg Street",
              town: "Brits",
              city: "North West",
              code: "0250",
            },
          ],
          cell: "079 488 0244",
          email: "brits@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//73+Spoorweg+Street,+Brits/@-25.6426674,27.7341603,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ebe3028dfbda5e9:0x72ee6fe05457f1f8!2m2!1d27.7753599!2d-25.6426732?entry=ttu",
        },
      ],
    },
    {
      image: carSeventeen,
      type: "Hatchback",
      make: "Suzuki",
      model: "Vitara",
      variant: "1.6 GLX ALLGRIP",
      year: 2024,
      mileage: 413,
      price: "389 900",
      engine: 1600,
      fuel: "Petrol",
      transmission: "Automatic",
      color: "White",
      branch: "Mokopane",
      pentaApproved: "yes",
      stockNo: "UNM17",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Mokopane",
          address: [
            {
              addressLine1: "102 Thabo Mbeki Dr",
              town: "Mokopane",
              city: "Limpopo",
              code: "0601",
            },
          ],
          cell: "079 053 6663",
          email: "mokopane@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//102+Thabo+Mbeki+Dr,+Mokopane,+Limpopo,+0601/@-24.187992,28.9706074,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ec0b53aaf551993:0x43890edcbdb36306!2m2!1d29.011807!2d-24.1879975?entry=ttu",
        },
      ],
    },
    {
      image: carOne,
      type: "Hatch",
      make: "Mercedes Benz",
      model: "B-class",
      variant: "B180",
      year: 2011,
      mileage: 192323,
      price: "99 950",
      engine: 1800,
      fuel: "Petrol",
      transmission: "Automatic",
      color: "Comet Grey",
      branch: "Lynnwood",
      pentaApproved: "no",
      stockNo: "UNL10023",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Lynnwood",
          address: [
            {
              addressLine: "Cnr Simon Vermooten, Lynnwood Rd",
              town: "Lynnwood",
              city: "Pretoria",
              code: "0081",
            },
          ],
          cell: "083 488 5391",
          email: "lynwood@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//Penta+Now+Lynnwood,+and,+Lynnwood+Road,+Lynnwood,+Pretoria/@-25.7653919,28.2802744,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1e955f1ef1a42b95:0xdd087d6ca5261286!2m2!1d28.321474!2d-25.7653977?entry=ttu",
        },
      ],
    },
    {
      image: carTwo,
      type: "Hatch",
      make: "Chevrolet",
      model: "Utility",
      variant: "1.4 A/C Pick Up",
      year: 2014,
      mileage: 86000,
      price: "117 900",
      engine: 1400,
      fuel: "Diesel",
      transmission: "Manual",
      color: "WHITE",
      branch: "Centurion",
      pentaApproved: "no",
      stockNo: "PCU10006",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Centurion",
          address: [
            {
              addressLine: "3 Lenchen Ave, Centurion Central",
              town: "Centurion",
              city: "Pretoria",
              code: "0014",
            },
          ],
          cell: "084 639 8663",
          email: "centurion@now.co.za",
          directionsLink:
            "https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014",
        },
      ],
    },
    {
      image: carThree,
      type: "SUV",
      make: "Nissan",
      model: "Qashqai",
      variant: "2.0 ACENTA CVT",
      year: 2012,
      mileage: 181000,
      price: "119 900",
      engine: 2,
      fuel: "Petrol",
      transmission: "CVT",
      color: "Metallic Silky Silver",
      branch: "Gezina",
      pentaApproved: "no",
      stockNo: "UNG38",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Gezina",
          address: [
            {
              addressLine: "1073 SteveBiko Road",
              town: "Wonderboom South",
              city: "Pretoria",
              code: "0084",
            },
          ],
          cell: "083 488 5391",
          email: "gezina@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//1073+Steve+Biko+Road,+Wonderboom+South,+Pretoria,+Gauteng/@-25.7019383,28.1970394,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ebfd8ce70a712e7:0x9219098789acd039!2m2!1d28.1996143!2d-25.7019383?entry=ttu",
        },
      ],
    },
    {
      image: carFour,
      type: "Hatchback",
      make: "Honda",
      model: "Jazz",
      variant: "1.2 COMFORT",
      year: 2016,
      mileage: 130000,
      price: "129 900",
      engine: 1200,
      fuel: "Petrol",
      transmission: "Manual",
      color: "WHITE",
      branch: "Centurion",
      pentaApproved: "no",
      stockNo: "PCU10067",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Centurion",
          address: [
            {
              addressLine: "3 Lenchen Ave, Centurion Central",
              town: "Centurion",
              city: "Pretoria",
              code: "0014",
            },
          ],
          cell: "084 639 8663",
          email: "centurion@now.co.za",
          directionsLink:
            "https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014",
        },
      ],
    },
    {
      image: carFive,
      type: "Hatchback",
      make: "Datsun",
      model: "Go",
      variant: "1.2 LUX",
      year: 2020,
      mileage: 52200,
      price: "129 900",
      engine: 1200,
      fuel: "Petrol",
      transmission: "Manual",
      color: "Silver",
      branch: "Gezina",
      pentaApproved: "no",
      stockNo: "UNG36",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Gezina",
          address: [
            {
              addressLine: "1073 SteveBiko Road",
              town: "Wonderboom South",
              city: "Pretoria",
              code: "0084",
            },
          ],
          cell: "083 488 5391",
          email: "gezina@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//1073+Steve+Biko+Road,+Wonderboom+South,+Pretoria,+Gauteng/@-25.7019383,28.1970394,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ebfd8ce70a712e7:0x9219098789acd039!2m2!1d28.1996143!2d-25.7019383?entry=ttu",
        },
      ],
    },
    {
      image: carSix,
      type: "Hatchback",
      make: "Renault",
      model: "Kwid",
      variant: "1.0 LIFE",
      year: 2023,
      mileage: 71000,
      price: "129 900",
      engine: 1000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "White",
      branch: "Gezina",
      pentaApproved: "no",
      stockNo: "UNG51",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Gezina",
          address: [
            {
              addressLine: "1073 SteveBiko Road",
              town: "Wonderboom South",
              city: "Pretoria",
              code: "0084",
            },
          ],
          cell: "083 488 5391",
          email: "gezina@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//1073+Steve+Biko+Road,+Wonderboom+South,+Pretoria,+Gauteng/@-25.7019383,28.1970394,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ebfd8ce70a712e7:0x9219098789acd039!2m2!1d28.1996143!2d-25.7019383?entry=ttu",
        },
      ],
    },
    {
      image: carSeven,
      type: "Hatchback",
      make: "Renault",
      model: "Kwid",
      variant: "1.0 EXPRESSION / LIFE 5DR",
      year: 2022,
      mileage: 28000,
      price: "139 900",
      engine: 1000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "White",
      branch: "Lynnwood",
      pentaApproved: "no",
      stockNo: "UNL10035",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Lynnwood",
          address: [
            {
              addressLine: "Cnr Simon Vermooten, Lynnwood Rd",
              town: "Lynnwood",
              city: "Pretoria",
              code: "0081",
            },
          ],
          cell: "083 488 5391",
          email: "lynwood@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//Penta+Now+Lynnwood,+and,+Lynnwood+Road,+Lynnwood,+Pretoria/@-25.7653919,28.2802744,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1e955f1ef1a42b95:0xdd087d6ca5261286!2m2!1d28.321474!2d-25.7653977?entry=ttu",
        },
      ],
    },
    {
      image: carEight,
      type: "Hatchback",
      make: "Renault",
      model: "Triber",
      variant: "1.0 EXPRESSION P/V",
      year: 2022,
      mileage: 32838,
      price: "149 800",
      engine: 1000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "White",
      branch: "Klerksdorp",
      pentaApproved: "no",
      stockNo: "UNK51",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Klerksdorp",
          address: [
            {
              addressLine: "70 Buffelsdoorn Rd",
              town: "Wilkoppies",
              city: "Klerksdorp",
              code: "2571",
            },
          ],
          cell: "083 628 3195",
          email: "klerksdorp@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//Penta+Now+Klerksdorp,+Buffelsdoorn+Road,+Wilkoppies,+Klerksdorp/@-26.8420402,26.6349068,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1e96f13a9209dca1:0x653387b48ebe9d5c!2m2!1d26.6761064!2d-26.8420462?entry=ttuu",
        },
      ],
    },
    {
      image: carNine,
      type: "Hatchback",
      make: "Suzuki",
      model: "S.presso",
      variant: "1.0 GL MT",
      year: 2023,
      mileage: 37900,
      price: "149 900",
      engine: 1000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "White",
      branch: "Centurion",
      pentaApproved: "no",
      stockNo: "PCU10025",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Centurion",
          address: [
            {
              addressLine: "3 Lenchen Ave, Centurion Central",
              town: "Centurion",
              city: "Pretoria",
              code: "0014",
            },
          ],
          cell: "084 639 8663",
          email: "centurion@now.co.za",
          directionsLink:
            "https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014",
        },
      ],
    },
    {
      image: carTen,
      type: "Hatchback",
      make: "Suzuki",
      model: "Jimny",
      variant: "1.3",
      year: 2012,
      mileage: 161000,
      price: "149 900",
      engine: 1300,
      fuel: "Petrol",
      transmission: "Manual",
      color: "Grey",
      branch: "Gezina",
      pentaApproved: "no",
      stockNo: "UNG12",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Gezina",
          address: [
            {
              addressLine: "1073 SteveBiko Road",
              town: "Wonderboom South",
              city: "Pretoria",
              code: "0084",
            },
          ],
          cell: "083 488 5391",
          email: "gezina@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//1073+Steve+Biko+Road,+Wonderboom+South,+Pretoria,+Gauteng/@-25.7019383,28.1970394,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ebfd8ce70a712e7:0x9219098789acd039!2m2!1d28.1996143!2d-25.7019383?entry=ttu",
        },
      ],
    },
    {
      image: carNine,
      type: "Hatchback",
      make: "Suzuki",
      model: "S.presso",
      variant: "1.0 GL MT",
      year: 2023,
      mileage: 37801,
      price: "149 900",
      engine: 1000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "White",
      branch: "Mokopane",
      pentaApproved: "no",
      stockNo: "UNM13",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Mokopane",
          address: [
            {
              addressLine1: "102 Thabo Mbeki Dr",
              town: "Mokopane",
              city: "Limpopo",
              code: "0601",
            },
          ],
          cell: "079 053 6663",
          email: "mokopane@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//102+Thabo+Mbeki+Dr,+Mokopane,+Limpopo,+0601/@-24.187992,28.9706074,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ec0b53aaf551993:0x43890edcbdb36306!2m2!1d29.011807!2d-24.1879975?entry=ttu",
        },
      ],
    },
    {
      image: carEleven,
      type: "Hatchback",
      make: "Haval",
      model: "H1",
      variant: "1.5 VVT",
      year: 2020,
      mileage: 106000,
      price: "149 950",
      engine: 1500,
      fuel: "Petrol",
      transmission: "Manual",
      color: "Red",
      branch: "Centurion",
      pentaApproved: "no",
      stockNo: "PCU10052",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Centurion",
          address: [
            {
              addressLine: "3 Lenchen Ave, Centurion Central",
              town: "Centurion",
              city: "Pretoria",
              code: "0014",
            },
          ],
          cell: "084 639 8663",
          email: "centurion@now.co.za",
          directionsLink:
            "https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014",
        },
      ],
    },
    {
      image: carFourteen,
      type: "Hatchback",
      make: "Suzuki",
      model: "Celerio",
      variant: "1.0 GL MT",
      year: 2022,
      mileage: 49000,
      price: "169 900",
      engine: 1000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "WHITE",
      branch: "Centurion",
      pentaApproved: "yes",
      stockNo: "PCU10057",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Centurion",
          address: [
            {
              addressLine: "3 Lenchen Ave, Centurion Central",
              town: "Centurion",
              city: "Pretoria",
              code: "0014",
            },
          ],
          cell: "084 639 8663",
          email: "centurion@now.co.za",
          directionsLink:
            "https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014",
        },
      ],
    },
    {
      image: carFifteen,
      type: "Hatchback",
      make: "Suzuki",
      model: "S.presso",
      variant: "1.0 S-Edition MT MC",
      year: 2023,
      mileage: 6000,
      price: "173 900",
      engine: 1000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "Silver",
      branch: "Gezina",
      pentaApproved: "yes",
      stockNo: "UNG19",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Gezina",
          address: [
            {
              addressLine: "1073 SteveBiko Road",
              town: "Wonderboom South",
              city: "Pretoria",
              code: "0084",
            },
          ],
          cell: "083 488 5391",
          email: "gezina@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//1073+Steve+Biko+Road,+Wonderboom+South,+Pretoria,+Gauteng/@-25.7019383,28.1970394,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ebfd8ce70a712e7:0x9219098789acd039!2m2!1d28.1996143!2d-25.7019383?entry=ttu",
        },
      ],
    },
    {
      image: carFifteen,
      type: "Hatchback",
      make: "Suzuki",
      model: "S.presso",
      variant: "1.0 S-Edition MT MC",
      year: 2023,
      mileage: 11577,
      price: "173 900",
      engine: 1000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "Silver",
      branch: "Gezina",
      pentaApproved: "yes",
      stockNo: "UNG21",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Gezina",
          address: [
            {
              addressLine: "1073 SteveBiko Road",
              town: "Wonderboom South",
              city: "Pretoria",
              code: "0084",
            },
          ],
          cell: "083 488 5391",
          email: "gezina@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//1073+Steve+Biko+Road,+Wonderboom+South,+Pretoria,+Gauteng/@-25.7019383,28.1970394,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ebfd8ce70a712e7:0x9219098789acd039!2m2!1d28.1996143!2d-25.7019383?entry=ttu",
        },
      ],
    },
    {
      image: carSixteen,
      type: "Hatchback",
      make: "Suzuki",
      model: "Vitara",
      variant: "1.6 GLX ALLGRIP",
      year: 2024,
      mileage: 130,
      price: "388 900",
      engine: 130,
      fuel: "Petrol",
      transmission: "Manual",
      color: "TURQUOISE/BLACK",
      branch: "Brits",
      pentaApproved: "yes",
      stockNo: "UNB55",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Brits",
          address: [
            {
              addressLine: "73 Spoorweg Street",
              town: "Brits",
              city: "North West",
              code: "0250",
            },
          ],
          cell: "079 488 0244",
          email: "brits@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//73+Spoorweg+Street,+Brits/@-25.6426674,27.7341603,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ebe3028dfbda5e9:0x72ee6fe05457f1f8!2m2!1d27.7753599!2d-25.6426732?entry=ttu",
        },
      ],
    },
    {
      image: carSeventeen,
      type: "Hatchback",
      make: "Suzuki",
      model: "Vitara",
      variant: "1.6 GLX ALLGRIP",
      year: 2024,
      mileage: 413,
      price: "389 900",
      engine: 1600,
      fuel: "Petrol",
      transmission: "Automatic",
      color: "White",
      branch: "Mokopane",
      pentaApproved: "yes",
      stockNo: "UNM17",
      serviceHistory: "yes",
      branchInfo: [
        {
          branchName: "Mokopane",
          address: [
            {
              addressLine1: "102 Thabo Mbeki Dr",
              town: "Mokopane",
              city: "Limpopo",
              code: "0601",
            },
          ],
          cell: "079 053 6663",
          email: "mokopane@now.co.za",
          directionsLink:
            "https://www.google.com/maps/dir//102+Thabo+Mbeki+Dr,+Mokopane,+Limpopo,+0601/@-24.187992,28.9706074,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1ec0b53aaf551993:0x43890edcbdb36306!2m2!1d29.011807!2d-24.1879975?entry=ttu",
        },
      ],
    },
  ];

  const filteredCars = suggestionCars.filter(
    (suggestionCar) => suggestionCar.branchInfo[0].branchName === branchName && suggestionCar.stockNo !== car.stockNo
  );

  const viewVehicle = () => {
    navigate("view-vehicle", { state: { car } });
  }

  return (
    <div className="suggestion-cars-container">
      <h4>{branchName}</h4>
      <p>{addressLine}</p>
      <p>{town}</p>
      <p>{city}</p>
      <p>{code}</p>
      <a href={addressLink} target="_blank" rel="noopener noreferrer">
        Get Directions
      </a>

      <section className="more-listings">
        <h2>More Listings from this Branch</h2>
        <div className="row cars-grid">
          {filteredCars.slice(0, 3).map((car, index) => (
            <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 car mt-4 mb-4"
            key={index}
          >
            <div
              className="card vehicle-card"
              onClick={() => {
                viewVehicle(car);
                window.scrollTo(0, 0);
              }}
            >
              {car.pentaApproved === "yes" && (
                <img
                  src={approvedBadge}
                  alt={car.make}
                  className="penta-approved-badge"
                />
              )}
              <img
                src={car.image}
                alt={car.make}
                className="car-image"
              />
              <div className="vehicle-details">
                <div style={{ color: "#1223594" }}>
                  <h5 className="car-title">
                    {car.make} - {car.model}
                  </h5>
                  <div className="row car-details">
                    <div className="col-4 mileage p-0">
                      <div>
                        <ion-icon
                          name="speedometer-outline"
                          role="img"
                          className="md hydrated"
                          aria-label="speedometer outline"
                        ></ion-icon>
                      </div>
                      {car.mileage}
                    </div>
                    <div className="col-4 transmission p-0">
                      <div>
                        <ion-icon
                          name="car-outline"
                          role="img"
                          className="md hydrated"
                          aria-label="car outline"
                        ></ion-icon>
                      </div>
                      {car.transmission}
                    </div>
                    <div className="col-4 year p-0">
                      <div>
                        <ion-icon
                          name="calendar-outline"
                          role="img"
                          className="md hydrated"
                          aria-label="calendar outline"
                        ></ion-icon>
                      </div>
                      {car.year}
                    </div>
                  </div>
                  <div className="price">
                    <strong>R {car.price}</strong>
                  </div>
                </div>
                <button
                  onClick={() => viewVehicle(car)}
                  className="view-details-button"
                >
                  View Details
                </button>
                <div className="branch">{car.branch}</div>
              </div>
            </div>
          </div>
          ))}
        </div>
        {filteredCars.length > 3 && (
          <Link to={`/branch-listings/${branchName}`}>
            <button className="btn btn-secondary">
              View All Listings from this Branch
            </button>
          </Link>
        )}
      </section>
    </div>
  );
};

export default SuggestionCars;

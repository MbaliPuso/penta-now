import React, { useState, useEffect, useMemo } from "react";
import "../styles/AllCars.css";
import { useNavigate } from "react-router-dom";
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
import "bootstrap-icons/font/bootstrap-icons.css";

const AllCars = () => {
  // Cars data
  const cars = useMemo(
    () => [
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
                code: "0081"
              },
            ],
            cell: "083 488 5391",
            email: "lynwood@now.co.za",
            directionsLink: "https://www.google.com/maps/dir//3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014/@-25.8605149,28.1052648,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1e9565cd61559953:0x928135b560fffa57!2m2!1d28.1876663!2d-25.8605382?entry=ttu"
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
                code: "0014"
              },
            ],
            cell: "084 639 8663",
            email: "centurion@now.co.za",
            directionsLink: "https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014"
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
    ],
    []
  );

  const navigate = useNavigate();
  const [makeFilter, setMakeFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [mileageFilter, setMileageFilter] = useState("");
  const [branchFilter, setBranchFilter] = useState("");
  const [fuelFilter, setFuelFilter] = useState("");
  const [transmissionFilter, setTransmissionFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [sortCriteria, setSortCriteria] = useState("");
  // state to manage paging
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // calculate total pages
  const totalPages = Math.ceil(cars.length / itemsPerPage);

  // Get current items based on pagination
  const currentItems = filteredCars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const viewVehicle = (car) => {
    navigate("/view-vehicle", { state: { car } });
  };

  useEffect(() => {
    // Check the viewport width then sets grid as view mode
    if (window.innerWidth < 576) {
      setViewMode("grid");
    }
  }, []);

  useEffect(() => {
    // Filter cars based on selected filters
    let filtered = cars.filter((car) => {
      return (
        (!makeFilter || car.make === makeFilter) &&
        (!modelFilter || car.model === modelFilter) &&
        (!mileageFilter || car.mileage <= parseInt(mileageFilter, 10)) &&
        (!branchFilter || car.branch === branchFilter) &&
        (!fuelFilter || car.fuel === fuelFilter) &&
        (!transmissionFilter || car.transmission === transmissionFilter) &&
        (!minPrice || car.price >= parseInt(minPrice, 10)) &&
        (!maxPrice || car.price <= parseInt(maxPrice, 10)) &&
        (!minYear || car.year >= parseInt(minYear, 10)) &&
        (!maxYear || car.year <= parseInt(maxYear, 10))
      );
    });

    if (sortCriteria) {
      filtered = filtered.sort((a, b) => {
        if (sortCriteria === "year") {
          return b.year - a.year;
        } else if (sortCriteria === "lowestPrice") {
          return (
            parseInt(a.price.replace(/ /g, "")) -
            parseInt(b.price.replace(/ /g, ""))
          );
        } else if (sortCriteria === "highestPrice") {
          return (
            parseInt(b.price.replace(/ /g, "")) -
            parseInt(a.price.replace(/ /g, ""))
          );
        } else if (sortCriteria === "lowestMileage") {
          return a.mileage - b.mileage;
        } else if (sortCriteria === "highestMileage") {
          return b.mileage - a.mileage;
        }
        return 0;
      });
    }

    setFilteredCars(filtered);
  }, [
    cars,
    makeFilter,
    modelFilter,
    mileageFilter,
    branchFilter,
    fuelFilter,
    transmissionFilter,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
    sortCriteria,
  ]);

  return (
    <>
      <div className="section" style={{ marginTop: 120 }}>
        <div className="all-cars-intro text-center">
          <div className="small-home-heading">Browse for used vehicles</div>
          <h2 className="featured-vehicles-heading">
            Featured Vehicles to Buy From
          </h2>
        </div>
        <button
          className="d-md-none d-block m-auto"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        <div className={`container ${showFilters ? "d-block" : "d-none d-md-block"}`}>
          <div className="row justify-content-center">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10">
              <form className="trip-form">
                <div className="row align-items-center">
                  <div className="mb-md-0 col-md-3 select-options">
                    <select
                      id="makeFilter"
                      data-filter="make"
                      className="custom-select filter"
                      value={makeFilter}
                      onChange={(e) => setMakeFilter(e.target.value)}
                    >
                      <option value="">Make</option>
                      <option>BMW</option>
                      <option>Chery</option>
                      <option>Chevrolet</option>
                      <option>Datsun</option>
                      <option>Ford</option>
                      <option>Haval</option>
                      <option>Honda</option>
                      <option>Hyundai</option>
                      <option>Isuzu</option>
                      <option>Kia</option>
                      <option>Mahindra</option>
                      <option>Mercedes Benz</option>
                      <option>Mitsubishi</option>
                      <option>Nissan</option>
                      <option>Omoda</option>
                      <option>Renault</option>
                      <option>Suzuki</option>
                      <option>Toyota</option>
                      <option>Volkswagen</option>
                    </select>
                  </div>
                  <div className="col-md-3 select-options">
                    <select
                      id="modelFilter"
                      data-filter="model"
                      className="custom-select filter"
                      value={modelFilter}
                      onChange={(e) => setModelFilter(e.target.value)}
                      disabled={!makeFilter}
                    >
                      <option value="">Model</option>

                      {cars
                        .filter((car) => car.make === makeFilter)
                        .map((car, index) => (
                          <option key={index} value={car.model}>
                            {car.model}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="col-md-3 select-options">
                    <select
                      id="mileageFilter"
                      data-filter="mileage"
                      className="custom-select filter"
                      value={mileageFilter}
                      onChange={(e) => setMileageFilter(e.target.value)}
                    >
                      <option value="">Mileage</option>
                      <option value="10000">&lt;10000 KM</option>
                      <option value="50000">&lt;50000 KM</option>
                      <option value="150000">&lt;150000 KM</option>
                      <option value="200000">200000 KM</option>
                    </select>
                  </div>
                  <div className="col-md-3 select-options">
                    <select
                      id="branchFilter"
                      className="custom-select filter"
                      value={branchFilter}
                      onChange={(e) => setBranchFilter(e.target.value)}
                    >
                      <option value="">All Branches</option>
                      <option value="Centurion">Centurion</option>
                      <option value="Lynnwood">Lynnwood</option>
                      <option value="Gezina">Gezina</option>
                      <option value="Klerksdorp">Klerksdorp</option>
                      <option value="Brits">Brits</option>
                      <option value="Mokopane">Mokopane</option>
                    </select>
                  </div>
                </div>
                <div className="row align-items-center mt-4">
                  <div className="col-md-3 select-options">
                    <select
                      id="fuelFilter"
                      data-filter="fuel"
                      className="custom-select filter"
                      value={fuelFilter}
                      onChange={(e) => setFuelFilter(e.target.value)}
                    >
                      <option value="">Fuel Type</option>
                      <option>Petrol</option>
                      <option>Diesel</option>
                    </select>
                  </div>
                  <div className="col-md-3 select-options">
                    <select
                      id="transmissionFilter"
                      data-filter="transmission"
                      className="custom-select filter"
                      value={transmissionFilter}
                      onChange={(e) => setTransmissionFilter(e.target.value)}
                    >
                      <option value="">Transmission</option>
                      <option>Manual</option>
                      <option>Automatic</option>
                      <option>CVT</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6 left-input">
                        <div className="exchange-group small">
                          <div className="input-col">
                            <input
                              type="number"
                              className="custom-select filter"
                              id="minPrice"
                              placeholder="Min Price"
                              value={minPrice}
                              onChange={(e) => setMinPrice(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6 right-input">
                        <div className="exchange-group small">
                          <div className="input-col">
                            <input
                              type="number"
                              className="custom-select filter"
                              id="maxPrice"
                              placeholder="Max Price"
                              value={maxPrice}
                              onChange={(e) => setMaxPrice(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6 left-input">
                        <div className="exchange-group small">
                          <div className="input-col">
                            <input
                              type="number"
                              className="custom-select filter"
                              id="minYear"
                              placeholder="Min Year"
                              value={minYear}
                              onChange={(e) => setMinYear(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6 right-input">
                        <div className="exchange-group small">
                          <div className="input-col">
                            <input
                              type="number"
                              className="custom-select filter"
                              id="maxYear"
                              placeholder="Max Year"
                              value={maxYear}
                              onChange={(e) => setMaxYear(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* listed cars */}
        <div className="container mt-5">
          {/* sort container */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-md-block m-auto d-none">
              <button
                className={`view-mode-button ${
                  viewMode === "grid" ? "active" : ""
                }`}
                onClick={() => setViewMode("grid")}
              >
                <span className="mode-icon">
                  <i className="bi bi-grid"></i>
                </span>{" "}
                <span className="view-text">Grid View</span>
              </button>
              <button
                className={`view-mode-button ${
                  viewMode === "list" ? "active" : ""
                }`}
                onClick={() => setViewMode("list")}
              >
                <span className="mode-icon">
                  <i className="bi bi-list"></i>
                </span>{" "}
                <span className="view-text">List View</span>
              </button>
            </div>
            <div className="col-sm-12 col-md-auto sort-container d-flex align-items-center">
              <span className="view-text" style={{ paddingRight: "20px" }}>
                Sort By:
              </span>
              <select
                value={sortCriteria}
                onChange={(e) => setSortCriteria(e.target.value)}
                className="sort-input"
              >
                <option value="year">Year : Newest</option>
                <option value="lowestPrice">Price : Lowest</option>
                <option value="highestPrice">Price : Highest</option>
                <option value="lowestMileage">Mileage : Lowest</option>
                <option value="highestMileage">Mileage : Highest</option>
              </select>
            </div>
          </div>
          {/* sort container end */}
          {/* view mode change */}
          <div className={`car-list ${viewMode}`}>
            {viewMode === "grid" ? (
              // grid view
              <div className="row justify-content-center">
                {currentItems.map((car, index) => (
                  <div
                    className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 car mt-4 mb-4"
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
            ) : (
              // list view
              <div className="row justify-content-center">
                {currentItems.map((car, index) => (
                  <div key={index} className="col-12">
                    <div className="card border list-car-item">
                      <div className="row mb-4">
                        <div className="col-md-3">
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
                            className="img-fluid car-list-image"
                          />
                        </div>
                        <div className="col-md-6">
                          <h5 className="list-car-title">
                            {car.make} {car.model}
                          </h5>
                          <div className="row align-items-center">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 list-mileage">
                              <span>
                                <ion-icon
                                  name="speedometer-outline"
                                  role="img"
                                  className="md hydrated"
                                  aria-label="speedometer outline"
                                ></ion-icon>{" "}
                              </span>
                              {car.mileage}
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 list-transmission">
                              <span>
                                <ion-icon
                                  name="car-outline"
                                  role="img"
                                  className="md hydrated"
                                  aria-label="car outline"
                                ></ion-icon>{" "}
                              </span>
                              {car.transmission}
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 list-year">
                              <span>
                                <ion-icon
                                  name="calendar-outline"
                                  role="img"
                                  className="md hydrated"
                                  aria-label="calendar outline"
                                ></ion-icon>{" "}
                              </span>
                              {car.year}
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 list-location">
                              <span>
                                <ion-icon
                                  name="location-outline"
                                  role="img"
                                  className="md hydrated"
                                  aria-label="location outline"
                                ></ion-icon>{" "}
                              </span>
                              {car.branch}
                            </div>
                          </div>
                          <button
                            className="view-list-button mt-2"
                            onClick={() => {
                              viewVehicle(car);
                              window.scrollTo(0, 0);
                            }}
                          >
                            View Details
                          </button>
                        </div>
                        <div className="col-md-3 car-price">
                          <div className="align-items-end list-price text-center">
                            <strong>R {car.price}</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredCars.length === 0 && (
                  <div className="col-12">
                    <p className="text-center">No cars match your filters</p>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* view mode change end */}
        </div>
        {/* pagination */}
        <div className="d-flex justify-content-center pagination">
          <button
            onClick={() => {
              setCurrentPage((prev) => Math.max(prev - 1, 1));
              window.scrollTo(0, 0);
            }}
            disabled={currentPage === 1}
            className="pagination-control"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <span>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => {
                  setCurrentPage(number);
                  window.scrollTo(0, 0);
                }}
                className={`pagination-numbers ${
                  number === currentPage ? "active" : ""
                }`}
              >
                {number}
              </button>
            ))}
          </span>
          <button
            onClick={() => {
              setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              window.scrollTo(0, 0);
            }}
            disabled={currentPage === totalPages}
            className="pagination-control"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        {/* pagination end */}
      </div>
    </>
  );
};

export default AllCars;

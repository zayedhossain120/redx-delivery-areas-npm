# RedX Delivery Areas - Bangladesh Delivery Locations API

`redx-delivery-areas` is a NPM package that provides a comprehensive list of delivery areas across Bangladesh, categorized by district names. This package is ideal for e-commerce businesses, logistics companies, and developers who need structured location data, including area names, postcodes, and zone IDs.

## Features

- 🚀 **Get all delivery areas** across Bangladesh.
- 🔍 **Filter areas by district name** for precise location-based data.
- 📌 **Retrieve area details**, including postcodes, zone IDs, and divisions.
- 🌍 **Get a list of all districts in Bangladesh** with their respective divisions.
- 📦 **Ideal for e-commerce, logistics, and location-based services.**

## Installation

To install the package, run the following command:

```bash
npm install redx-delivery-areas
```

## Usage

### 🔹 Get Areas by District Name

This method returns an array of areas for a given district name.

```typescript
import { getAreasByDistrict } from "redx-delivery-areas";

const dhakaAreas = getAreasByDistrict("Dhaka");
console.log(dhakaAreas);
```

#### Example Response

```json
[
  {
    "id": 1,
    "name": "Salimullah Road(Mohammadpur)",
    "post_code": 1207,
    "district_name": "Dhaka",
    "division_name": "Dhaka",
    "zone_id": 1
  },
  {
    "id": 2,
    "name": "Dhanmondi - Road 3",
    "post_code": 1209,
    "district_name": "Dhaka",
    "division_name": "Dhaka",
    "zone_id": 1
  }
]
```

### 🔹 Get Area by Area Name

This method returns a specific area based on its name.

```typescript
import { getAreaByName } from "redx-delivery-areas";

const area = getAreaByName("Kabir Hat (Noakhali)");
console.log(area);
```

#### Example Response

```json
{
  "id": 2,
  "name": "Kabir Hat (Noakhali)",
  "post_code": 3811,
  "district_name": "Noakhali",
  "division_name": "Noakhali",
  "zone_id": 1
}
```

### 🔹 Get All Districts

This method returns a list of all districts in Bangladesh with their divisions.

```typescript
import { getAllDistricts } from "redx-delivery-areas";

const districts = getAllDistricts();
console.log(districts);
```

#### Example Response

```json
[
  { "id": 1, "name": "Bagerhat", "division": "Khulna" },
  { "id": 2, "name": "Bandarban", "division": "Chittagong" },
  { "id": 3, "name": "Barguna", "division": "Barisal" },
  { "id": 4, "name": "Barisal", "division": "Barisal" },
  { "id": 5, "name": "Bhola", "division": "Barisal" },
  { "id": 6, "name": "Bogra", "division": "Rajshahi" },
  { "id": 7, "name": "Brahmanbaria", "division": "Chittagong" },
  { "id": 8, "name": "Chandpur", "division": "Chittagong" },
  { "id": 9, "name": "Chapai Nawabganj", "division": "Rajshahi" },
  { "id": 10, "name": "Chattogram", "division": "Chittagong" },
  { "id": 11, "name": "Chuadanga", "division": "Khulna" },
  { "id": 12, "name": "Comilla", "division": "Chittagong" },
  { "id": 13, "name": "Cox's Bazar", "division": "Chittagong" },
  { "id": 14, "name": "Dhaka", "division": "Dhaka" },
  { "id": 15, "name": "Dinajpur", "division": "Rangpur" },
  { "id": 16, "name": "Faridpur", "division": "Dhaka" },
  { "id": 17, "name": "Feni", "division": "Chittagong" },
  { "id": 18, "name": "Gaibandha", "division": "Rangpur" },
  { "id": 19, "name": "Gazipur", "division": "Dhaka" },
  { "id": 20, "name": "Gopalganj", "division": "Dhaka" }
]
```

## 📜 License

This package is licensed under the **MIT License**.

## 🔗 Keywords & Tags

`Bangladesh Delivery Areas`, `District-wise Areas`, `RedX API`, `Courier Service Data`, `Bangladesh Postcodes`, `Logistics API`, `E-commerce Delivery`, `NPM Package`, `Delivery Zones`, `Dhaka Delivery Areas`, `Bangladesh Districts`

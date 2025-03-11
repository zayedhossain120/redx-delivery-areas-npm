# RedX Delivery Areas

`redx-delivery-areas` is an NPM package that provides a list of delivery areas categorized by district names. You can easily retrieve area details, including names, postcodes, and zone IDs, using this package.

## Features

- Get all delivery areas.
- Filter areas by district name.
- Retrieve area details, including postcodes and zones.

## Installation

To install the package, run the following command:

```bash
npm install redx-delivery-areas
```

## Usage

### Get Areas by District Name

This method returns an array of areas for a given district name.

```typescript
import { getAreasByDistrict } from "redx-delivery-areas";

const dhakaAreas = getAreasByDistrict("Dhaka");
console.log(dhakaAreas);
```

### Example Response

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

## License

This package is licensed under the MIT License.

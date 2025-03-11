import data from "./data/areas.json";

interface Area {
  id: number;
  name: string;
  post_code: number | null;
  district_name: string;
  division_name: string;
  zone_id: number;
}

interface Data {
  areas: Area[];
}

// get areas by district name

function getAreasByDistrict(districtName: string): Area[] {
  return data.areas.filter((area: Area) => area.district_name === districtName);
}

// Example usage
console.log(getAreasByDistrict("Dhaka"));

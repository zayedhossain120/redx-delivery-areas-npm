import data from "./data/areas.json";
import district from "./data/district.json";

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

interface District {
  id: number;
  name: string;
  division: string;
}

// get areas by district name
function getAreasByDistrict(districtName: string): Area[] {
  return data.areas.filter((area: Area) => area.district_name === districtName);
}

//get all district
function getAllDistricts(): District[] {
  return district;
}

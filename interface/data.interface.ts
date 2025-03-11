export interface Area {
  id: number;
  name: string;
  post_code: number;
  district_name: string;
  division_name: string;
  zone_id: number;
}

export interface Data {
  areas: Area[];
}

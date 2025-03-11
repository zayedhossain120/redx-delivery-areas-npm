interface Area {
    id: number;
    name: string;
    post_code: number | null;
    district_name: string;
    division_name: string;
    zone_id: number;
}
interface District {
    id: number;
    name: string;
    division: string;
}
export declare function getAreasByDistrict(districtName: string): Area[];
export declare function getAllDistricts(): District[];
export {};

/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();

const customMap = new CustomMap(document.getElementById('map'));

customMap.addMarker(user);
customMap.addMarker(company);

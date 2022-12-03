import { Education } from "./education";
import { EmployeeHistory } from "./employeeHistory";

export interface Resume {
  id?: string;
  name: string;
  email: string;
  phone: string;
  neighborhood: string;
  city: string;
  state: string;
  profileDescription?: string;
  employeeHistory?: EmployeeHistory[];
  education?: Education[];
  skills?: string[]; 
  languages?: string[];
}
export interface Person {
  index?: number;
  guid: string;
  age: number;
  firstName: string;
  lastName: string;
  company: string;
  gender: string;
  title: string;
  email: string;
  other?: string;
  phone: string[];
  address: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: number;
}

export interface ExpandablePerson extends Person {
  expanded?: boolean;
  editing?: boolean;
}

export interface Service{
  id:number;
  fullName:string;
  area:number;
  cost:number;
  maxPeople:number;
  idRentType:number;
  standardRoom?:string;
  other?:string;
  poolArea?:number;
  numberOfFloors?:number;
  attachService?:string;
}

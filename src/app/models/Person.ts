export interface Person {
  name: string;
  height: string;
  vehicles: Array<Vehicle>;
}

export interface Vehicle {
  crew: string;
  passengers: number;
}

// I think this is ideal solution but adding interface
// `export class PersonClass implements Person {`
// throws incompatible types exception!!!
// since swapi returns strange data types we cannot do that
// ideally talk to backend programmer and make him serve you correct data type
export class PersonClass {
  name: string;
  height: number;
  vehicles: Array<VehicleClass> = [];

  constructor(data?: any) {
    if (!data) {
      return;
    }

    this.name = data.name;
    this.height = data.height;
    this.vehicles = data.vehicles.map(v => new VehicleClass(v));
  }

  get nameAndHeight() {
    return `${this.name} is ${this.height} tall`;
  }
}

export class VehicleClass {
  name: string;
  crew: number;
  passengers: number;

  constructor(data?) {
    if (!data) {
      return;
    }

    this.name = data.name;
    this.crew = data.crew;
    this.passengers = data.passengers;
  }
}

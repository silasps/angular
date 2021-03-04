export interface Car {
  name?: string;
  motor?: Engine;
}
export interface EngineFca {
  hp: number;
  valves: number;
}
export interface Radiator {
  waterBased: boolean;
}
export interface Engine extends EngineFca {
  radiator: Radiator;
}

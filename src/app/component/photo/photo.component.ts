import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Car, Engine, Radiator} from '../../interfaces/car';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  public name: string;
  public age: number;
  public sentence: string;
  public result: number;
  constructor() {
  }

  ngOnInit(): void {
  }

  generateSentence(name: string, idade: number): string {
    return 'O nome dela é ' + name + ', e sua age é ' + idade;
  }

  generateTwoPlusAge(idade: number): number {
    const result = idade * 2;
    return result;
  }
  generateData(){
    let ferrari: Car = {} as Car;// {} Criando obj referenciando à car.ts
    ferrari.name = 'Ferrari V8';
    ferrari.motor = {} as Engine;
    ferrari.motor.hp = 1;
    ferrari.motor.valves = 10;
    ferrari.motor.radiator = {} as Radiator;
    ferrari.motor.radiator.waterBased = true;

    let ferrari2: Car = {} as Car;
    ferrari2.name = 'Palio';
    ferrari2.motor = {} as Engine;
    ferrari2.motor.hp = 1;
    ferrari2.motor.valves = 10;
    ferrari2.motor.radiator = {} as Radiator;
    ferrari2.motor.radiator.waterBased = true;
    const listaCarros: Car[] = [];//Array de carros
    listaCarros.push(ferrari);
    listaCarros.push(ferrari2);
    listaCarros.push(ferrari);
    console.log(listaCarros);
    console.log(this.name);
    console.log(this.age);
    if (this.name == 'Bela' && this.age == 22){
    this.sentence = this.generateSentence(this.name, this.age);
    this.result = this.generateTwoPlusAge(this.age);
    }
}
  setName(name: any) {
    this.name = name.target.value;
  }
  setAge(age: any) {
    this.age = age.target.value;
  }
  // Trabalhar com Arrays e criar objetos
  // Criar método para criar carros e um método para buscar carros
}

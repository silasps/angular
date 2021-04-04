import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Car, Engine, Radiator} from '../../interfaces/car';
import {Casa} from '../../interfaces/casa';
import {Membro} from '../../interfaces/Igreja/membro';
import {isBoolean} from 'util';

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
  public sumAge: number;
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
  // tslint:disable-next-line:typedef
  generateData() {
    // let ferrari: Car = new Car();// {} Criando obj referenciando à car.ts
    // ferrari.name = 'Ferrari V8';
    // ferrari.motor = {} as Engine;
    // ferrari.motor.hp = 1;
    // ferrari.motor.valves = 10;
    // ferrari.motor.radiator = {} as Radiator;
    // ferrari.motor.radiator.waterBased = true;
    //
    // let ferrari2: Car = {} as Car;
    // ferrari2.name = 'Palio';
    // ferrari2.motor = {} as Engine;
    // ferrari2.motor.hp = 1;
    // ferrari2.motor.valves = 10;
    // ferrari2.motor.radiator = {} as Radiator;
    // ferrari2.motor.radiator.waterBased = true;
    // const listaCarros: Car[] = [];//Array de carros
    // listaCarros.push(ferrari);
    // listaCarros.push(ferrari2);
    // listaCarros.push(ferrari);
    // console.log(listaCarros);
    // console.log(this.name);
    // console.log(this.age);
    // if (this.name == 'Bela' && this.age == 22){
    // this.sentence = this.generateSentence(this.name, this.age);
    // this.result = this.generateTwoPlusAge(this.age);
    // }
    // const casaAmalia = {} as Casa;
    //
    // casaAmalia.donoCasa = 'Murilo';
    // casaAmalia.donoCasa = 'Silas';
    // const casaMurilo = {} as Casa;
    // casaMurilo.donoCasa = 'Gelise';
    //
    // const functionaries: Membro[] = [{nome: 'Silas', idade: 31, dataNascimento: 1989}, {nome: 'Murilo', idade: 34, dataNascimento: 1980},
    //   {nome: 'Gerson', idade: 48, dataNascimento: 1974}, {nome: 'Priscila', idade: 29, dataNascimento: 1978},
    //   {nome: 'Maria', idade: 22, dataNascimento: 1988}, {nome: 'Kleber', idade: 21, dataNascimento: 1987}];
    // this.findAge('Gerson', functionaries);
    // this.findAge('Silas', functionaries);
    // this.findSumIdade(this.findDecade(functionaries));

    //
    // ******* Exercício 2: Escreva um programa que calcule o máximo, o mínimo, a soma e a média de um conjunto *****
    //
    const exemplosDeNumeros: number[] = [1, 50, 3, 18, 5, 4, 53, 0, 13];
    //this.sumAll(exemplosDeNumeros);
    this.average(this.sumAll(exemplosDeNumeros), exemplosDeNumeros);
    this.maximum(exemplosDeNumeros);
    this.minimum(exemplosDeNumeros);
    }
    sumAll(listaDeNumeros: number[]): number {
      let somaTotal = 0;
      listaDeNumeros.forEach(numero => {
      somaTotal = somaTotal + numero;
    });
      console.log('Soma: ' + somaTotal);
      return somaTotal;
    }
  // tslint:disable-next-line:typedef
    average(num: number, numArray: number[]) {
      let mediaSimples = 0;
      mediaSimples = num / numArray.length;
      console.log('Média: ' + mediaSimples.toFixed(2).replace('.', ','));
    }
//  tslint:disable-next-line:typedef
    maximum(listaDeNumeros: number[]) {
      let maximo = listaDeNumeros[0];
      listaDeNumeros.forEach(numero => {
        // tslint:disable-next-line:no-conditional-assignment
        if (maximo > numero) {
          maximo = maximo;
        }
        else {
          maximo = numero;
        }
        });
      console.log('Máximo: ' + maximo);
    }
  // tslint:disable-next-line:typedef
    minimum(listaDeNumeros: number[]) {
      let minimo = listaDeNumeros[0];
      listaDeNumeros.forEach(numero => {
        // tslint:disable-next-line:no-conditional-assignment
        if (minimo < numero) {
          minimo = minimo;
        } else {
          minimo = numero;
        }
      });
      console.log('Mínimo: ' + minimo);
    }
                                             // *******  Fim do Exercício 2 ********
    //
    //
    //           ******* Exercício 3: Elabore um programa que determine se um número (num 1) é múltiplo de outro (num 2) ou não. *****
    //
  //   const exemplosDeNumeros: number[] = [10, 20];
  //   this.multiplo(exemplosDeNumeros);
  //   }
  //   multiplo(listaDeNumeros: number[]) {
  //     let comparison: number;
  //
  //   }
  // }

  // tslint:disable-next-line:typedef
  // findAge(name: string, func: Membro[]) {
  //   func.forEach(trabalhador => {
  //     if (trabalhador.nome === name){
  //       console.log(trabalhador.idade);
  //     }
  //   });
  // }
  // findSumIdade(func: Membro[]) {
  //   let sumIdade = 0;
  //   func.forEach(trabalhador => {
  //     sumIdade = sumIdade + trabalhador.idade;
  //   });
  //   console.log(sumIdade);
  // }
  // // tslint:disable-next-line:typedef
  // findDecade(func: Membro[]): Membro[] {
  //   const lista: Membro[] = [];
  //   func.forEach(colaborador => {
  //     if (colaborador.dataNascimento <= 1989 && colaborador.dataNascimento >= 1980){
  //       lista.push(colaborador);
  //     }
  //   });
  //   console.log(lista);
  //   return lista;
  // }
  // // tslint:disable-next-line:typedef
  setName(name: any) {
    this.name = name.target.value;
  }
  // tslint:disable-next-line:typedef
  setAge(age: any) {
    this.age = age.target.value;
  }
  // Exercícios
  // 1 - Imprimir funcionários que nasceram na década de 80
  // 2 - Criar outro método que vai somar a idade de todos
}

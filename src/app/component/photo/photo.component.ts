import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

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
  //Trabalhar com Arrays e criar objetos
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  private name:string;
  private age:number;
  private sentence:string;
  private result:number;
  constructor() {
  }

  ngOnInit(): void {
  }

  generateSentence(name: string, idade: number): string {
    return 'O nome dela é ' + name + ', e sua age é ' + idade;
  }

  generateTwoPlusAge(idade: number): string {
    let result = idade * 2;
    return result;
  }
  generateData(){
    this.sentence = this.generateSentence(this.name, this.age);
    this.result = this.generateTwoPlusAge(this.age);
}
}

import { Component, OnInit } from '@angular/core';
import { nota } from './nota.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  salario: number;
  nota1: number;
  nota2: number;
  nota3: number;
  nota4: number;
  resultado: number = 50;

  notas1: Array<nota> = [];
  notas2: Array<nota> = [];
  notas3: Array<nota> = [];
  notas4: Array<nota> = [];

  constructor() { }

  ngOnInit(): void {
    //1ª AVALIAÇÃO
    let tmp: nota = { nota: "A", porcentagem: 35 };
    this.notas1.push(tmp);
    tmp = { nota: "B", porcentagem: 25 };
    this.notas1.push(tmp);
    tmp = { nota: "C", porcentagem: 18 };
    this.notas1.push(tmp);

    //2ª AVALIAÇÃO
    tmp = { nota: "A", porcentagem: 25 };
    this.notas2.push(tmp);
    tmp = { nota: "B", porcentagem: 14 };
    this.notas2.push(tmp);
    tmp = { nota: "C", porcentagem: 9 };
    this.notas2.push(tmp);

    //3ª AVALIAÇÃO
    tmp = { nota: "A", porcentagem: 5 };
    this.notas3.push(tmp);
    tmp = { nota: "B", porcentagem: 4 };
    this.notas3.push(tmp);
    tmp = { nota: "C", porcentagem: 2 };
    this.notas3.push(tmp);

    //4ª AVALIAÇÃO
    tmp = { nota: "A", porcentagem: 13 };
    this.notas4.push(tmp);
    tmp = { nota: "B", porcentagem: 12 };
    this.notas4.push(tmp);
    tmp = { nota: "C", porcentagem: 1 };
    this.notas4.push(tmp);

  }

  onChange() {

    if (this.salario) {
      this.resultado = this.salario;
    }

    if (this.nota1) {
      this.resultado += (this.resultado * this.nota1 * 0.01);
    }

    if (this.nota2) {
      this.resultado += (this.resultado * this.nota2 * 0.01);
    }

    if (this.nota3) {
      this.resultado += (this.resultado * this.nota3 * 0.01);
    }

    if (this.nota4) {
      this.resultado += (this.resultado * this.nota4 * 0.01);
    }

  }

}

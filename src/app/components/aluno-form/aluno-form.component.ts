import { Component, OnInit } from '@angular/core';
import {Aluno} from '../../aluno';
import { Router} from '@angular/router';
import { AlunoService } from '../../shared-service/aluno.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {
  private aluno:Aluno;
  
  constructor(private _alunoService:AlunoService, private _router:Router) { }

  ngOnInit() {
    this.aluno = this._alunoService.getter()
  }

  processForm(){
    if(this.aluno.matricula==undefined){
      this._alunoService.criarAluno(this.aluno).subscribe((aluno)=>{
        console.log(aluno);
        this._router.navigate(['/']);
      }, (error)=>{
        console.log(error);   
      });

    }else{
      this._alunoService.atualizarAluno(this.aluno).subscribe((aluno)=>{
        console.log(aluno);
        this._router.navigate(['/']);
      }, (error)=>{
        console.log(error);   
      });
    }
  }
}

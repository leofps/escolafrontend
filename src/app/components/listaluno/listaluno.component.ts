import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../shared-service/aluno.service';
import { Aluno } from '../../aluno';
import { Router} from '@angular/router';

@Component({
  selector: 'app-listaluno',
  templateUrl: './listaluno.component.html',
  styleUrls: ['./listaluno.component.css']
})
export class ListalunoComponent implements OnInit {
  private alunos:Aluno[];
  constructor(private _alunoService:AlunoService, private _router:Router) { }

  ngOnInit() {
    this._alunoService.getAlunos().subscribe((alunos)=>{
      console.log(alunos);
      this.alunos=alunos;
    },(error)=>{
      console.log(error);
    })
  }

  novoAluno(){
    let aluno = new Aluno();
    this._alunoService.setter(aluno);
    this._router.navigate(['/op']);
  }

  atualizarAluno(aluno){
    this._alunoService.setter(aluno);
    this._router.navigate(['/op']);
  }
}

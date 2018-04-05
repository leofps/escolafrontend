import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Aluno} from '../aluno';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AlunoService {
  private baseUrl:string="http://localhost:8080/api";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private aluno= new Aluno();
  constructor(private _http:Http) { }

  getAlunos(){

    return this._http.get(this.baseUrl+'/alunos',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  criarAluno(aluno:Aluno){

    return this._http.post(this.baseUrl+'/aluno',JSON.stringify(aluno), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  atualizarAluno(aluno:Aluno){

    return this._http.put(this.baseUrl+'/aluno',JSON.stringify(aluno), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  errorHandler(error:Response){
    return Observable.throw(error || "Erro de servidor");
  }

  setter(aluno:Aluno){
    this.aluno=aluno;
  }
  
  getter(){
    return this.aluno;
  }
}

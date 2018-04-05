import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ListalunoComponent } from './components/listaluno/listaluno.component';
import { AlunoFormComponent } from './components/aluno-form/aluno-form.component';
import { AlunoService } from './shared-service/aluno.service';


const appRoutes: Routes=[
  {path:'', component:ListalunoComponent}, 
  {path:'op', component:AlunoFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListalunoComponent,
    AlunoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

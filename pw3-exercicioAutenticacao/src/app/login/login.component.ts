import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  retorno:string = "";
  loginForm : FormGroup;
  show : boolean =false;


  userc:string = "JDM";
  passwordc:string = "champion"


  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      user : this.fb.control(""),
      password : this.fb.control("")
    });
  }


  Autenticar(){
    let user = this.loginForm.get('user')?.value;
    let password = this.loginForm.get('password')?.value;
    if (this.userc == user && this.passwordc == password){
      this.retorno = "Bem vindo " + this.userc
      this.show = true;

    }
    else{
      this.retorno = "Usuário ou Senha incorretos"
      this.show = true;
    }


  }
}

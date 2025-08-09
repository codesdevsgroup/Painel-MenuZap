import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      cpfOrEmail: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const { cpfOrEmail, password } = this.loginForm.value;

    if (cpfOrEmail === 'teste' && password === 'teste') {
      this.router.navigate(['/dashboard']);
      return;
    }

    // Adiciona a validação de email apenas se não for o usuário de teste
    this.loginForm.get('cpfOrEmail')?.setValidators([Validators.required, Validators.email]);
    this.loginForm.get('cpfOrEmail')?.updateValueAndValidity();

    if (this.loginForm.valid) {
      if (cpfOrEmail === 'teste@teste.com' && password === '123') {
        this.router.navigate(['/dashboard']);
      } else {
        // Lógica para credenciais inválidas (ex: exibir mensagem de erro)
        console.error('Credenciais inválidas');
      }
    }
  }
}

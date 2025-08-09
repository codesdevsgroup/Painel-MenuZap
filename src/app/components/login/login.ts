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
      cpfOrEmail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { cpfOrEmail, password } = this.loginForm.value;
      if (cpfOrEmail === 'teste@teste.com' && password === '123') {
        this.router.navigate(['/dashboard']);
      } else {
        // Lógica para credenciais inválidas (ex: exibir mensagem de erro)
        console.error('Credenciais inválidas');
      }
    }
  }
}

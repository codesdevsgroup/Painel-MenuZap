import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private notificationService: NotificationService
  ) {
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
        this.notificationService.success('Login realizado com sucesso!');
        this.router.navigate(['/dashboard']);
      } else {
        this.notificationService.error('Credenciais inválidas');
      }
    } else {
      this.notificationService.error('Por favor, preencha os campos corretamente.');
    }
  }
}

import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notyf: Notyf;

  constructor() {
    this.notyf = new Notyf({
      duration: 5000,
      position: {
        x: 'right',
        y: 'bottom',
      },
      types: [
        {
          type: 'success',
          backgroundColor: '#28a745',
          icon: {
            className: 'notyf__icon--success',
            tagName: 'i',
          }
        },
        {
          type: 'error',
          backgroundColor: '#dc3545',
          icon: {
            className: 'notyf__icon--error',
            tagName: 'i',
          }
        }
      ]
    });
  }

  success(message: string) {
    this.notyf.success(message);
  }

  error(message: string) {
    this.notyf.error(message);
  }
}

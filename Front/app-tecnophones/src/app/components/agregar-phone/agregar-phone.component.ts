import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregar-phone',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './agregar-phone.component.html',
  styleUrl: './agregar-phone.component.css'
})
export class AgregarPhoneComponent {
  phoneForm: FormGroup;

  constructor (private fb: FormBuilder) {
    this.phoneForm = this.fb.group({
      modelo: ['', Validators.required],
      estado: ['', Validators.required],
      bateria: ['', Validators.required],
      capacidad: ['', Validators.required],
      observaciones: ['', Validators.required],
      valor: ['', Validators.required],
    })
  }

}

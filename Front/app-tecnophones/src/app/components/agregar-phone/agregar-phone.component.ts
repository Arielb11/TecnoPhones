import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Phone } from '../../models/phone';
import { PhoneService } from '../../services/phone.service';

@Component({
  selector: 'app-agregar-phone',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './agregar-phone.component.html',
  styleUrl: './agregar-phone.component.css'
})
export class AgregarPhoneComponent implements OnInit{
  phoneForm: FormGroup;
  titulo = 'Agregar';
  id: string | null;

  constructor (private fb: FormBuilder, private router: Router, private _phoneService: PhoneService, private aRouter: ActivatedRoute) {
    this.phoneForm = this.fb.group({
      modelo: ['', Validators.required],
      estado: ['', Validators.required],
      bateria: ['', Validators.required],
      capacidad: ['', Validators.required],
      observaciones: ['', Validators.required],
      valor: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void{
    this.esEditar();
  }

  agregarPhone(){
    const PHONE:Phone = {
      modelo: this.phoneForm.get('modelo')?.value,
      estado: this.phoneForm.get('estado')?.value,
      bateria: this.phoneForm.get('bateria')?.value,
      capacidad: this.phoneForm.get('capacidad')?.value,
      observaciones: this.phoneForm.get('observaciones')?.value,
      valor: this.phoneForm.get('valor')?.value
    }

    if (this.id !== null){
      this._phoneService.editarPhone(this.id, PHONE).subscribe(data => {
        console.log("Se modifico el phone correctamente");
        this.router.navigate(['/phone']);
      }, error => {
        console.log(error);
        this.phoneForm.reset();
      })
    } else {
      this._phoneService.guardarPhone(PHONE).subscribe(data => {
        console.log("Se agrego el phone correctamente");
        this.router.navigate(['/phone']);
      }, error => {
        console.log(error);
        this.phoneForm.reset();
      })
    }
    
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar';
      this._phoneService.obtenerPhone(this.id).subscribe(data => {
        this.phoneForm.setValue({
          modelo: data.modelo,
          estado: data.estado,
          bateria: data.bateria,
          capacidad: data.capacidad,
          observaciones: data.observaciones,
          valor: data.valor,
        })
      })
    }
  }

}

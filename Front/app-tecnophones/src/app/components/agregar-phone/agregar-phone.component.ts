import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Phone } from '../../models/phone';
import { PhoneService } from '../../services/phone.service';
import Swal from 'sweetalert2';

//Esto es para la imagen (para el evento)
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
} 

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
  file!: File;
  photoSelected!: string | ArrayBuffer | null; //Archivo para mostrar la imagen subida
  mostrarSelect: boolean = true;

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
    if (this.id !== null){
      this._phoneService.editarPhone(this.id, this.phoneForm.get('modelo')?.value, this.phoneForm.get('estado')?.value, 
          this.phoneForm.get('bateria')?.value, this.phoneForm.get('capacidad')?.value, 
          this.phoneForm.get('observaciones')?.value, this.phoneForm.get('valor')?.value, this.file)
          .subscribe(data => {
            Swal.fire({
              title: "iPhone editado correctamente",
              icon: "success"
            });
            this.router.navigate(['/phone']);
          }, error => {
            console.log(error);
            this.phoneForm.reset();
          })
    } else {
      this._phoneService.guardarPhone(this.phoneForm.get('modelo')?.value, this.phoneForm.get('estado')?.value, 
          this.phoneForm.get('bateria')?.value, this.phoneForm.get('capacidad')?.value, 
          this.phoneForm.get('observaciones')?.value, this.phoneForm.get('valor')?.value, this.file)
          .subscribe(data => {
            Swal.fire({
              title: "iPhone agregado correctamente",
              icon: "success"
            });
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
      this.mostrarSelect = false;
      this._phoneService.obtenerPhone(this.id).subscribe(data => {
        this.phoneForm.setValue({
          modelo: data.modelo,
          estado: data.estado,
          bateria: data.bateria,
          capacidad: data.capacidad,
          observaciones: data.observaciones,
          valor: data.valor,
          imagePath: this.file,
        })
      })
    }
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    // El if es para corroborar si se subio una imagen
    if (event.target.files && event.target.files[0]) {
      //Llena la propiedad file cuando existe un archivo
      this.file = <File>event.target.files[0]; //Sube el primer archivo que exista

      //Esto es para mostrar en pantalla la foto subida
      const reader = new FileReader();
      reader.onload = e => {
        this.photoSelected = 'assets/img/icon-imagen.png';
      }
      reader.readAsDataURL(this.file);
    }
  }

}

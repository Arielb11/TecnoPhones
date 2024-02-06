import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AccesorioService } from '../../services/accesorio.service';
import Swal from 'sweetalert2';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
} 

@Component({
  selector: 'app-agregar-accesorio',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './agregar-accesorio.component.html',
  styleUrl: './agregar-accesorio.component.css'
})
export class AgregarAccesorioComponent implements OnInit{
  accesorioForm: FormGroup;
  id: string | null;
  file!: File;
  titulo = 'Agregar';
  photoSelected!: string | ArrayBuffer | null;

  constructor (private fb: FormBuilder, private router: Router, private _accesorioService: AccesorioService, private aRouter: ActivatedRoute) {
    this.accesorioForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarAccesorio(){
    if (this.id !== null){
      this._accesorioService.editarAccesorio(this.id, this.accesorioForm.get('nombre')?.value, this.accesorioForm.get('precio')?.value, this.file)
        .subscribe(data => {
          Swal.fire({
            title: "Accesorio editado correctamente",
            icon: "success"
          });
        this.router.navigate(['/accesorio']);
      }, error => {
        console.log(error);
        this.accesorioForm.reset();
      })
    } else {
      this._accesorioService.guardarAccesorio(this.accesorioForm.get('nombre')?.value, this.accesorioForm.get('precio')?.value, this.file)
      .subscribe(data => {
        Swal.fire({
          title: "Accesorio agregado correctamente",
          icon: "success"
        });
      this.router.navigate(['/accesorio']);
      }, error => {
      console.log(error);
      this.accesorioForm.reset();
      })
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar';
      this._accesorioService.obtenerAccesorio(this.id).subscribe(data => {
        this.accesorioForm.setValue({
          nombre: data.nombre,
          precio: data.precio,
          imagePath: this.file,
        })
      })
    }
  }

  onPhotoSelected(event: Event): void {
    // Realiza una aserción de tipo para tratar event.target como HTMLInputElement
    const input = event.target as HTMLInputElement;
  
    // Ahora verifica si input y files existen
    if (input && input.files && input.files[0]) {
      this.file = input.files[0]; // Sube el primer archivo que exista
  
      // Esto es para mostrar en pantalla la foto subida
      const reader = new FileReader();
      reader.onload = e => {
        this.photoSelected = reader.result;
      }
      reader.readAsDataURL(this.file);
    }
  }
  

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Accesorio } from '../../models/accesorio';
import { AccesorioService } from '../../services/accesorio.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-detalles-macbooks',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './detalles-macbooks.component.html',
  styleUrl: './detalles-macbooks.component.css'
})
export class DetallesMacbooksComponent {
  id: string;
  accesorio: Accesorio | undefined;
  selectedImage: string | null = null; // Inicializado como null

  constructor(private aRouter: ActivatedRoute, private _accesorioService: AccesorioService) {
    const idParam = this.aRouter.snapshot.paramMap.get('id');
    if (idParam === null) {
      throw new Error('ID de accesorio no proporcionado en la ruta');
    } else {
      this.id = idParam;
    }
  }

  ngOnInit(): void {
    this._accesorioService.obtenerAccesorio(this.id).subscribe(
      data => {
        this.accesorio = data;
        // Establece la imagen principal como la imagen seleccionada por defecto
        this.selectedImage = `http://localhost:3000/${data.imagenPrincipal}`;
      },
      error => {
        console.log(error);
      }
    );
  }
  
  selectImage(imagePath: string | File): void {
    this.selectedImage = `http://localhost:3000${imagePath}`;
  }
}

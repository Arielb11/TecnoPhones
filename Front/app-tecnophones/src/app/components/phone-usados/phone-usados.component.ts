import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';
import { Phone } from '../../models/phone';
import { error } from 'console';
import { CommonModule } from '@angular/common';

declare var $: any; // Importa jQuery para utilizar Bootstrap

@Component({
  selector: 'app-phone-usados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phone-usados.component.html',
  styleUrl: './phone-usados.component.css'
})
export class PhoneUsadosComponent implements OnInit {
  listaCelulares: Phone[] = [];
  ngOnInit(): void {
    this.obtenerPhones();
    // Inicia el carrusel y la reproducción automática después de que los datos se carguen
    this.initCarousel();
  }

  constructor(private _phoneService: PhoneService) { }

  obtenerPhones() {
    this._phoneService.getPhones().subscribe(
      data => {
        this.listaCelulares = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  initCarousel() {
    $(document).ready(() => {
      // Inicializa el carrusel
      $('.carousel').carousel();

      // Configura un intervalo para cambiar las imágenes cada 3 segundos
      setInterval(() => {
        this.nextSlide();
      }, 4500);
    });
  }

  nextSlide() {
    // Cambia al siguiente slide del carrusel
    $('.carousel').carousel('next');
  }
}


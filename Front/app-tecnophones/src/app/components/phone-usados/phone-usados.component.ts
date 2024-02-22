import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PhoneService } from '../../services/phone.service';
import { Phone } from '../../models/phone';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';


@Component({
    selector: 'app-phone-usados',
    standalone: true,
    templateUrl: './phone-usados.component.html',
    styleUrl: './phone-usados.component.css',
    imports: [CommonModule, FooterComponent]
})
export class PhoneUsadosComponent implements OnInit {
  @ViewChild('carousel') carousel: ElementRef | undefined; // Marcar como opcional // Referencia al elemento del carrusel

  listaCelulares: Phone[] = [];

  ngOnInit(): void {
    this.obtenerPhones();
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
}



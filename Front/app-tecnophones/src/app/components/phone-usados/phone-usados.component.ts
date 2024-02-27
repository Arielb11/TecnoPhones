import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';
import { Phone } from '../../models/phone';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-phone-usados',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './phone-usados.component.html',
  styleUrl: './phone-usados.component.css'
})
export class PhoneUsadosComponent implements OnInit{
  listaCelulares: Phone[] = [];
  search: String | null = null;
  suscripcion:Subscription | undefined;

  ngOnInit(): void {
    if (this.search == null) {
      this.obtenerPhones();
      this.suscripcion = this._phoneService.refresh$.subscribe(()=> {
        this.obtenerPhones();
      })
    } else {
      this.buscar();
    }
    
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

  buscar () {
    if (this.search === "") {
      this.obtenerPhones();
    } else {
      this._phoneService.buscar(this.search).subscribe(
        data => {
          this.listaCelulares = data;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}



import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';
import { Phone } from '../../models/phone';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-phone-nuevos',
  standalone: true,
  imports: [CommonModule, RouterLink,FooterComponent],
  templateUrl: './phone-nuevos.component.html',
  styleUrl: './phone-nuevos.component.css'
})
export class PhoneNuevosComponent implements OnInit{
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
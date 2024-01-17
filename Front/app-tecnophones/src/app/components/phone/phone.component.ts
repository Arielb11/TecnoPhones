import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Phone } from '../../models/phone';
import { PhoneService } from '../../services/phone.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent implements OnInit{
  listPhones: Phone[] = [];

  constructor(private _phoneService: PhoneService) {}

  ngOnInit(): void{
    this.obtenerPhones();
  }

  obtenerPhones(){
    this._phoneService.getPhones().subscribe(data => {
      this.listPhones = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarPhone(id: any){
    this._phoneService.eliminarPhone(id).subscribe(data => {
      console.log("Phone eliminado correctamente");
      this.obtenerPhones();
    }, error => {
      console.log(error);
    })
  }

}

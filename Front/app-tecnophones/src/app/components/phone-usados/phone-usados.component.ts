import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';
import { Phone } from '../../models/phone';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';



@Component({
  selector: 'app-phone-usados',
  standalone: true,
  imports: [CommonModule, MdbCheckboxModule],
  templateUrl: './phone-usados.component.html',
  styleUrl: './phone-usados.component.css'
})
export class PhoneUsadosComponent implements OnInit {
  listaCelulares:Phone[]=[];
  ngOnInit(): void {
    this.obtenerPhones();
  } 
    constructor(private _phoneService:PhoneService){}

    obtenerPhones(){
      this._phoneService.getPhones().subscribe(data =>{
        this.listaCelulares= data;
        
      },error =>{console.log(error)});
    }
}

import { Component, OnInit } from '@angular/core';
import { AccesorioService } from '../../services/accesorio.service';
import { Accesorio } from '../../models/accesorio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vista-accesorios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vista-accesorios.component.html',
  styleUrl: './vista-accesorios.component.css'
})
export class VistaAccesoriosComponent implements OnInit{
  accesorios: Accesorio [] = [];
  constructor (private _accesorioService: AccesorioService) {}
  
  ngOnInit(): void {
    this._accesorioService.getAcceosrios()
      .subscribe(
        res => {
         this.accesorios = res; 
        },
        error => console.log(error)
      )
  }


}

import { Component, OnInit } from '@angular/core';
import { AccesorioService } from '../../services/accesorio.service';
import { Accesorio } from '../../models/accesorio';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-vista-accesorios',
  standalone: true,
  imports: [CommonModule, FooterComponent, RouterModule],
  templateUrl: './vista-accesorios.component.html',
  styleUrl: './vista-accesorios.component.css'
})
export class VistaAccesoriosComponent implements OnInit{
  accesorios: Accesorio [] = [];
imagePath: any;
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

import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { Phone } from '../../models/phone';

@Component({
  selector: 'app-vista-phones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vista-phones.component.html',
  styleUrl: './vista-phones.component.css'
})
export class VistaPhonesComponent implements OnInit{
  phones: Phone[] = [];

  constructor (private _phoneService: PhoneService) {}
  
  ngOnInit(): void {
    this._phoneService.getPhones()
      .subscribe(
        res => {
          this.phones = res;
        },
        error => console.log(error)
      )
  }
  
}

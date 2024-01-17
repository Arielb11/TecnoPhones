import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PhoneComponent } from './components/phone/phone.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarPhoneComponent } from './components/agregar-phone/agregar-phone.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'phone', component: PhoneComponent},
    {path: 'agregar-phone', component: AgregarPhoneComponent},
    {path: 'editar-phone/:id', component: AgregarPhoneComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
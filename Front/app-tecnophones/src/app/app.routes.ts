import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PhoneComponent } from './components/phone/phone.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarPhoneComponent } from './components/agregar-phone/agregar-phone.component';
import { LoginComponent } from './components/login/login.component';
import { PhoneNuevosComponent } from './components/phone-nuevos/phone-nuevos.component';
import { PhoneUsadosComponent } from './components/phone-usados/phone-usados.component';
import { AccesoriosComponent } from './components/accesorios/accesorios.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'phone', component: PhoneComponent },
  { path: 'agregar-phone', component: AgregarPhoneComponent },
  { path: 'editar-phone/:id', component: AgregarPhoneComponent },
  { path: 'login', component: LoginComponent },
  { path: 'phone-nuevos', component: PhoneNuevosComponent },
  { path: 'phone-usados', component: PhoneUsadosComponent },
  { path: 'accesorios', component: AccesoriosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

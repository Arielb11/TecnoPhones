import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PhoneComponent } from './components/phone/phone.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarPhoneComponent } from './components/agregar-phone/agregar-phone.component';
import { LoginComponent } from './components/login/login.component';
import { VistaPhonesComponent } from './components/vista-phones/vista-phones.component';
import { PhoneNuevosComponent } from './components/phone-nuevos/phone-nuevos.component';
import { PhoneUsadosComponent } from './components/phone-usados/phone-usados.component';
import { AccesorioComponent } from './components/accesorio/accesorio.component';
import { AgregarAccesorioComponent } from './components/agregar-accesorio/agregar-accesorio.component';
import { VistaAccesoriosComponent } from './components/vista-accesorios/vista-accesorios.component';
import { DetallesIphoneComponent } from './components/detalles-iphone/detalles-iphone.component';
import { LoginGuard } from './guards/login.guard';
import { DetallesAccesorioComponent } from './components/detalles-accesorio/detalles-accesorio.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'phones', component: VistaPhonesComponent},
    {path: 'iPhoneNuevos', component: PhoneNuevosComponent},
    {path: 'iPhoneUsados', component: PhoneUsadosComponent},
    {path: 'list-accesorios', component: VistaAccesoriosComponent},
    {path: 'detalles-iphone/:id', component: DetallesIphoneComponent},
    {path: 'detalles-accesorio/:id', component: DetallesAccesorioComponent},
    {path: 'accesorio', component: AccesorioComponent, canActivate: [LoginGuard]},
    {path: 'agregar-accesorios', component: AgregarAccesorioComponent, canActivate: [LoginGuard]},
    {path: 'editar-accesorios/:id', component: AgregarAccesorioComponent, canActivate: [LoginGuard]},
    {path: 'phone', component: PhoneComponent, canActivate: [LoginGuard]},
    {path: 'agregar-phone', component: AgregarPhoneComponent, canActivate: [LoginGuard]},
    {path: 'editar-phone/:id', component: AgregarPhoneComponent, canActivate: [LoginGuard]},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
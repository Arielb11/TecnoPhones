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
import { loginGuard } from './guards/login.guard';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'phones', component: VistaPhonesComponent},
    {path: 'iPhoneNuevos', component: PhoneNuevosComponent},
    {path: 'iPhoneUsados', component: PhoneUsadosComponent},
    {path: 'accesorio', component: AccesorioComponent, canActivate: [loginGuard]},
    {path: 'agregar-accesorios', component: AgregarAccesorioComponent, canActivate: [loginGuard]},
    {path: 'editar-accesorios/:id', component: AgregarAccesorioComponent, canActivate: [loginGuard]},
    {path: 'phone', component: PhoneComponent, canActivate: [loginGuard]},
    {path: 'agregar-phone', component: AgregarPhoneComponent, canActivate: [loginGuard]},
    {path: 'editar-phone/:id', component: AgregarPhoneComponent, canActivate: [loginGuard]},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
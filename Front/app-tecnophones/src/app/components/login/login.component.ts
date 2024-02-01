import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private _userService: UserService) {
      this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  submit(): void {
    const user: User = {
      username: this.userForm.get('username')?.value,
      password: this.userForm.get('password')?.value,
    };
    this._userService.login(user).subscribe(
      (data) => {
        Swal.fire({
          title: 'Has podido ingresar!',
          icon: 'success',
        });
        localStorage.setItem('token', data.token); //Guarda el token en el navegador web
        this.router.navigate(['/phone']);
      },
      (error) => {
        console.log(error);
        this.userForm.reset();
      }
    );
  }
}

import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  myForm!: FormGroup;
  constructor(private authService: AuthServiceService, private router: Router) { }
  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(),
      password: new FormControl()
    });
  }

  submit(event: any): void {
    event.preventDefault();
    this.authService.login(this.myForm.value.name, this.myForm.value.password)
    this.router.navigate(['products'])
  }
}

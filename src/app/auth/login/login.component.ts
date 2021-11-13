import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  logInForm: FormGroup;
  constructor(private _router: Router, private formBuilder: FormBuilder) {}
  get f() {
    return this.logInForm.controls;
  }
  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  Login() {
    this.submitted = true;
    if (this.logInForm.invalid) {
      return;
    } else {
      this._router.navigate(['/page/dashboard']);
    }

  }
}

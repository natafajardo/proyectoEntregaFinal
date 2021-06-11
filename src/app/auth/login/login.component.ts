import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private authService: AuthService,
    public router: Router
  ) { 
    this.form = this.fb.group({
      correo: [],
      pass: [],
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    const body = this.form.getRawValue();
    this.authService.login(body).subscribe(res => {
      console.log(res);
      this.form.reset();
      this.router.navigate(['home']);
    });
  }
}

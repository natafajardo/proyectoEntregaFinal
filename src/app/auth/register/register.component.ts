import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private authService: AuthService,
    ) {
    this.form = this.fb.group({
      correo: [],
      nombre: [],
      nombreUsuario: [],
      pass: [],
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    const body = this.form.getRawValue();
    this.authService.register(body).subscribe(res => {
      console.log(res);
      this.form.reset();
    });
  }

}

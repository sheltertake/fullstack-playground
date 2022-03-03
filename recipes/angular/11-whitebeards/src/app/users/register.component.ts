import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserRepositoryService } from "../core/user-repository.service";
import { IUser } from "./user.model";
@Component({
  styleUrls: ["../users/register.component.css"],
  templateUrl: "../users/register.component.html",
})
export class RegisterComponent {
  registerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  saving: boolean = false;

  constructor(
    private router: Router,
    private userRepository: UserRepositoryService
  ) {
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);
    this.email = new FormControl("", Validators.required);
    this.password = new FormControl("", Validators.required);

    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit() {}

  registerUser(user: IUser) {
    this.saving = true;
    this.saveAndRedirect(user);
  }

  cancel() {
    this.router.navigate(["/"]);
  }

  private saveAndRedirect(user: IUser) {
    this.userRepository.saveUser(user).subscribe(
      null,
      () => (this.saving = false),
      () => this.router.navigate(["/catalog"])
    );
  }
}

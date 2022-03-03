import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./register.component";
import { SignInComponent } from "./sign-in.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'register',component: RegisterComponent},
      { path: 'sign-in',component: SignInComponent},
    ]),
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  exports: [],
  declarations: [RegisterComponent, SignInComponent],
  providers: [],
})
export class UsersModule {}

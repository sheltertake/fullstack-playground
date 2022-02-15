import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validator,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormArray,
} from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

import { Customer } from './customer';

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl?.pristine || confirmControl?.pristine) {
    return null;
  }

  if (emailControl?.value === confirmControl?.value) {
    return null;
  }

  return { match: true };
}

function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (
      c.value !== null &&
      (isNaN(c.value) || c.value < min || c.value > max)
    ) {
      return { range: true };
    }
    return null;
  };
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customer = new Customer();
  customerForm: FormGroup;
  emailMessage?: string;
 
  get addresses(): FormArray{
    return <FormArray>this.customerForm.get('addresses')
  }

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address'
  };

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      // firstName: ['', [Validators.required]],
      // lastName: ['', [Validators.required]],
      // email: '',
      // phone: '',
      // notification: 'email',
      // sendCatalog: true
    });
  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      emailGroup: this.fb.group(
        {
          email: '',
          confirmEmail: ['', Validators.required],
        },
        { validator: emailMatcher }
      ),
      phone: '',
      rating: [null, ratingRange(1, 5)],
      notification: 'email',
      sendCatalog: true,
      addresses:this.fb.array([this.buildAddress()])
   

    });

    //watcher
    this.customerForm
      .get('notification')
      ?.valueChanges.subscribe((value) => this.setNotification(value));

    const emailControl = this.customerForm.get('emailGroup.email');
    emailControl?.valueChanges.pipe(debounceTime(2000)).subscribe((value) =>
      this.setMessage(emailControl)
    );
  }

  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Jack',
      lastName: 'Harkness',
      email: 'jack@gmail.com',
      confirmEmail: 'jack@gmail.com',
      phone: '',
      notification: 'email',
    });
  }

  save(): void {
    console.log(this.customerForm);
    // console.log(JSON.stringify(this.customerForm));
  }

  setMessage (c: AbstractControl): void {
    this.emailMessage= '';
    if((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.validationMessages.required).join(' ');
      
    }
  }

  buildAddress(): FormGroup {
    return  this.fb.group({
      addressType: 'home',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: ''})
  }

  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl?.setValidators(Validators.required);
    } else {
      phoneControl?.clearValidators();
    }
    phoneControl?.updateValueAndValidity();
  }
}

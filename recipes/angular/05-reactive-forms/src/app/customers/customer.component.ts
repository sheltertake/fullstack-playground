import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validator, Validators } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer = new Customer();
  customerForm: FormGroup;
  constructor(private fb: FormBuilder ) {  

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
      email: '',
      phone: '',
      notification: 'email',

    });
  }

  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Jack',
      lastName:'Harkness',
      email:'jack@gmail.com',
      phone: '',
      notification: 'email',

    });
  }

  save(): void {
    console.log(this.customerForm);
    // console.log(JSON.stringify(this.customerForm));
  }

  setNotification(notifyVia:string): void {
    const phoneControl = this.customerForm.get('phone');
    if(notifyVia==='text'){
      phoneControl?.setValidators(Validators.required);
    } else {
      phoneControl?.clearValidators();
    }
    phoneControl?.updateValueAndValidity();
  }
  
}

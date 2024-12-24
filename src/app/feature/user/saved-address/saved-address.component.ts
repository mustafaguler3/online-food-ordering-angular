import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddressService } from 'src/app/core/services/address.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { Address } from 'src/app/shared/models/address.model';
import { User } from 'src/app/shared/models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-saved-address',
    templateUrl: './saved-address.component.html',
    styleUrls: ['./saved-address.component.css'],
    standalone: false
})
export class SavedAddressComponent implements OnInit{

  addressForm: FormGroup;
  address: Address[]
  display = false;

  constructor(private addressService: AddressService,
              private toastService: ToastService,
              private modalService: NgbModal
  ){}

  openModal(content: any) {
    this.modalService.open(content, { backdrop: 'static', keyboard: false });
  }

  submitForm() {
    if (this.addressForm.valid) {
      console.log('Form Data:', this.addressForm.value);
      // Add your submission logic here
    } else {
      console.error('Form is invalid');
    }
  }

  ngOnInit(): void {
      this.addressService.getSavedAddress().subscribe({
        next: (response) => {
          this.address = response
        },error: (error) => {
          this.toastService.showError("Error",error)
        }
      })
  }


}

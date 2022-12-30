import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {
  formAdmission!:FormGroup;
  base64:any = '';
  userName:string = '';
    constructor(private fb:FormBuilder) { }

    ngOnInit(): void {
      // Call Form
      this.createForm();
    }


    // Initial Form
    createForm(){
      this.formAdmission = this.fb.group({
        name:['' , [Validators.required , Validators.minLength(3)]],
        position:['',[Validators.required]],
        availabilityDate:['',[Validators.required]],
        expectedSalary:['',[Validators.required]],
        dateOfBirth:['',[Validators.required]],
        address:['',[Validators.required]],
        phoneNumber:['',[Validators.required]],
        email:['' , [Validators.required , Validators.email]],
        maritalStatus:['',[Validators.required]],
        cvFile:['',[Validators.required]],
      })
    }

    // Convert file To Base64
    getPathImage(event:any){
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
      this.base64 = reader.result;
      };
    }

    // Button init Data
    sendData(){
      const model = {
        name: this.formAdmission.value.name,
        position: this.formAdmission.value.position,
        availabilityDate: this.formAdmission.value.availabilityDate,
        expectedSalary: this.formAdmission.value.expectedSalary,
        dateOfBirth: this.formAdmission.value.dateOfBirth,
        address: this.formAdmission.value.address,
        phoneNumber: this.formAdmission.value.phoneNumber,
        email: this.formAdmission.value.email,
        maritalStatus: this.formAdmission.value.maritalStatus,
        cvFile: this.base64
      }
      this.userName = this.formAdmission.value.name;


      // Call Api Services And Send Data
      console.log(model);
    }
  }


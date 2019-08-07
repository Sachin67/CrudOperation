import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.css']
})
export class CrudOperationComponent implements OnInit {
  
  tempData:any=[];
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required,Validators.maxLength(4)],
      lastName: ['', Validators.required,Validators.maxLength(4)],
      Address: ['', Validators.required,Validators.maxLength(4)],
      MobileNo: ['', Validators.required,Validators.maxLength(4)],
      Id: ['', Validators.required,Validators.maxLength(4)],
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit(){
    if (this.registerForm.invalid) {
      alert('Please Enter Valid Data!! :-');
      return;
    }
    alert('SUCCESS!! :-');
    this.tempData.push(this.registerForm.value);
    this.registerForm.reset();
  }

  deleteElement(id){
    for (let data of this.tempData) {
      if (id === data.Id) {
          this.tempData.splice(this.tempData.indexOf(data), 1);
          break;
      }
    }
  }

  editDetails(data){
    this.registerForm.patchValue(data)
  }

  upadteDetails(data){
    for (let i=0;i<=this.tempData.length;i++){
      if(data.value.Id==this.tempData[i].Id){
        this.tempData[i]=data.value;
      }
    }
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudOperationService } from '../crud-operation.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.css']
})
export class CrudOperationComponent implements OnInit {
  
  tempData:any=[];
  registerForm: FormGroup;
  messages:any=[];
  subscription:Subscription;
  detailsData:any={};
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();

  constructor(private formBuilder: FormBuilder,public crudOperationService:CrudOperationService,private router: Router) {

   }

   sendMessage(): void {
    // send message to subscribers via observable subject
    this.crudOperationService.sendMessage('Message from Home Component to App Component!');
}

clearMessages(): void {
    // clear messages
    this.crudOperationService.clearMessages();
}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      Address: ['', Validators.required],
      MobileNo: ['', Validators.required],
      Id: ['', Validators.required],
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
    this.registerForm.reset();
  }

  getDetails(){
    this.detailsData=this.crudOperationService.getDetails();
    alert(this.detailsData);
  }

  redirectToLogin(){
    this.router.navigate(['/login'])
  }

  

  onAddServer(){
    this.serverCreated.emit({serverName:this.registerForm.value.firstName,serverContent:this.registerForm.value.lastName});
  }

}

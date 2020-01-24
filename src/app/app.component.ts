import { Component } from '@angular/core';
import { CrudOperationService } from './crud-operation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudoperations';
  messages:any=[];
  clients:any={};
  subscription:Subscription;
  serverElements=[{name:'TestServer',type:'server',content:'Test Server Message'}]
  
  constructor(private crudOperationService:CrudOperationService){
    this.subscription = this.crudOperationService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
        console.log(this.messages);
      } else {
        // clear messages when empty message received
        this.messages = [];

      }
    });

    this.crudOperationService.getDetails().subscribe( res => {
      this.clients = res;
      console.log(this.clients);
    })
  }

  onServerAdded(emittedData){
    console.log("Emmited data in app component",emittedData);
    // this.serverElements.push({
    // type:'server',
    // name:this.newServerName,
    // Content:this.newServerContent
   // });

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CrudOperationService {

  

  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  sendMessage(message: string) {
      this.subject.next({ text: message });
  }

  clearMessages() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

  getDetails():Observable<any>{
   return this.http.get('https://console.firebase.google.com/project/studentregistration-8bb7b/database/data/userData/users/-KXyODWV514UDYbf8eNL');
  }


  
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  save(url, object): Observable<any> {
    return this.http.post(url, object);
  }

  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message || "server error");
  }

  getData(url): Observable<any> {
    return this.http.get(url);
  }
  
  getDataById(url, id:any): Observable<any> {
    console.log('url'+url+','+id)
    return this.http.post(url, id);
  }

  remove(url,id){
    return this.http.post(url,id);
  }

  getPagedData(page:number){
    console.log('page number '+page);
    return this.http.get('http://localhost:2020/accounts/getAllAccs?page='+page);

  }

  activateAcc(email,temppassword){                                        
    console.log('email '+email+", "+temppassword)  
    return this.http.get('http://localhost:2020/accounts/ActivateAcc?email='+email+'&temppwd='+temppassword);
  }

}
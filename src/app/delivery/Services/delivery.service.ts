import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from '../Interfaces/Job';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  url: string = "https://localhost:7132"
  constructor(private _httpClient :HttpClient) {
    
   }


   AllJobs(): Observable<Jobs[]> {
    return this._httpClient.get<Jobs[]>(`${this.url}/api/Jobs/AllJobs`);
  }
  
  AddDeliveryProfile(DeliveryProfileDTO:any):Observable<any>
  {
     return this._httpClient.put(`${this.url}/api/Deivery/AddDeliveryProfile`,
     DeliveryProfileDTO);
  }
}

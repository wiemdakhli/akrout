import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage-service.service';

const  URL="http://localhost:3000/compte/";

@Injectable({
  providedIn: 'root'
})

export class CompteService {

  constructor(private http:HttpClient,private token:TokenStorageService) { }

  
}

import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/models/compte'; 
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CompteService } from 'src/app/service/compte.service'; 

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit {

  compte = new Compte();
  form:FormGroup;


  constructor(private f:FormBuilder,private compteService:CompteService) { }

  ngOnInit(): void {
    this.form=this.f.group({
      nom_societe:[''],
      adressEmail:[''],
      domaine_metier:[''],
      adresse:[''],
      tel:[''],
      password:['']
    })
  }

  modifierCompte(){

  }

  supprimerCompte(){

  }




}

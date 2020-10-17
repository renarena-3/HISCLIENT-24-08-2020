import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatacheckserviceService } from 'src/app/shared/services/datacheckservice.service';
import { ApiService } from 'src/app/core/api.service';
import { environment } from 'src/environments/environment';
import { Urlconfig } from 'src/app/shared/url_config/urlconfig';
import { ActivatedRoute, Router } from '@angular/router';
import { Routerurlconfig } from 'src/app/shared/url_config/routerurlconfig';

@Component({
  selector: 'app-accountsdetails',
  templateUrl: './accountsdetails.component.html',
  styleUrls: ['./accountsdetails.component.css']
})
export class AccountsdetailsComponent implements OnInit {

  public accDtlsForm:FormGroup;

  constructor(
    private fb:FormBuilder,
    private tabledataservice:DatacheckserviceService,
    private apiservice:ApiService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(){
    this.accDtlsForm=this.fb.group({
      accid:[],
      firstname:[],
      lastname:[],
      email:[],
      gender:[],
      role:[]
    });
    
    this.setFormData();
 
  }

  editForm(){
    let updateInfo=this.accDtlsForm.value
    console.log('updateInfo '+updateInfo)
    this.apiservice.save(Urlconfig.update_acc,updateInfo).subscribe(
      data=>{
      
        this.router.navigate([''],{ relativeTo: this.route });
       
      }
    )

  }

  setFormData(){
   let accDtl= this.tabledataservice.tableDataValue;
   if(accDtl != undefined){
     this.accDtlsForm.patchValue({
      accid:accDtl.accid,
      firstname:accDtl.firstname,
      lastname:accDtl.lastname,
      email:accDtl.email,
      gender:accDtl.gender,
      role:accDtl.role
     })
   }

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../core/api.service';
import { Urlconfig } from '../shared/url_config/urlconfig';
import { FormBuilder, FormGroup, NgForm, Validators }   from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-activateacc',
  templateUrl: './activateacc.component.html',
  styleUrls: ['./activateacc.component.css']
})
export class ActivateaccComponent implements OnInit {

  activateAccForm:FormGroup;
  submitted = false;

  constructor(
    private route:ActivatedRoute,
    private apiservice:ApiService,
    private router:Router,
    private fb:FormBuilder
    ) { }
 
  ngOnInit() {
    console.log('submitted '+this.submitted);
    this.activateAccForm = this.fb.group({
      email:['',Validators.required],
      pwd:['',Validators.required],
      newpwd:['',Validators.required],
      crmpwd:['',Validators.required],
    }); 
   
   
  }

activateAcc(){
    this.submitted = true;
//stop here if form is invalid
if(this.activateAccForm.invalid){
  return;
}
this.apiservice.save(Urlconfig.activate_Acc,this.activateAccForm.value).subscribe((data:any) =>{
        console.log('data ===================== '+data)
        if(data != null){
          this.router.navigate(['/crmpwd'])
        }
      }  );
}
}

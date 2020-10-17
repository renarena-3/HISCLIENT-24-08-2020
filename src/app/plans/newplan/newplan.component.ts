import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { Urlconfig } from 'src/app/shared/url_config/urlconfig';

@Component({
  selector: 'app-newplan',
  templateUrl: './newplan.component.html',
  styleUrls: ['./newplan.component.css']
})
export class NewplanComponent implements OnInit {

  public newPlanForm : FormGroup;
  constructor(
    private fb:FormBuilder,
    private apiservice:ApiService
  ) { }

  ngOnInit() {

    this.newPlanForm = this.fb.group({

      planname:[],
      plandesc:[],
      planstartdt:[],
      planenddt:[]
    })
  }

  savePlan(){
    this.apiservice.save(Urlconfig.save_plan,this.newPlanForm.value).subscribe(
      data =>{
        console.log('data '+data)
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { Urlconfig } from 'src/app/shared/url_config/urlconfig';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent implements OnInit {
  
  public newAccForm:FormGroup;

  constructor(
    private fb:FormBuilder,
    private apiservice:ApiService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.newAccForm=this.fb.group({
      firstname:[],
      lastname:[],
      email:[],
      gender:[],
      role:[]
    })
  }

  createAcc(){
    console.log(this.newAccForm.value);
    let accData = this.newAccForm.value;
    this.apiservice.save(Urlconfig.save_acc,accData).subscribe((data:any)=>{
    console.log('data '+data);
    this.router.navigate(['serachacc'], { relativeTo: this.route });
  });
}
}
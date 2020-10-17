import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Urlconfig } from 'src/app/shared/url_config/urlconfig';
import { Router, ActivatedRoute } from '@angular/router';
import { DatacheckserviceService } from 'src/app/shared/services/datacheckservice.service';

@Component({
  selector: 'app-searchaccounts',
  templateUrl: './searchaccounts.component.html',
  styleUrls: ['./searchaccounts.component.css']
})
export class SearchaccountsComponent implements OnInit {
 
public pageData:Array<any>;
public pages:Array<number>;
public page=0;
  constructor(
    private apiservice:ApiService,
    private router:Router,
    private route:ActivatedRoute,
    private tabledataservice:DatacheckserviceService
  ) { }

  ngOnInit(): void {
    this.getAllAccs();
  }

  getAllAccs(){
    this.apiservice.getPagedData(this.page).subscribe(data=>{
      this.pageData = data['content'];
      console.log(this.pageData);
      this.pages = new Array(data['totalPages']);
      console.log('no of pages '+this.pages);
    })
  }

  setPage(i,event:any){
    console.log('i '+i);
    event.preventDefault();
    this.page=i;
   this.getAllAccs();
  }

  update(id){
   this.apiservice.getDataById(Urlconfig.get_accbyid,id).subscribe(
     data =>{
       console.log('data '+data);
       this.tabledataservice.tableDataValue = data;
       this.router.navigate(['accdtl'],{ relativeTo: this.route });
     }
   );
  }

  delete(id){
    this.apiservice.remove(Urlconfig.remove_acc,id).subscribe(
      data =>{
        console.log('data '+data)
      })
}

  addAcc(){
    this.router.navigate(['newacc'],{ relativeTo: this.route })
  }




}

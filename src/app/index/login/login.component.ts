import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';
import { Urlconfig } from 'src/app/shared/url_config/urlconfig';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private apiservice:ApiService,
    private authservice:AuthService,
    private route:Router
    
  ) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm){
  this.apiservice.save(Urlconfig.user_login,loginForm.value).subscribe((data:any)=>{
    console.log('data '+data);
    if(data!=null){
      let logincred = {
        'email':data.email,
        'pwd':data.pwd
      }
      console.log('logincred ::'+logincred);
      this.authservice.login(logincred);
      this.route.navigate(['/menu'])
    }else{
      console.log('else block')
      this.route.navigate(['']);
    }
  })
    console.log('loginForm :: '+loginForm.value);
  }

}
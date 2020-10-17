import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let email =this.route.snapshot.params.email;
    console.log('email '+email)
  }

}

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})
export class BetComponent implements OnInit {

  amount: any;
  realAccount: any;
  realAccountText: any;
  demoAccountText: any;

  constructor() { 
  }

  
  ngOnInit(): void {
    this.realAccount = true;
  }

betGreen() {
  Swal.fire({
    title: 'YOU BET IN GREEN!',
    icon: 'success',
    confirmButtonText: 'GG'
  })
}

betRed() {
  Swal.fire({
    title: 'YOU BET IN RED!',
    icon: 'success',
    confirmButtonText: 'GG'
  })
}

switchAccount(){
  if(this.realAccount === true){
    this.realAccountText = "CONTA REAL";
    console.log(this.realAccount)
  } if(this.realAccount === false){
    this.realAccount = "CONTA DEMO";
    console.log(this.realAccount)
  }
}

converter() {

}

}

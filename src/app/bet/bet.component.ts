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
    this.amount = 4000;
  }

  
  ngOnInit(): void {
    this.realAccount = true;
  }

betGreen() {
  this.amount = this.amount + 250;
  Swal.fire({
    title: 'YOU BET IN GREEN!',
    icon: 'success',
    confirmButtonText: 'GG'
  })
}

betRed() {
  this.amount = this.amount - 250;
  Swal.fire({
    title: 'YOU BET IN RED!',
    icon: 'success',
    confirmButtonText: 'GG'
  })
}

switchAccount(){
}

refresh(){
  if(this.amount < 4000){
    this.amount = this.amount = 4000;
  }
}

converter() {

}

}

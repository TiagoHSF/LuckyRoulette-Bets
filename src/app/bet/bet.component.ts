import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})
export class BetComponent implements OnInit {

  amount: number = 4000;

  realAccount: boolean = true;

  realAccountText: string = "REAL ACCOUNT";
  demoAccountText: string = "YOU ARE IN DEMO ACCOUNT";


  constructor() { 
  }

  
  ngOnInit(): void {
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
    this.realAccountText;
    console.log()
  } else {
    this.demoAccountText
  }
}

converter() {

}

}

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

converter() {

}

}

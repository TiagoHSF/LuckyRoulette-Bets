import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})
export class BetComponent implements OnInit {

  
betGreen() {
  console.log("Green")
}

betRed() {
  window.alert("Red")
}


  constructor() { }

  ngOnInit(): void {
  }

}

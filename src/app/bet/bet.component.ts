import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})
export class BetComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

betGreen(){
  console.log("bet green")
}

betRed(){
  console.log("bet red")
}

}

import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})


export class StartScreenComponent implements OnInit {
  
  constructor(private router: Router) {}

  ngOnInit():void{

  }
  
  newGame(){
    //start game
    this.router.navigateByUrl('/game')
  }
}

import { Component, OnInit } from '@angular/core';
import { PopOverService } from '../pop-over.service';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss'],
})
export class PopComponent implements OnInit {

  constructor(public POP:PopOverService) { }

  ngOnInit() {

  }

  Cancel(){
    this.POP.Dismiss();
  }
}

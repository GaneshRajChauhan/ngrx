import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import  {Observable}  from 'rxjs';
import {Tutorial} from './../models/tutorial.model';
import {AppState} from './../app.state';
import * as TutorialAction from './../actions/tutorial.action';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  delTutorial(index){
    this.store.dispatch(new TutorialAction.RemoveTutorial(index));
  }
  tutorials:Observable<Tutorial[]>
  constructor(private store:Store<AppState>) { 

    this.tutorials=store.select('tutorial');
  }

  ngOnInit() {
  }

}

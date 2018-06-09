import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import  {AppState} from './../app.state';
import {} from './../actions/tutorial.action';
import * as TutorialActions from './../actions/tutorial.action';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store:Store<AppState>){}
addTutorial(name,url){
  this.store.dispatch(new TutorialActions.AddTutorial({name:name,url:url}))
}

  ngOnInit() {
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Goal} from "../goal";

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  //for input binding
  @Input() goal! : Goal;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() isDeleted = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  goalDelete(complete:boolean){
    this.isDeleted.emit(complete);
  }

}

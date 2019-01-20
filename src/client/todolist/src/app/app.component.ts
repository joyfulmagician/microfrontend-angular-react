import { Component, ViewEncapsulation, Output, EventEmitter, OnInit } from '@angular/core';

import { TaskCounterService } from './core/task-counter.service';
import { Task } from './tasks/shared/models/task.model';

@Component({
  selector: 'app-ng-todolist',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit {

  @Output() allDoneTasksEmitter = new EventEmitter<Task[]>();

  constructor(private taskCounterService: TaskCounterService) { }

  ngOnInit() {
    this.taskCounterService.doneTasksObservable.subscribe(doneTasks => {
      this.allDoneTasksEmitter.emit(doneTasks);
    });
  }
}

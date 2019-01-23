import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Task } from '../tasks/shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskCounterService {

  private allTasksSubject = new BehaviorSubject<Task[]>([]);
  constructor() { }

  public emitAllTasks(tasks: Task[]): void {
    this.allTasksSubject.next(tasks);
  }

  public getAllTaskSubject(): Observable<Task[]> {
    return this.allTasksSubject.asObservable();
  }
}

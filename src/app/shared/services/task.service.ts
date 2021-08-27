// attribution
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  // gathers all tasks under a certain empId
  findAllTasks(empId: number): Observable<any> {
    return this.http.get('/api/employees/' + empId + '/tasks')
  }

  // add tasks to user
  createTask(empId: number, task: string): Observable<any>{
    return this.http.post('/api/employee/' + empId + '/tasks', {
      text: task
    });
  }
}


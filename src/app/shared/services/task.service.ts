/*
============================================
; Title:  nodebucket
; Author: Grayton Savickas
; Date:   28 Aug 2021
; Modified By:
; Description: 
;===========================================
*/

// Service that can find a task by id or create a task.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item.interface';

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
    return this.http.post('/api/employees/' + empId + '/tasks', {
      text: task
    });
  }

  // updates todo and done tasks given an empId and array of todo and done items
  updateTask(empId: number, todo: Item[], done: Item[]): Observable<any>{
    return this.http.put('/api/employees/' + empId + '/tasks', {
      todo,
      done
    })
  }

  deleteTask(empId: number, taskId: string): Observable<any>{
    return this.http.delete('/api/employees/' + empId + '/tasks/' + taskId);
  }
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-update-task-dialog',
  templateUrl: './update-task-dialog.component.html',
  styleUrls: ['./update-task-dialog.component.css']
})
export class UpdateTaskDialogComponent implements OnInit {

  taskFormUpdate: FormGroup;

  constructor(private dialogRef: MatDialogRef<UpdateTaskDialogComponent>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.taskFormUpdate = this.fb.group({
      text: [null, Validators.compose([Validators.required])]
    })
  }
  // Creates a task item with value taken from the taskForm
  updateTask(){
  this.dialogRef.close(this.taskFormUpdate.value);
  }

  // Cancels the dialog option
  cancel(){
  this.dialogRef.close();
}
}

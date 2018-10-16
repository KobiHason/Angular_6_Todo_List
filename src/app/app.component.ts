import { Component } from '@angular/core';

interface Task {
  title: string;
  is_canceled: boolean;
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  tasks: Array<Task> = [ ];

  clearToDo() {
    const do_delete = confirm('Are you sure to delete all tasks?');
    if (do_delete) {  this.tasks.splice(0); }
  }

addTask(input) {
    const value = input.value;
    input.value = '';
    this.tasks.push( {title: value,  is_canceled: false });
  }


  deleteTask(idx: number) {
    const do_delete = confirm('Are you sure to delete the task?');
    if (do_delete) {      this.tasks.splice(idx, 1);    }
  }

  editTask(idx: number) {
    const title = this.tasks[idx].title;
    const result = prompt('Edit Task Title', title);
    if (result !== null && result !== '') {      this.tasks[idx].title = result;   }
  }


}

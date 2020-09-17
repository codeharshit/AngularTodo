import { NumberFormatStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-App';

  todos = [
    {
      label: "Milk",
      priority: 1,
      done: true
    },
    {
      label: "Bread",
      priority: 2,
      done:false
    },
    {
      label: "Butter",
      priority: 3,
      done: true
    }
  ];

  addTodo(newItem) {
    var arr = {
      label: newItem,
      priority: 4,
      done: false
    }
    this.todos.push(arr);
  }

  deleteTodo(oldItem) {
    this.todos= this.todos.filter(item => item.label !== oldItem.label) //deletes if labels are matched
  }

}

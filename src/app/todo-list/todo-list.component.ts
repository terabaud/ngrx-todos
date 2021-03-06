import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/todo.reducer';
import { Store, select } from '@ngrx/store';
import { addTodo, toggleTodo, deleteTodo } from 'src/todo.actions';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private store: Store<{todos: Todo[]}>) {
    this.todos$ = store.pipe(select('todos'));
  }

  ngOnInit() {
  }

  toggleTodo(index) {
    this.store.dispatch(toggleTodo({index}));
  }

  deleteTodo(index) {
    this.store.dispatch(deleteTodo({index}));
  }
}

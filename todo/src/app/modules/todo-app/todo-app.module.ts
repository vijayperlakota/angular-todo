// Angular
import { NgModule } from "@angular/core";

// Services & Facades
import { TodoFacade } from "./services/todo.facade";
import { TodoService } from "./services/todo.service";

// Components
// import { AddTodoComponent } from "@todo/components" --- TODO: why alias paths are not working
import { AddTodoComponent } from "./components/add-todo/add-todo.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";

@NgModule({
    imports: [],
    providers: [
        TodoFacade,
        TodoService
    ],
    declarations: [
        AddTodoComponent,
        TodoListComponent
    ],
    exports: [
        AddTodoComponent,
        TodoListComponent
    ],
    entryComponents: []
})
export class TodoModule {}
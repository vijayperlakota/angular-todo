// Angular
import { NgModule } from "@angular/core";

// AntD
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd';

// Services & Facades
import { TodoFacade } from "./services/todo.facade";
import { TodoService } from "./services/todo.service";

// Components
// import { AddTodoComponent } from "@todo/components" --- TODO: why alias paths are not working
import { TodoAppComponent } from "./todo-app.component";
import { AddTodoComponent } from "./components/add-todo/add-todo.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";

@NgModule({
    imports: [
        // AntD
        NzLayoutModule,
        NzTypographyModule
    ],
    providers: [
        TodoFacade,
        TodoService
    ],
    declarations: [
        TodoAppComponent,
        AddTodoComponent,
        TodoListComponent
    ],
    exports: [
        TodoAppComponent
    ],
    entryComponents: []
})
export class TodoModule {}
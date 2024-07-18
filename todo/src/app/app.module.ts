// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Application Modules and Components
import { TodoModule } from './modules/todo-app/todo-app.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Ant D Typography module
import { NzTypographyModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Application Modules
    TodoModule,

    // Ant D
    NzTypographyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

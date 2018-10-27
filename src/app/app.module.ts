import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeightFormComponent} from './weight-form/weight-form.component';
import { UiModule } from './ui/ui.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    WeightFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

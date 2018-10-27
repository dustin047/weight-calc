import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {LayoutComponent} from './ui/layout/layout.component';
import {WeightFormComponent} from './weight-form/weight-form.component';
import {FooterComponent} from './ui/footer/footer.component';
import {HeaderComponent} from './ui/header/header.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        AppComponent, LayoutComponent, WeightFormComponent, FooterComponent, HeaderComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeightFormComponent} from './weight-form.component';
import {FormsModule} from '@angular/forms';
import {TotalWeights} from '../totalWeights';


describe('WeightFormComponent', () => {
  let component: WeightFormComponent;
  let fixture: ComponentFixture<WeightFormComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [WeightFormComponent]
    })
      .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(WeightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  
  describe('calculate what weights to put on the end of the bar for a total of 315lbs and a 45lb bar', () => {
    it('There should be 3 45s on each end of the bar', () => {
      expect(WeightFormComponent.calculateWeight(45, 315)).toEqual(new TotalWeights(3, 0, 0, 0, 0, 0));
    });
  });
  
  describe('calculate what weights to put on the end of the bar for a total of 320lbs and a 45lb bar', () => {
    it('There should be 3 45s and 1 2.5 on each end of the bar', () => {
      expect(WeightFormComponent.calculateWeight(45, 320)).toEqual(new TotalWeights(3, 0, 0, 0, 0, 1));
    });
  });
  
  describe('calculate what weights to put on the end of the bar for a total of 325lbs and a 45lb bar', () => {
    it('There should be three 45s and one 5 on each end of the bar', () => {
      expect(WeightFormComponent.calculateWeight(45, 325)).toEqual(new TotalWeights(3, 0, 0, 0, 1, 0));
    });
  });
  
  describe('calculate what weights to put on the end of the bar for a total of 330lbs and a 45lb bar', () => {
    it('There should be three 45s, one 5, and one 2.5 on each end of the bar', () => {
      expect(WeightFormComponent.calculateWeight(45, 330)).toEqual(new TotalWeights(3, 0, 0, 0, 1, 1));
    });
  });
  
  describe('calculate what weights to put on the end of the bar for a total of 335lbs and a 45lb bar', () => {
    it('There should be three 45s and one 10 on each end of the bar', () => {
      expect(WeightFormComponent.calculateWeight(45, 335)).toEqual(new TotalWeights(3, 0, 0, 1, 0, 0));
    });
  });
  
  
  describe('is 315lbs a valid weight to be lifting?', () => {
    it('315 should be a valid weight', () => {
      component.total = 315;
      expect(component.totalWeightIsValid()).toBeTruthy();
    });
  });
  
  
  describe('is 317lbs a valid weight to be lifting?', () => {
    it('317 is not a valid weight', () => {
      component.total = 317;
      expect(component.totalWeightIsValid()).toBeFalsy();
    });
  });
  
  describe('is bar greater than zero when bar weighs 45lbs', () => {
    it('bar should be greater than 0 when it weighs 45lbs', () => {
      component.bar = 45;
      expect(component.barIsGreaterThanZero()).toBeTruthy();
    });
  });
    
    
    describe('is bar greater than zero when bar weighs 0lbs', () => {
      it('bar is not greater than zero when bar weighs 0 lbs', () => {
        component.bar = 0;
        expect(component.barIsGreaterThanZero()).toBeTruthy();
      });
    });
    
    describe('is bar greater than zero when bar weighs -45lbs', () => {
      it('bar is not greater than zero when bar weighs  -45lbs', () => {
        component.bar = -45;
        expect(component.barIsGreaterThanZero()).toBeFalsy();
      });
    });
    
    describe('is total weight greater than the bars weight when total is 405lbs and bar is 45lbs.', () => {
      it('total weight is greater than the bars weight when total is 405lbs and bar is 45lbs', () => {
        component.total = 405;
        component.bar = 0;
        expect(component.totalIsGreaterThanBar()).toBeTruthy();
      });
    });
    
    describe('is total weight greater than the bars weight when total is 35lbs and bar is 45lbs.', () => {
      it('total weight is greater than the bars weight when total is 405lbs and bar is 45lbs', () => {
        component.total = 35;
        component.bar = 45;
        expect(component.totalIsGreaterThanBar()).toBeFalsy();
      });
    });
    
    describe('calculated weights when total is 405 and bar is 45', () => {
      it('there should be 45s on each side of the bar', () => {
        component.totalWeights = WeightFormComponent.calculateWeight(45, 405);
        expect(component.has2and5s()).toBeFalsy();
        expect(component.has5s()).toBeFalsy();
        expect(component.has10s()).toBeFalsy();
        expect(component.has25s()).toBeFalsy();
        expect(component.has35s()).toBeFalsy();
        expect(component.has45s()).toBeTruthy();
      });
    });
  
  describe('calculated weights when total is 220 and bar is 45', () => {
    it('there should be a 45, a 35, a 5, and a 2.5 on each side of the bar', () => {
      component.bar = 45;
      component.total = 220;
      component.totalWeights = WeightFormComponent.calculateWeight(45, 220);
      expect(component.has2and5s()).toBeTruthy();
      expect(component.has5s()).toBeTruthy();
      expect(component.has10s()).toBeFalsy();
      expect(component.has25s()).toBeFalsy();
      expect(component.has35s()).toBeTruthy();
      expect(component.has45s()).toBeTruthy();
    });
  });
  
  describe('calculated weights when total is 55 and bar is 45', () => {
    it('there should be a 5 on each side of the bar', () => {
      component.bar = 45;
      component.total = 220;
      component.totalWeights = WeightFormComponent.calculateWeight(45, 55);
      expect(component.has2and5s()).toBeFalsy();
      expect(component.has5s()).toBeTruthy();
      expect(component.has10s()).toBeFalsy();
      expect(component.has25s()).toBeFalsy();
      expect(component.has35s()).toBeFalsy();
      expect(component.has45s()).toBeFalsy();
    });
  });
  
  });

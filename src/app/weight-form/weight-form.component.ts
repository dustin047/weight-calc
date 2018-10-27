import {Component, OnInit} from '@angular/core';
import {TotalWeights} from '../totalWeights';


@Component({
  selector: 'app-weight-form',
  templateUrl: './weight-form.component.html',
  styleUrls: ['./weight-form.component.css']
})
export class WeightFormComponent implements OnInit {
  
  bar = 45;
  total = 405;
  totalWeights;
  
  static calculateWeight(bar: number, weight: number): TotalWeights {
    if (weight !== 0) {
      weight = weight - bar;
    }
    
    weight = weight / 2;
    let fortyFives = 0;
    let thirtyFives = 0;
    let twentyFives = 0;
    let tens = 0;
    let fives = 0;
    let twoAndHalf = 0;
    
    if (weight !== 0) {
      fortyFives = Math.floor(weight / 45);
      weight = weight - (45 * fortyFives);
      
      thirtyFives = Math.floor(weight / 35);
      weight = weight - (35 * thirtyFives);
      
      twentyFives = Math.floor(weight / 25);
      weight = weight - (25 * twentyFives);
      
      tens = Math.floor(weight / 10);
      weight = weight - (10 * tens);
      
      fives = Math.floor(weight / 5);
      weight = weight - (5 * fives);
      
      twoAndHalf = Math.floor(weight / 2.5);
    }
    return new TotalWeights(fortyFives, thirtyFives, twentyFives, tens, fives, twoAndHalf);
  }
  
  ngOnInit(): void {
  this.bar = 45;
  this.total = 405;
  console.log(this.total);
  }
  
  getDisplayInformation(): boolean {
    if (this.totalIsGreaterThanBar() && this.barIsGreaterThanZero() && this.totalWeightIsValid() && this.totalWeightIsLessThanMax()) {
      this.totalWeights = WeightFormComponent.calculateWeight(this.bar, this.total);
      return true;
    }
  }
  
  totalIsGreaterThanBar(): boolean {
    return (this.total > this.bar);
  }
  
  barIsGreaterThanZero(): boolean {
    return (this.bar >= 0);
  }
  
  totalWeightIsLessThanMax(): boolean {
    return (this.total < 999999);
  }
  
  totalWeightIsValid(): boolean {
    return (this.total % 5 === 0);
  }
  
  has45s() {
   return this.totalWeights.fortyFives !== 0;
  }
  has35s() {
    return this.totalWeights.thirtyFives !== 0;
  }
  has25s() {
    return this.totalWeights.twentyFives !== 0;
  }
  has10s() {
    return this.totalWeights.tens !== 0;
  }
  has5s() {
    return this.totalWeights.fives !== 0;
  }
  has2and5s() {
    return this.totalWeights.twoAndHalf !== 0;
  }
  
  
}

import { Component, Input } from '@angular/core';
import { investmentResultsService } from './investment-results.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input() showControl!: boolean;

  constructor(private investmentResultsService: investmentResultsService) {}

  get getAnnualData() {
    return this.investmentResultsService.getAnnualData();
  }
}

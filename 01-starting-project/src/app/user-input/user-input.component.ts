import { Component, output } from '@angular/core';
import { investmentResultsService } from '../investment-results/investment-results.service';
@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitailInvestment: number = 0;
  enteredAnnualInvestment: number = 0;
  enteredDuration: number = 0;
  enteredExpectedReturn: number = 0;

  showControl = output<boolean>();

  constructor(private investmentResultsService: investmentResultsService) {}
  onSubmit() {
    if (
      this.enteredInitailInvestment <= 0 ||
      this.enteredAnnualInvestment <= 0 ||
      this.enteredDuration <= 0 ||
      this.enteredExpectedReturn <= 0
    ) {
      return;
    }

    this.investmentResultsService.calculateInvestmentResults(
      this.enteredInitailInvestment,
      this.enteredDuration,
      this.enteredExpectedReturn,
      this.enteredAnnualInvestment
    );
    this.showControl.emit(true);
  }
}

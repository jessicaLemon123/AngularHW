import { type annualDataType } from './investment-results.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class investmentResultsService {
  constructor() {}
  annualData: annualDataType[] = [];

  getAnnualData() {
    return this.annualData;
  }

  calculateInvestmentResults(
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number
  ) {
    if (this.annualData.length > 0) {
      this.annualData = [];
    }
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  }
}

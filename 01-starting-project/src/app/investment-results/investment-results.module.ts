import { NgModule } from '@angular/core';
import { InvestmentResultsComponent } from './investment-results.component';
import { CurrencyPipe } from '@angular/common';
@NgModule({
  declarations: [InvestmentResultsComponent],
  imports: [CurrencyPipe],
  providers: [InvestmentResultsComponent],
  exports: [InvestmentResultsComponent],
})
export class InvestmentResultsModule {
  constructor() {}
}

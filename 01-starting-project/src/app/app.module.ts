import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserInputModule } from './user-input/user.input.module';
import { InvestmentResultsModule } from './investment-results/investment-results.module';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [HeaderComponent, AppComponent],
  imports: [BrowserModule, UserInputModule, InvestmentResultsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

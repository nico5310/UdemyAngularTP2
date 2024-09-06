import {Component, EventEmitter, Output} from '@angular/core';
import {InvestmentInput} from "../model/investment-input.model";
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {}

  @Output() calculate = new EventEmitter<InvestmentInput>();
  initialInvestment = '0'
  annualInvestment= '0'
  expectedReturn = '5'
  duration = '10'

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration
    });
  }
}

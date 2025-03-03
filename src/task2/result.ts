import { ITaxCalculator, ITaxStrategy, TaxStrategy } from '@/task2/types'
import * as console from 'node:console'

class TaxStandardStrategy implements ITaxStrategy {
  calculateTax(income: number): number {
    return income * 0.2
  }
}

class TaxReducedStrategy implements ITaxStrategy {
  calculateTax(income: number): number {
    return income * 0.1
  }
}

class TaxZeroStrategy implements ITaxStrategy {
  calculateTax(): number {
    return 0
  }
}

class TaxProgressiveStrategy implements ITaxStrategy {
  calculateTax(income: number): number {
    if (income <= 10) {
      return income * 0.1
    } else if (income <= 50) {
      return 10 * 0.1 + (income - 10) * 0.15
    } else {
      return 10 * 0.1 + 40 * 0.15 + (income - 50) * 0.2
    }
  }
}

class TaxCalculator implements ITaxCalculator {
  private strategies: Record<TaxStrategy, ITaxStrategy> = {
    [TaxStrategy.STANDARD]: new TaxStandardStrategy(),
    [TaxStrategy.REDUCED]: new TaxReducedStrategy(),
    [TaxStrategy.ZERO]: new TaxZeroStrategy(),
    [TaxStrategy.PROGRESSIVE]: new TaxProgressiveStrategy(),
  }

  calculateTax(income: number, type: TaxStrategy): number {
    return this.strategies[type].calculateTax(income)
  }
}

export const task2 = () => {
  const taxCalculator = new TaxCalculator()
  console.log(TaxStrategy.STANDARD, taxCalculator.calculateTax(100, TaxStrategy.STANDARD))
  console.log(TaxStrategy.REDUCED, taxCalculator.calculateTax(100, TaxStrategy.REDUCED))
  console.log(TaxStrategy.ZERO, taxCalculator.calculateTax(100, TaxStrategy.ZERO))
  console.log(TaxStrategy.PROGRESSIVE, taxCalculator.calculateTax(100, TaxStrategy.PROGRESSIVE))
}

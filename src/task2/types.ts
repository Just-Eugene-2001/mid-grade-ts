export enum TaxStrategy {
  STANDARD = 'standard',
  REDUCED = 'reduced',
  ZERO = 'zero',
  PROGRESSIVE = 'progressive',
}

export interface ITaxStrategy {
  calculateTax(income: number): number
}

export interface ITaxCalculator {
  calculateTax(income: number, type: TaxStrategy): number
}

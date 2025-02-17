export class TaxCalculator {
  calculateTax(income: number, type: string): number {
    if (type === 'standard') {
      return income * 0.2
    } else if (type === 'reduced') {
      return income * 0.1
    } else if (type === 'zero') {
      return 0
    }
    return 0
  }
}

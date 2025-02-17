export class Rectangle {
  constructor(
    protected width: number,
    protected height: number,
  ) {}

  setWidth(width: number): void {
    this.width = width
  }

  setHeight(height: number): void {
    this.height = height
  }

  getArea(): number {
    return this.width * this.height
  }
}

export class Square extends Rectangle {
  constructor(side: number) {
    super(side, side)
  }

  setWidth(width: number): void {
    this.width = width
    this.height = width
  }

  setHeight(height: number): void {
    this.width = height
    this.height = height
  }
}

import { IShape } from '@/task3/types'

const testFunction = (rectangle: Rectangle) => {
  rectangle.setWidth(5)
  rectangle.setHeight(10)

  const area = rectangle.getArea()

  if (area !== 50) {
    console.log('Принцип Лисков нарушен')
  } else {
    console.log('Все правильно')
  }
}

export class Rectangle implements IShape {
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

export class Square implements IShape {
  constructor(
    protected side: number,
  ) {}

  setSide(side: number): void {
    this.side = side
  }

  getArea(): number {
    return this.side * this.side
  }
}

export const task3 = () => {
  const rectangle = new Rectangle(4, 8)
  rectangle.setHeight(2)
  rectangle.setWidth(10)
  testFunction(rectangle)
  const square = new Square(5)
  square.setSide(20)

  testFunction(rectangle)
  // testFunction(square) Уже не даст, а для старого варианта квадрата дал бы и провалил тест
}
// Вместо наследования реализовал использование одного общего интерфейса
// Из изначального варианта могли быть проблемы использования методов родителя в наследнике
// Также тут поддерживается принцип инверсии зависимостей(D)

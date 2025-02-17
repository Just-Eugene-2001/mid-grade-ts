export enum ELanguages {
  ru = 'ru',
  en = 'en',
  cn = 'cn',
  fr = 'fr',
}

export interface IItem {
  name: never
  description: never
  count: number
}

export function task6(): undefined {
  /// вывод типизированного объекта IItem
  console.log({})
}

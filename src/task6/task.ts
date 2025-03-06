export enum ELanguages {
  ru = 'ru',
  en = 'en',
  cn = 'cn',
  fr = 'fr',
}

export type TLocalizationField = Record<ELanguages, string>;

export interface IItem {
  name: TLocalizationField
  description: TLocalizationField
  count: number
}

export function task6(): undefined {
  const item: IItem = {
    name: {
      ru: 'Название на русском',
      en: 'Name in English',
      cn: '中文名称',
      fr: 'Nom en français',
    },
    description: {
      ru: 'Описание на русском',
      en: 'Description in English',
      cn: '描述',
      fr: 'Description en français',
    },
    count: 10,
  }

  /// вывод типизированного объекта IItem
  console.log(item)
}

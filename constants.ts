// Селекторы ненадежны, изменение их положения в коде микрофронта приведет к нерабочим тестам
// Разработчикам следует добавить data-test атрибут или аналог.
export const AirCounterSelector =
  '.desktop-impact-items-F7T6E > div:nth-child(2)'
export const WaterCounterSelector =
  '.desktop-impact-items-F7T6E > div:nth-child(4)'
export const EnergyCounterSelector =
  '.desktop-impact-items-F7T6E > div:nth-child(6)'

export const mainUrl = 'https://www.avito.ru/avito-care/eco-impact'

export const backUrl = 'https://www.avito.ru/web/1/charity/ecoImpact/init'

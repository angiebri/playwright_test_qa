import { test, type Page } from '@playwright/test'
import {
  AirCounterSelector,
  WaterCounterSelector,
  EnergyCounterSelector,
  mainUrl,
  backUrl,
} from './constants'
import { mockData2, mockData3, mockData4, mockData5 } from './mockData'

test.describe('Avito tests', () => {
  const selectors = [
    AirCounterSelector,
    WaterCounterSelector,
    EnergyCounterSelector,
  ]

  test.afterEach('close page', async ({ page }) => {
    await page.close()
  })

  // Можно прописать тип ответа с бекенда, но мы его достоверно не знаем, пока пусть будет any
  async function startPageWithData(page: Page, data?: any) {
    if (data) {
      await page.route(backUrl, (route) => {
        route.fulfill({ body: JSON.stringify(data) })
      })
    }
    await page.goto(mainUrl)
  }

  async function screenshotting(page: Page, testcase: number) {
    for (let i = 0; i < selectors.length; i++) {
      const element = await page.locator(selectors[i])
      await element.screenshot({
        path: `./output/testcase_${testcase}_screenshot_${i + 1}.png`,
      })
    }
  }

  test('test 1: отображение счётчиков эковклада у неавторизованного/авторизованого пользователя(со значениями 0)', async ({
    page,
  }) => {
    await startPageWithData(page)
    await screenshotting(page, 1)
  })

  test('test 2: Отображение счётчиков с невалидными значениями у авторизованого пользователя', async ({
    page,
  }) => {
    await startPageWithData(page, mockData2)
    await screenshotting(page, 2)
  })

  test('test 3: Преобразование единиц измерения в счётчиках у авторизованого пользователя', async ({
    page,
  }) => {
    await startPageWithData(page, mockData3)
    await screenshotting(page, 3)
  })

  test('test 4: Окргуление чисел в счётчиках у авторизованого пользователя', async ({
    page,
  }) => {
    await startPageWithData(page, mockData4)
    await screenshotting(page, 4)
  })
  test('test 5: Отображение счётчиков с большими значениями у авторизованого пользователя', async ({
    page,
  }) => {
    await startPageWithData(page, mockData5)
    await screenshotting(page, 5)
  })
})

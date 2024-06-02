import { test, type Page } from '@playwright/test'

test.describe('Avito tests', () => {
  test.afterEach('close pages', async ({ page }) => {
    page.close()
  })

  const selectors = [
    '.desktop-impact-items-F7T6E > div:nth-child(2)',
    '.desktop-impact-items-F7T6E > div:nth-child(4)',
    '.desktop-impact-items-F7T6E > div:nth-child(6)',
  ]

  const data = [
    './data/test2.json',
    './data/test3.json',
    './data/test4.json',
    './data/test5.json',
  ]

  async function mocking(page: Page, dataPath: string) {
    await page.route(
      'https://www.avito.ru/web/1/charity/ecoImpact/init',
      (route) => {
        route.fulfill({ body: JSON.stringify(require(dataPath)) })
      }
    )
    await page.goto('https://www.avito.ru/avito-care/eco-impact')
  }

  async function screenshotting(page: Page, testcase: number) {
    for (let i = 0; i < selectors.length; i++) {
      const element = await page.locator(selectors[i])
      await element.screenshot({
        path: `./output/testcase_${testcase}_screenshot_${i + 1}.png`,
      })
    }
  }

  test('test 1: make a screenshot', async ({ page }) => {
    await page.goto('https://www.avito.ru/avito-care/eco-impact')
    for (let i = 0; i < selectors.length; i++) {
      const element = await page.locator(selectors[i])
      await element.screenshot({
        path: `./output/testcase_1_screenshot_${i + 1}.png`,
      })
    }
  })

  test('test 2: mocks a init and doesnt call api', async ({ page }) => {
    await mocking(page, data[0])
    await screenshotting(page, 2)
  })

  test('test 3: mocks a init and doesnt call api', async ({ page }) => {
    await mocking(page, data[1])
    await screenshotting(page, 3)
  })

  test('test 4: mocks a init and doesnt call api', async ({ page }) => {
    await mocking(page, data[2])
    await screenshotting(page, 4)
  })
  test('test 5: mocks a init and doesnt call api', async ({ page }) => {
    await mocking(page, data[3])
    await screenshotting(page, 5)
  })
})

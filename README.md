# Playwright Test

## Структура проекта
- `output/`: Задание 2 - скриншоты
- `BUGS.md`: Задание 2 - баг-репорты
- `task_1.md`: Задание 1
- `TESTCASES.md`: Задание 2 - тест-кейсы
- `test.spec.ts`: Задание 2 - код с тестами 

## Инструкция по запуску автоматизированных тестов для задания 2

Автоматизированные тесты рекомендуется выполнять на тестовых стендах без ограничений по запросам для конкретного IP, либо использовать proxy.

1. Склонируйте репозиторий
    ```
    git clone https://github.com/angiebri/playwright_test_qa.git
    ```
2. Установите npm и node.js для своей ОС https://nodejs.org/en/download/package-manager/
   
3. Запустите команду в директории склонированного проекта
     ```
    npm install
    ```
4. Проверьте стабильность и скорость интернет соединения, если страница не сможет загрузиться, тесты упадут.
5. Запустите тесты
    ```
    npm test
    ```
    
    

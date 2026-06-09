# TestYandexCrowd2026

Тестовый проект вёрстки. Стек: vanilla HTML5 + современный CSS + JavaScript (ESM).
Сборка на Vite, методология — строгий БЭМ (международная нотация `block__element--modifier`).

## Стек и инфраструктура

- **Сборщик:** Vite (dev-сервер на порту 3000)
- **CSS:** нативный CSS, БЭМ (Two Dashes), кастомные свойства, mobile-first
- **PostCSS:** autoprefixer + cssnano (только в проде)
- **Поддержка браузеров:** browserslist `last 5 versions` + `iOS >= 10` (iPhone 7)
- **Линтеры:** ESLint (flat config, ESM), Stylelint (intl-БЭМ), Prettier
- **Pre-commit:** Husky + lint-staged
- **Базовые стили:** normalize.css (necolas) первым импортом + собственный reset

## Требования

- Node.js 20 LTS
- npm

## Установка

​`bash
npm install
​`

После установки Husky активирует git-хуки автоматически (через скрипт `prepare`).

## Команды

| Команда            | Описание                                         |
| ------------------ | ------------------------------------------------ |
| `npm run dev`      | Дев-сервер на http://localhost:3000 с hot-reload |
| `npm run build`    | Прод-сборка в `dist/` (autoprefixer + cssnano)   |
| `npm run preview`  | Локальный просмотр прод-сборки из `dist/`        |
| `npm run lint`     | Прогон ESLint + Stylelint                        |
| `npm run lint:js`  | Линт JavaScript (ESLint)                         |
| `npm run lint:css` | Линт CSS (Stylelint, intl-БЭМ)                   |
| `npm run format`   | Форматирование всех файлов через Prettier        |

​```

Если коммит упал на pre-commit — прогнать линт, исправить, повторить:

​`bash
npm run lint:css
npm run lint:js
npx stylelint --fix "src/**/*.css"
npx eslint --fix 
​`

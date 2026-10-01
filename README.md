# Universal — News/Magazine Layout

Universal — адаптивная вёрстка новостного сайта в формате онлайн-журнала. Pet-project для портфолио: компонентный HTML, SCSS по БЭМ, интерактив и Gulp-сборка.

## Demo

https://pvo83.github.io/Universal/

## О проекте

Макет медиа-платформы: главный экран, подборки новостей, баннер, статьи, подписка и адаптивная навигация. Фокус на аккуратной вёрстке по макету, корректном отображении на разных разрешениях и поддерживаемой структуре кода.

## Стек

HTML · SCSS (БЭМ) · JavaScript · Gulp · Webpack · Swiper

## Что реализовано

- Адаптивная вёрстка по mobile-first подходу
- Компонентная HTML-структура через `gulp-file-include`
- Стилизация на SCSS с БЭМ
- Интерактив: табы, слайдер, мобильное меню, видео-модалка
- SVG-спрайт для иконок
- Оптимизация изображений: WebP и imagemin
- Favicon и web manifest
- Production-сборка и автодеплой на GitHub Pages

## Особенности

- Исходники в `src/`, production-сборка в `app/` (папка в `.gitignore`, генерируется при `build`)
- Автоматизация: HTML, SCSS, JS, ассеты, dev-сервер

## Запуск локально

```bash
npm install
npm run dev    # dev-сервер с hot reload
npm run build  # production-сборка в папку app/
```

## Структура проекта

```
src/
├── partials/     # HTML-компоненты (gulp-file-include)
├── scss/         # Стили (BEM)
├── js/           # Скрипты
├── img/          # Изображения
└── resources/    # Шрифты, favicon, видео, данные
app/              # Сборка (не в git, появляется после build)
```

## Деплой

После `git push` в `main` проект собирается и публикуется на GitHub Pages через GitHub Actions.

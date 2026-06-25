# Universal — News/Magazine Layout

Адаптивная вёрстка новостного сайта. Pet-project для портфолио.

## Стек

HTML · SCSS (BEM) · Gulp · Webpack · Swiper

## Реализовано

- Адаптивная вёрстка (mobile-first)
- Табы, слайдер, мобильное меню
- Видео-модалка
- SVG-спрайт, оптимизация изображений (WebP, imagemin)
- Автодеплой на GitHub Pages

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
app/              # Сборка (не коммитится, генерируется при build)
```

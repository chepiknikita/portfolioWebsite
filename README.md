# Portfolio Website

Персональный сайт-портфолио, разработанный на **Nuxt 3** + **Vue 3** с серверной частью на базе Nitro, PostgreSQL и Prisma ORM. Поддерживает SSR, кеширование на уровне маршрутов и деплой через Docker.

## Стек технологий

- **Frontend:** Vue 3, Nuxt 3, TypeScript, Tailwind CSS
- **Backend:** Nuxt Server (Nitro), Prisma ORM, PostgreSQL
- **Тестирование:** Vitest
- **Деплой:** Docker, docker-compose

## Запуск

### Локально

Установить зависимости:

```bash
npm install
```

Скопировать и заполнить переменные окружения:

```bash
cp .env.example .env
```

Применить миграции и заполнить базу данных:

```bash
npx prisma migrate deploy
npx prisma db seed
```

Запустить dev-сервер на `http://localhost:3000`:

```bash
npm run dev
```

### Docker

```bash
docker-compose up --build
```

## Сборка для продакшена

```bash
npm run build
npm run preview
```

## Тесты

```bash
npm test
```

# reservations-app

Restaurant Reservations App UI

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Project Usage

In the terminal output find a link to the application. It will look like: http://localhost:5173/ (port can be different).

### User views: 
- http://localhost:5173/createReservation - create reservation view
  - http://localhost:5173/confirmReservation/create - confirmation creation view
- http://localhost:5173/cancelReservation/UUID - cancel reservation view
  - http://localhost:5173/confirmReservation/create - confirmation cancellation view
  - UUID is reservation token (can be taken from database)

### Admin views:
- http://localhost:5173/admin - login page
- http://localhost:5173/admin/menu - admin menu: view reservations for selected day, view free tables for selected day
- http://localhost:5173/admin/menu/tablesOverview - available tables checker view
- http://localhost:5173/admin/menu/reservationsOverview - reservations overview view 

### Home view/Feedback link view
- http://localhost:5173 - home view
  - on the home view there is a feedback form (external Google form)

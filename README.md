Vanilla TS
==========

Created a Web App from scratch without using any library.
This was created using Vite's vanilla ts template.

This was done for interviews' machine coding round.
Please don't use this in production.

---

### How to run this in dev mode?

To start a dev server run

```sh
npm run dev
```

You should be able to access the app on [http://localhost:5173]

### How to run a production build?

To make production build run

```sh
npm run build
```

To run it you can use 

```sh
npm run preview
```

or serve the `dist` folder using any HTTP server.

---

### Features

- Single event listerner for all elements.
- Easily divide the app into multiple components.
- Components can have state local to them.

### Limitations

- Only one app can be created as of now.
- Rendering is not optimized. Hence, each state change will rerender the entire app.
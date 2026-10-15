# Property360

Property management software built with React + Vite.
Developed By The Cybertech 2026

## Run
```
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Where things are
- `src/data.js` : every module's fields, sample data and the sidebar menu (edit here to change forms/columns)
- `src/components.jsx` : form, list, upload, table-editor components
- `src/views.jsx` : dashboard, search, reports, AI assistant, tenant app, owner portal, audit, lifecycle
- `src/App.jsx` : routing, saving, billing run, work-order creation
- `src/styles.css` : theme, sidebar colour (`--sbg`), animations

Data is saved in the browser (localStorage). Use Admin > Audit trail > Reset demo data to clear it. Connect an API in `App.jsx` `save()` for a shared database.

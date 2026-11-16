# LMAV React Website

This project converts the supplied LMAV `index(1).html` page into a React website powered by Vite. The original HTML fragment is parsed into React elements; the original layout, wording, colours, sections, illustrations, published photo sources, navigation and Facebook feed are retained.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

## Build for deployment

Run `npm run build`. Vite creates the production website in `dist/`. Deploy the `dist` folder to Vercel or another static hosting provider.

## Add more actual project photographs

1. Copy approved image files into `public/images/projects/`.
2. Open `src/data/projectPhotos.js`.
3. Add one object per photo using the example in that file.
4. Save; Vite refreshes the page automatically.

Only use genuine, approved photographs of the stated projects. The two published photos already present in the supplied page are retained. The original illustrations remain labelled as illustrations and should not be presented as project evidence. No additional project photographs were invented or substituted.

## Registration form

The current form intentionally remains a front-end preview, as in the supplied HTML. It displays a confirmation message but does not transmit or store personal information. Connect an approved backend before public registration.

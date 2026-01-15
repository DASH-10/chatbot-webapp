# chatbot-webapp-using-Ollama
A web-based chatbot UI with real-time messaging, session management, and extensible integration points for LLM backends.

Modern marketing site with a floating AI chat widget powered by Next.js App Router, Tailwind CSS, and a local Ollama Llama model.

## Idea of the program
This project is a clean, modern marketing website for a restaurant (Omar's Kebab House) with a built-in AI chat assistant. The site presents menu, story, and contact info, while the chatbot answers common questions (menu, halal info, allergens, reservations) using a local Llama model.

## What it achieves
- Presents a branded, multi-page marketing site (Home, Menu, About, Services, Contact).
- Gives visitors a friendly AI concierge for quick answers and reservation prompts.
- Runs fully local for AI responses using Ollama, so it does not depend on a paid cloud API.
- Keeps the UI consistent across pages with shared layout, navigation, and footer.

## How the program works
1) The user opens the website in the browser and sees the floating chat button.
2) The chat widget (`components/ChatWidget.tsx`) collects the message and sends it to the backend API at `POST /api/chat`.
3) The API route (`app/api/chat/route.ts`) adds a system prompt, merges the history, and calls the local Ollama server (`/api/chat`).
4) Ollama responds with a Llama model reply, which is returned to the frontend and shown in the chat.
5) All pages are rendered by the Next.js App Router and styled with Tailwind CSS in `app/globals.css`.

## Tech stack and requirements
**Language and framework**
- TypeScript + React 18
- Next.js 14 (App Router)

**Styling**
- Tailwind CSS + PostCSS

**AI**
- Ollama (local AI runtime)
- Llama model (default: `llama3.1`)

**Runtime**
- Node.js 18.17+
- npm (bundled with Node)

## Project structure
```
app/
  api/chat/route.ts      # Backend chat API that calls Ollama
  layout.tsx             # Shared layout with NavBar, Footer, ChatWidget
  page.tsx               # Home page
  about/page.tsx         # About page
  menu/page.tsx          # Menu page
  services/page.tsx      # Services page (dark theme)
  contact/page.tsx       # Contact and reservation form
  globals.css            # Global styles and Tailwind layers
components/
  NavBar.tsx             # Top navigation
  Footer.tsx             # Site footer
  ChatWidget.tsx         # Floating chat UI
next.config.js           # Next.js config
tailwind.config.ts       # Tailwind config
postcss.config.js        # PostCSS config
tsconfig.json            # TypeScript config
```

## Setup
1) Install dependencies  
```bash
npm install
```

2) Install and pull the local model  
```bash
ollama pull llama3.1
```

3) Configure environment (project root `.env.local`)  
```bash
OLLAMA_BASE_URL=http://127.0.0.1:11434
# optional: override model (default is llama3.1)
# OLLAMA_MODEL=llama3.1
```

4) Start the dev server  
```bash
npm run dev
```
Open http://localhost:3000

## Chat API
- Endpoint: `POST /api/chat`
- Body: `{"message": "Hello", "history": [{ "role": "user" | "assistant" | "system", "content": "..." }]}`
- Success response: `{"reply": "..."}`
- Error response: `{"error": "string", "details": "optional"}`
- Logs: route hits and Ollama errors are logged server-side.

### Quick test (from project root)
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello"}'
```

## How to run in production
```bash
npm run build
npm run start
```

## How to stop (close) the app
- Dev server: press `Ctrl+C` in the terminal where `npm run dev` is running.
- Production server: press `Ctrl+C` in the terminal where `npm run start` is running.
- Ollama: close the Ollama app or run `ollama stop llama3.1`.

## Scripts
- `npm run dev` - start Next.js in development
- `npm run build` - production build
- `npm run start` - run the production build
- `npm run lint` - lint the project

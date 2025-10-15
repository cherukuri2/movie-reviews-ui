🎬 Movie Reviews (AI) — Setup & Deployment Guide

An AI-powered full-stack web app for generating movie reviews using Angular (UI), Spring Boot (API), and OpenAI.

⚙️ 1. Local Development Setup
🖥️ Local UI

Run the Angular app locally:

ng serve --proxy-config proxy.conf.json

🧩 Local API

Run the Spring Boot app locally:

mvn spring-boot:run


Make sure your OpenAI API Key is configured in Eclipse:

Go to: OpenAI API Keys

Add it as an environment variable:

OPENAI_API_KEY=your_api_key_here

🔄 Proxy Configuration

The Angular proxy forwards UI requests to the local backend.

☁️ 2. Deploy API to Render.com
🌍 Deploy Spring Boot Service via GitHub

Hosted API:
👉 https://movie-reviews-api-geea.onrender.com

Deployment dashboard:
👉 Render Deploy Log

Environment Variables:
👉 Render Environment Variables

Variable	Description
OPENAI_API_KEY	Your OpenAI API key
APP_PROVIDER	Default provider (e.g., openai)
APP_MODEL	Default model (e.g., gpt-4o-mini)
JAVA_OPTS	Optional JVM options (e.g., memory tuning)
🧭 Local UI Connected to Render API

In your Angular project, edit:

// environment.ts
export const environment = {
  production: false,
  apiBase: 'https://movie-reviews-api-geea.onrender.com'
};


Now your local UI will call the cloud API deployed on Render.

⚡ 3. Run UI on StackBlitz

Run Angular UI directly in StackBlitz:
👉 StackBlitz App

Connects to API hosted on Render (https://movie-reviews-api-geea.onrender.com).

Pros:

No need to run the UI locally.

Cons:

The UI is not publicly accessible — only works when logged in to the same GitHub account.

🌐 4. Public Access via Ngrok

Publicly expose your local Angular UI using Ngrok.

🪄 Steps

Sign up for Ngrok

Add your auth token (via Git Bash or terminal):

ngrok config add-authtoken <your_token_here>


Run local UI:

ng serve --host 0.0.0.0 --port 4200


Start Ngrok:

ngrok http 4200


Example output:

Forwarding  https://ungifted-woodrow-technologically.ngrok-free.dev -> http://localhost:4200


Add the generated Ngrok URL (e.g. https://ungifted-woodrow-technologically.ngrok-free.dev)
to allowed CORS domains in your Spring Boot API config.

UI URL:
👉 https://ungifted-woodrow-technologically.ngrok-free.dev

Pros:

Anyone can access your local UI via a public URL.

Cons:

UI must be running locally for Ngrok to work.

🚀 5. Host Both UI & API on Cloud

Make the app fully cloud-hosted and publicly accessible.

🌍 Deploy UI to Netlify

Add a production environment file:

// environment.prod.ts
export const environment = {
  production: true,
  apiBase: 'https://movie-reviews-api-geea.onrender.com'
};


Deploy your Angular build folder to Netlify.

Netlify will generate a public URL like:
👉 https://movie-reviews-ui.netlify.app/

Add this new URL to the allowed domains in your Render API to prevent CORS issues.

Pros:

Fully cloud-based — accessible globally

No local dependencies required

✅ Summary of Deployment Options
#	UI Location	API Location	Accessibility	Notes
1	Local	Local	Private	Dev-only setup
2	Local	Render	Semi-public	Useful for testing
3	StackBlitz	Render	Limited	Only accessible to logged-in user
4	Local (Ngrok)	Render	Public	Requires local UI running
5	Netlify	Render	Fully public	Recommended for production/demo
💡 Recommended Production Setup
Component	Platform	URL
UI	Netlify	https://movie-reviews-ui.netlify.app/

API	Render	https://movie-reviews-api-geea.onrender.com

AI Provider	OpenAI	https://platform.openai.com
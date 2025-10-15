Following are different ways this application can be used.

1.
	Local UI
	Local API
	Proxy Conf
	Open API Key in ENV variables in Eclipse	[https://platform.openai.com/settings/organization/api-keys]


2.
	Deploy service to Render.com (through Github)	[https://movie-reviews-api-geea.onrender.com]
		https://dashboard.render.com/web/srv-d3mhjfmr433s73al4a1g/deploys/dep-d3n8atd6ubrc73b729d0
	Add Environment variables in Render.com
		https://dashboard.render.com/web/srv-d3mhjfmr433s73al4a1g/env
	
	Local UI
	Create environment.ts file and add the service URL 
		export const environment = {
		  production: false,
		  apiBase: 'https://movie-reviews-api-geea.onrender.com'
		};
	Connect Local UI to service in Render.com	[OPENAI_API_KEY, APP_MODEL, APP_PROVIDER, JAVA_OPTS]
	
3. Run the UI through stackblitz and point to Render.com URL 'https://movie-reviews-api-geea.onrender.com'
	Stackblitz UI: https://moviereviewsui-oyuh--4200--96435430.local-credentialless.webcontainer.io/
	
	Pros: Local UI does not need to run
	Cons: UI is not accessible for all public. It is accessible on machine where Github is logged-in.
	

4. // Making UI accessible for public [https://ungifted-woodrow-technologically.ngrok-free.dev]

	Signup for ngrok and configure security key through Git Bash
	Run local UI using command 'ng serve --host 0.0.0.0 --port 4200'
	Run 'ngrok http 4200' // This will generate a URL which will internally access the http://localhost:4200
	Add the generated UI URL to be 'allowable domains' in API configuration to avoid CORS error. If changes are pushed to Github, Render.com will auto deploy in 2-3 minutes.
	
	UI: https://ungifted-woodrow-technologically.ngrok-free.dev
	
	
	Pros: Anyone can access the new URL genetad by ngrok.
	Cons: UI app still needs to be running on the local.
	
		$ ngrok http 4200
			ngrok                                                                                                                                                       (Ctrl+C to quit)

			?  Using ngrok for OSS? Request a community license: https://ngrok.com/r/oss

			Session Status                online
			Account                       Rajasekhar Cherukuri (Plan: Free)
			Version                       3.30.0
			Region                        United States (us)
			Latency                       17ms
			Web Interface                 http://127.0.0.1:4040
			Forwarding                    https://ungifted-woodrow-technologically.ngrok-free.dev -> http://localhost:4200
			
			

5. // Making UI and API completely on Cloud AND accessible for public [https://movie-reviews-ui.netlify.app/]

	Add environment.prod.ts file with the Render.com base URL
	Use 'netlify.com' to deploy the UI
	New UI URL is generated and accessible for all: https://movie-reviews-ui.netlify.app/
	Add this new URL to the 'allowed domains' in API. If changes are pushed to Github, Render.com will auto deploy in 2-3 minutes.
	
	Pros: The UI is accessible everywhere.
	
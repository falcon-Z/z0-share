# Z0-Share Frontend

This Repo contains frontend code for Z0-Share A social sharing platform built with MERN stack

#### Source code for API
You could find source code for the backend (API) on [falcon-Z/z0-share-backend](https://github.com/falcon-Z/z0-share-server)

# Project Setup
Built With Next.Js 13 and uses AppRouter for Routing and Navigation. The use case for this
project allowed me to also experiment with Server Actions and Various other new features.
## Setup
Follow these instructions below to get up and running locally
### Clone the Repository
```
   git clone <https://github.com/falcon-Z/z0-share.git
```
### (Optional) Recommend Setting up Volta 
for Node version Management. It automatically picks up
on the version of Node.Js used for Development or you could find the same inside
package.json file under volta section Read More about Volta on [Volta - Getting Started](https://volta.sh)

If you are using Linux or WSL on windows setup volta through the following command
```
  curl '<https://get.volta.sh>" | bash
```

### Install Project Dependencies 
```
  npm i
```

### Setup Environment Variables
> Unfortunately, I couldn't get AWS S3 to work due to some unforeseen circumstances as
a temporary alternate I am using Uploadcare for file storage and retrieval
To acquire Keys from Uploadcare
1. login to [upload care](https://uploadcare.com/)
2. On the Dashboard visit settings → API Keys to acquire Public key and Secret
3. Create a file .env.local on the root directory

### The Following Variables are Required to run the app
```
API_HOST_URI=http://localhost:3002/api/v1 //API Endpoint to access server API's
NEXT_PUBLIC_HOST_URI=http://localhost:3000
NEXT_PUBLIC_UPCARE_PUBLIC_KEY= //Uploadcare API KEY
NEXT_PUBLIC_UPCARE_SECRET=//Uploadcare API Secret
```
### To run the app in Development mode
 > Make sure to start the server before running the following command

```
  npm run dev
```
Once setup app should be running in [localhost](<http://localhost>) port
3000

## Project Structure
Components are Located inside `src/app/_components` where components are then separated by whre they are used for example directory `auth` contains components related to authentication and `feed` for everything being used in the Feed Page UI

## Project Features

-  Form SUbmisions through server Actions
-  Handles likes with Optimistic Update
-  Accessible UI Components with Keyboard navigation
-  Share Posts with Browser Share APi
-  Uploads files through Uploadcare
-  Allows Drag ad Drop FIle Uploads
-  Focus on a CLean Minimal UI
-  Designed with chalenging colors and Design Elements

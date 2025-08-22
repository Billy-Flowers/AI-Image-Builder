# Project Overview
This application takes a user prompt, sends it to the OpenAI API (DALL·E 2), and returns a unique AI-generated image. The image is then uploaded to Cloudinary, and metadata (prompt, author, image URL) is stored in MongoDB. A React frontend enables users to interact with the generator, browse past posts, and share their creations.

# Tech Stack
| Layer        | Tech Used                               |
| ------------ | --------------------------------------- |
| **Frontend** | React, CSS, Axios, React Hooks |
| **Backend**  | Node.js, Express.js, REST API           |
| **Database** | MongoDB for metadata storage            |
| **Cloud**    | Cloudinary for image storage            |
| **AI**       | OpenAI API (DALL·E 2 model)             |

## Homepage
![Image](https://github.com/user-attachments/assets/5947b340-cd1e-41f9-ba51-197d62c386e4) 

## Create Post
![Image](https://github.com/user-attachments/assets/87f81379-afc5-4d92-91c2-9c3e55705c7a)

The Dall-E 2 model is not that great, but it is cheap. 👍

# Getting Started
### Clone the Repository:
```
git clone https://github.com/Billy-Flowers/AI-Image-Builder.git
cd AI-Image-Builder
```

### Set Up Backend:
Navigate to the backend directory.
Install dependencies:
```
npm install
```

### Create a .env file and add your API key:
```
API_KEY=your_api_key_here
```

### Set Up Frontend:
Navigate to the frontend directory.
```
npm start
```
Runs the app in the development mode. 
Open http://localhost:3000 to view it in your browser.

### Start the backend server:
```
node server.js
```
Interact with the frontend by entering text prompts and viewing generated images.


## Deployment
To deploy your application, consider using platforms like Heroku or Vercel. Ensure you configure environment variables and set up the necessary build processes as per the platform's documentation.

## Next Steps
- Enhance the Frontend: Add features like image downloading, prompt history, or user authentication.
- Optimize Performance: Implement caching mechanisms or use a CDN for faster image delivery.
- Expand Model Support: Integrate other AI models or offer users the choice of models for image generation.

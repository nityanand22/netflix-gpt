# Netflix-GPT

- create React App
- Configured TailwindCSS

# Features

- Login/Sign Up
  - Sign In / Sign up Form
  - redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - Movie Suggestions
      - MovieLists \* N
- NetflixGPT

  - Search Bar
  - Movie Suggestion

- created body page , header, Browse, and Login
- then install react-router-dom for browsing normally it provides us createrBrowserRouter in which we write path for routing
- We will build Login Form
- Signup form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to Production
- Create SignUp User Account
- Implement Sign IN User API
- Created Redux Store with userSlice
- Implemented Sign Out Feature
- Update Profile
- BugFix : Sign Up user displayName and profile picture update
- BugFix : if the user is not logged in Redirect /Browse to Login page and vice-versa
- Unsubscribed to the onAuthStateChanged callBack
- Add hardcoded values to the constants file
- Register TMDB API & create an app & get access token
- Get data from TMDB now playing movies List API
- Custom hook for Now Plating Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContainer and Secondary container
- Fetcch Data for Trailer Video Data
- Embedded the youtube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- Build Movie Card
- Tmdb image CDN URL
- Made the browser page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT Search Button in the Header
- GPT Search Page
- GPT Search Bar
- (** Bonus **) Multi-Language Feature in our App
- (While adding the openai in the frontend , our secretkey will be leaked which is not allowed by the browser and it will throw error so we need to true the dangerouslyAllowBrowser in the openai.js for temporary)

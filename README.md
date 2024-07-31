Overview:
The Planting by Zones app allows users to discover their local hardiness zone and access a tailored planting calendar by entering a zipcode. Using HTML for structure and JavaScript for frontend functionality, the app integrates a third-party API to fetch and display zone-specific information. The responsive UI is built with CSS and Bootstrap.

Key Features:

1. Zipcode Input: Users can enter a zipcode to fetch the corresponding hardiness zone and planting calendar.
2. Planting Calendar: Displays optimal planting times based on the fetched hardiness zone data.
3. External Links: Provides links to external seed websites for more detailed plant information.
4. NavBar: Includes a search bar for zipcode input and a general hardiness zone map for reference.
5. Responsive UI: Built using Bootstrap for a mobile-friendly and responsive design.

Data Source: third-party API
https://rapidapi.com/fireside-worldwide-fireside-worldwide-default/api/plant-hardiness-zone/

Website: https://planting-by-zones.vercel.app/

Technologies Used:

1. HTML: Structure for the web application.
2. JavaScript: Frontend logic for fetching data from the API and updating the UI.
3. Bootstrap: UI framework for responsive design components and layout.
4. Third-Party API: Utilizes the Plant Hardiness Zone API from RapidAPI.
5. CSS: Styling to enhance the user interface and experience.
6. ESLint: JavaScript code formatting and linting.
7. Prettier: Tool for code formatting.
8. Modal: Complex UI pattern for displaying details.
9. Search Functionality: Feature for searching items.
10. Cross-Browser Compatibility: Ensures the app works in Chrome, Firefox, Safari, Edge, and Internet Explorer 11.
11. Deployment: Deployed via GitHub Pages.

Setup Instructions:

1. Install Node.js and npm, if not already installed.
2. Clone this repository by running: git clone https://github.come/leanneduyck/planting-by-zones.git, then run: cd planting-by-zones
3. Install dependencies by running: npm install
4. Integrate the API
   a. Sign up in https://rapidapi.com/
   b. Obtain an API key
   c. In .env file, add API_KEY
5. Start local development server by running: npm start
6. Build the app by running: npm run build

Github: To create new repo:

From project directory in terminal run: git init
Run git commit -m "first commit"
Run git branch -M main
From GH page, go through process of adding new repo, then use https it gives and run: git remote add origin https://github.com/leanneduyck/chat.git
git push -u origin main
To push:

Run: git add .
Run: git commit -m "Your commit message"
Run: git push

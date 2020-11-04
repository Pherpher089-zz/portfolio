import PotluckPlannerThumbNail from "../imgs/PotluckPlannerThumbNail.jpg";
import StayAtHomeMomsThumbNail from "../imgs/StayAtHomeMomsThumbNail.jpg";
import BucketListThumbNail from "../imgs/BucketListThumbNail.jpg";
import BlownSaveThumbNail from '../imgs/BlownSavePodcastThumbNail.jpg'
const projectData = {
	projects: [
		{
			id: 0,
			name: "The Blown Save Podcast Site",
			img: BlownSaveThumbNail,
			description:
				"The official site for The Blown Save Podcast. This site was created to act as a central hub for the podcast's many different host sites. Much more to come for this website.",
			techUsed: [
				[
					"React.js",
					"React Hooks",
					"Sass",
				]
			],
			responsibilities:
				"I consulted with the client to pinpoint their needs for this project and then followed up with wire frames and design mockups. After that, I delivered an MVP for a second round of feedback. At the final stage, I expanded the product to the clients intended vision. This took several rounds of critique, feedback, and trial and error.",
			links: ["https://www.theblownsavepodcast.com/", "https://github.com/Pherpher089/The-Blown-Save", ""],
		},
		{
			id: 1,
			name: "Potluck Planner",
			img: PotluckPlannerThumbNail,
			description:
				"An app for planning and organizing potlucks. Users can create potlucks with desired food items and invite others to attend. As an attendee, users can confirm or deny attendance as well as claim food ",
			techUsed: [
				["React.js", "Redux", "React-Router", "Axios", "Sass"],
				[
					"Node.js",
					"Knex.js",
					"Bcrypt.js",
					"Cors Middleware",
					"Express.js",
					"MySql/PostgreSQL",
				],
			],
			responsibilities:
				"I built out the front end in React. Using Redux as my state management and React- Router to organize the website on one page. With Redux, I set up all of the routes to communicate with the API and set the state of the application. I also built the backend for this application. With Knex.js as a DBMS, I created the database in an organized and normalized manner. I utilized express to create the server and set up the API. I created all of the routes using Express as well. I set up authentication for user accounts using JWT's. Finally I styled the front end using Sass.",
			links: [
				"https://potluck-planner-app.netlify.app/",
				"https://github.com/Pherpher089/bw-potluck-planner-pt-fe",
				"https://github.com/Pherpher089/Potluck_Planner_Backend",
			],
		},
		{
			id: 2,
			name: "Bucket List App",
			img: BucketListThumbNail,
			description:
				"This is the back end of the Bucket List App. This API allows all CRUD operations necessary for creating and managing several bucket lists per user. The API also handles authentication for the front end using JWT. The database schema is perfectly normalized.",
			techUsed: [
				[],
				[
					"Node.js",
					"Knex.js",
					"Bcrypt.js",
					"Cors Middleware",
					"Express.js",
					"MySQL/PostgreSQL",
					"JWT Authentication",
				],
			],
			responsibilities:
				"My part of this project included setting up routes for the API. Building middleware for authorized routes.Developing and implementing database schema.",
			links: ["", "", "https://github.com/Pherpher089/backend"],
		},
		{
			id: 3,
			name: "Stay at Home Moms",
			img: StayAtHomeMomsThumbNail,
			description:
				"This is the landing page for the Stay at Home Moms web app. The goal was to showcase skills in UI using basic front end technologies.",
			techUsed: [
				[
					"HTML 5",
					"CSS",
					"JavaScript ES6",
					"Responsive Design Techniques",
				],
				[],
			],
			responsibilities:
				"I was the only developer on this project. It was my first fully functioning, multi-page site. After wire-framing the site, I organized the HTML into a functional hierarchy. Once the markdown was laid out, I styled the site to be responsive at 3 separate break points in width.",
			links: [
				"https://stay-at-home-moms-landing-page.netlify.app/",
				"https://github.com/a-to-z-experiences-team/build-aToz-UI-2",
				"",
			],
		},
	],
};
export default projectData;

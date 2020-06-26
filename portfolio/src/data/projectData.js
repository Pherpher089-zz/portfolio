import PotluckPlannerThumbNail from "../imgs/PotluckPlannerThumbNail.png";
import StayAtHomeMomsThumbNail from "../imgs/StayAtHomeMomsThumbNail.png";
import BucketListThumbNail from "../imgs/BucketListThumbNail.png";
//import MotherBoard from "../imgs/MotherBoard.png";

const projectData = {
	projects: [
		{
			id: 0,
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
		// {
		// 	id: 1,
		// 	name: "Groovn Music",
		// 	img: MotherBoard,
		// 	description:
		// 		"A music recommendation app. Groovn music generates a recommended playlist for users based on their liked songs on their Spotify account",
		// 	techUsed: [
		// 		[
		// 			"React.js",
		// 			"React Hooks",
		// 			"React Context API",
		// 			"Apollo/GraphQL",
		// 		],
		// 		[
		// 			"Node.js",
		// 			"GraphQL",
		// 			"Mongo Data Base",
		// 			"Passport.js(Spotify strategy)",
		// 		],
		// 	],
		// 	responsibilities:
		// 		"My contribution to this project besides project planning, was the front end.I set up the React app with routes and the context.",
		// 	links: ["", "https://github.com/Pherpher089/groovn-music-fe", ""],
		// },
		{
			id: 1,
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
			id: 2,
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

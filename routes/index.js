/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require("keystone");
var middleware = require("./middleware");
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre("routes", middleware.initLocals);
keystone.pre("render", middleware.flashMessages);

// Import Route Controllers


// Setup Route Bindings
exports = module.exports = function(app) {
	// Views
	app.get("/", function(req, res) {
		// Render some simple boilerplate html
		function renderFullPage() {
			// Note the div class name here, we will use that as a hook for our React code
			// We are also adding the bundled javascript code
			return `
            <!doctype html>
            <html>
                <head>
                    <title>C + Lab</title>
                </head>
                <body>
                    <div class="react-container">
                    </div>
                    <script src="bundle.js"></script>
                </body>
            </html>
            `;
		}
		// Send the html boilerplate
		res.send(renderFullPage());
	});

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
};

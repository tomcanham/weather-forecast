# React.js Weather Application

This is a single page React.js application which uses the API at http://openweathermap.org to display a graphical five day forecast for a selected city.

This application uses Node.js to both serve the static content, and build the client application. Note that a fairly recent version of Node should be used. I would recommend at least 9.x.

To run this, change into the "server" subdirectory, run ```npm install```, and then type ```node .``` to start the server.

The Node.js server merely serves the compiled assets in the client/dist directory on port 8080. To rebuild the client app,change into the "client" subdirectory, run ```npm install```, and then ```npm run build```. Then, follow the server instructions above.

# Improvements

Here are some potential improvements to this code.

* Tests! We need some tests, preferably using the Jest test suite, for the client code. The server code is too simple to really need testing.
* Cleanup and refactoring. There are a lot of locations where the code could be tidied up or refactored. The CSS is a bit messy right now, and could use some cleaning. Additionally, lint rules should be set up.
* Styling tweaks. The app is not a pixel-perfect recreation of the client.
* One bit of clarity; what is the number underneath the daily temperature figures?
* Perhaps the app could auto-refresh?
* Better styling for error messages!
* It might be better to refactor this to use Redux.js, but for such a simple app, it may not be required.

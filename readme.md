# Special Notes - READ THESE

- The node portion (server folder) uses ES6 syntax (import/export) and therefore does not have access to "\_\_dirname". This causes an issue when using webpack as most webpack configs use the \*\*dirname inside of the path. Therefore a workaround was needed. Checkout the helper folder and webpack config to see what this looks like in ES6 syntax. Furthermore, this was developed on a windows machine and the work around might not work on a mac due to the way filepaths are handled on each. If you get an error when building checkout the webpack files and adjust.

- CSSBaseline from Material UI was used to reset the margin to 0px. It has to wrap the components to do it.

# New Project In Progress

Please forgive the horrible code. Finding examples for connecting to a database without an ORM is extremely hard when it comes to javascript. A lot of experimentation was needed.

# FIXES TODO:

- [] Go back and update database schema for possible foreign key constraints
- [] get .env vault and use it for future projects
- [] Delete mysqltest.js and clean up backend to run seed on dev,
- [] Check if mysql closes out connection after a query

- Tomorrow's links
  https://www.youtube.com/watch?v=r8Dg0KVnfMA
  https://tanstack.com/query/latest/docs/react/examples/react/simple
  https://mui.com/x/react-data-grid/
  https://axios-http.com/docs/post_example
  https://www.freecodecamp.org/news/how-to-integrate-material-ui-data-grid-in-react-using-data-from-a-rest-api/

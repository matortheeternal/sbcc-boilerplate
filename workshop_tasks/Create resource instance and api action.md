## Create a new insance of your resource 

1. In the command prompt, enter psql -U postgres
2. Then enter \c sbcc_development to connect to your database.
3. Use an SQL insert command to insert a new row of your resource into the database.  eg: Insert into shapes (name, corners, sides) values ('Circle', 0, 1);
4. view the elements in your table with an SQL select statement.  eg: select * from shapes; You can insert more rows if you want!
Let's create an api action to render the resource to the frontend
1. copy  backend/actions/cars.js and name the copy \<YourResource\>.js
2. Change all instances of cars to your table name
3. Start your server with npm start and visit localhost:4000/api/v1/\<YourResource\> - you should see your data!

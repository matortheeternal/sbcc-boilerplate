## Let's create a new resource!

1. Close your server with Ctrl+C
2. Choose some kind of resource you want to add - it could be anything, "pets", "people", "shapes", use your imagination!
3. Create a new file in db/migrations called 01-create\<YourResourceName\>.js
4. Copy the content of the db/migrations/00-createCars.js file into your new filter
5. Change the name of the table and the columns to what you want for your new resource.
6. Run npm run db:migrate
7. Read the output of the console to see if your table was created correctly.
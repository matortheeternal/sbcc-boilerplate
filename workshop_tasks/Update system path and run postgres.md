## Updating System Path
1. Open start menu
2. Type "Edit env" and press enter (Edit environmental variables for your account)
3. Select the Path variable
4. Click Edit
5. Click New
6. Enter C:\SBCC\apps\pgsql\bin

## Running Postgres Database
1. Open a new cmd window.
2. Type set PGDATA=C:\SBCC\apps\pgsql\data
3. Type postgres
4. In a different cmd window, type createuser -s postgres
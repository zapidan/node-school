##express works
Practice problems with solutions for [Node School express works][express-works]

Each level is contained in a folder with the solution and problem.

Node School runs in the terminal. You will need npm package manager installed, then run

```
npm install -g express-works
```

To use Node School run `express-works`

Install the dependencies from package.json by running
```
npm install
```

When selecting an exercise, if there is an error referring to missing workshopper, make sure to add the dependency:

Edit the package.json for the project module in 
`/usr/local/lib/node_modules/expressworks/package.json`

And add the following dependency:
```
"workshopper-exercise": "^2.3.0"
```

To run all the solutions execute the script *run_all.sh*
[express-works]: http://nodeschool.io/#workshoppers
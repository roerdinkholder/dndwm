#### To initialize the project, run the following commands:
* npm install

* * *

#### To build the project, run the following command:
* npm run build

* * *

#### To re-build the bundles on file changes, run the following command:
* npm run watch

* * *

#### To host the client project on your machine (http://localhost:8080) using Static webserver:
* npm install node-static -g
* static client --gzip

* * *

#### Troubleshooting 'npm run watch'
* The command uses npm-watch under the hood. A few things can go wrong here:
        * You need to have nodemon installed system-wide (npm install nodemon -g)
        * npm-watch@0.0.1 does not support uncommon file types, such as .less. A branch has been made to fix this, but at the time of writing it has not yet been merged into the master branch.
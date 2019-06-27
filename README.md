### Step By Step Build Guide ###

This is an step by step guide for Mac OS users to setting up this project.

# Step 1： Install Node and npm # 
This guide highly recommends you install Homebrew for install other packages like Node.js and MongoDB, to install Homebrew, please open your terminal then run:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

you can run below to check did you install Homebrew successfully
```
brew update
```

After instal Homebrew successfully, you can install Node.js now, please run

```
brew install node
```

then please run 

```
brew install npm
```

After that ,you can run 
```
node -v
```
and
```
npm -v
```
to check your node and npm version, which also means you installed them successfully.

# Step 2： Install mongoDB #
Use Homebrew to install mongoDB, run
```
brew install mongodb
```

then create the default mongoDB database location, run
```
mkdir -p /data/db
```
for make sure that `/data/db` director has the right permissions, please run
```
sudo chown -R `id -un` /data/db
```
then input your password because it is a sudo command.

then go to your mongodb installed directory, for checking it, by running:
```
brew info mongodb
```
normally, the Homebrew install mongdb at this directory: `/usr/local/Cellar/mongodb/{4.0.0}`
so please change your directory there:
```
cd /usr/local/Cellar/mongodb/{4.0.0}/bin
```
then run 
```
./mongod
```

If everything good, you will see similarly information at your terminal window:
```
2018-08-03T15:06:37.154+1000 I CONTROL  [initandlisten]
2018-08-03T15:06:41.915+1000 I FTDC     [initandlisten] Initializing full-time diagnostic data capture with directory '/data/db/diagnostic.data'
2018-08-03T15:06:41.926+1000 I NETWORK  [initandlisten] waiting for connections on port 27017
2018-08-03T15:06:43.270+1000 I CONTROL  [free_mon] Free Monitoring is Enabled. Frequency: 60 seconds
```

After that, please OPEN A NEW TERMINAL WINDOW then run:
```
mongo
```
to run the Mongo shell, you will see similarly information at your terminal window:
```
MongoDB shell version v4.0.0
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 4.0.0
```

then you can try some simple calculating stuff to make sure the Mongo shell is running, like type " 1 + 1 " and it will return the result to you.


# Step 3： Build the project at localhost #
Before this step, please make sure you are running mongoDB.

Clone this project then change your terminal direcotry to the project.

For developmenting, please make sure the `NODE_ENV` is `development`, not `production`.

You don't need `MONGO_URI` in the development enviroment, so please delete it if it existed.

then install the project
```
npm install
```
at the project root directory, this may takes 5 mins.
```
compile the project
```
npm run compile
```
then you can run the project in the localhost
```
npm start 
```
Normally, everything will be good, and you may see below information at your terminal:
```
------------------------------------------------
KeystoneJS Started:
jiangren is ready on http://0.0.0.0:3000
------------------------------------------------
```

then you can go to Chrome and type `localhost:3000` to view the project. 


### How to build project ###

```
npm run build
``` 
* .env

### How to access dashboard ###

* /keystone
* account: info.cpluslab@gmail.com
* passwoard: C+Lab2018

### Reference ###

http://keystonejs.com/docs/
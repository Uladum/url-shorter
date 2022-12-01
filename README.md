# URL Shorter

URL Shorter project API linked to the frontend of [Carlos Sánchez Milán](https://github.com/Carlsm92), which consists of shortening URLs.

## Installation

Install Node version 19.1.0 or higher.

Run the following commands to start the development environment in one terminal:

```
npm install

npm run dev:tsc
```

And the following command in another terminal:

```
npm run dev
```

## Typescript installation

Run the following commands in one terminal:

```
npm init -y
npm i -D typescript tslint

tsc --init
```

On file "tsconfig.json" uncomment the following properties:

- sourceMap
- moduleResolution

And change the "outDir" valor:

```
"./"

to

"./dist"
```

Now, initiate the "tslint" with the following command:

```
./node_modules/.bin/tslint --init
```

And finally, on tslint.json, add the following info to rules key:

```
"no-console": false
```
# User Information Table

This is a basic app which shows user information. It consists of functionalities such as pagination, sorting data by name and email and selecting number of visible rows in a page.<br>
This is made on React, Redux, Redux-thunk bundled by Webpack(Not another CRA app).

## Directory Structure

```
project
│---README.md
│---.babelrc
|---.eslintrc
|---App.jsx
|---package.json
|---index.js
|---yarn.lock
|---webpack.config.js
|
└───public
    |---index.html
    └───assets
        |---cancel.png
        |---chevron-down.png
└───src
	└───actions
        |---filter.js
        |...
	└───components
		│---Table.jsx
		│---Row.jsx
		|...
	└───constants
	└───containers
		|---Pagination.jsx
		|---UserDetailsCard.jsx
	└───less
		|---index.less
        |---normalize.less
        |...
	└───reducers
        |---userData.js
        |---pagination.js
        |....
	└───thunks
        |---user.js
	└───utils
	└───store
```

## Getting Started

1. Clone the project.
2. cd into `Tabular`.
3. Run `yarn` and wait for all the dependencies to install.
4. Run `yarn start` to start the project.

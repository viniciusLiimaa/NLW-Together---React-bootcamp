# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# Additionals information (own notes):
## Sass
1. `npm intall node-sass@5.0.0`

## React router dom
[React router dom](https://reactrouter.com/web/guides/quick-start) is being used to handle different components as pages and show them in the browser.
1. `yarn add react-router-dom`
2. `yarn add @types/react-router-dom -D` (In order to use it with typescript)

### How to navigate through pages with react router dom?

#### Setting the app module
The modules involved in the routing process must be encapsulated inside `<BrowserRouter>` tags, as follows:
```
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/rooms/new" component={NewRoom}/>
    
    </BrowserRouter>
  );
}
```

##### Link (when using an anchor tag)
1. `import { Link } from 'react-router-dom';`
2. Add a link as you would with a <a> tag: `<Link to="/">Click here</Link>`. The property `to` indicates the page where you want to go.

##### useHistory (when using a button)
1. `import { useHistory } from 'react-router-dom';`
2. Create a function that redirects the user to the new page:
```
  function navigateToNewRoom() {
    useHistory().push('/rooms/new')
  }
```
3. Assign it to the button through `onClick`: `<button onClick={navigateToNewRoom} className="create-room">`

## React context
1. `import { createContext } from 'react';`
2. `export const TestContext = createContext('');`
3. Encapsulate components that must watch for context value, as follows:
```
<BrowserRouter>
  <TestContext.Provider value={'Teste'}>
    <Route path="/" exact component={Home}/>
    <Route path="/rooms/new" component={NewRoom}/>
  </TestContext.Provider> 
</BrowserRouter>
```
4. In order to listen for the context value in the desired module, do as follow:
```
import { useContext } from 'react';
const value = useContext(TestContext)
```
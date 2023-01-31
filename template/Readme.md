
There's a few items that still need to be cleaned up but the basics are there. Not everything
inside of the package.json file is needed either, some of the libraries need to be removed.

There are no unit tests at the moment.

Linting is kind of messy.

This uses Redux Toolkit https://redux-toolkit.js.org

Use the React Native Debugger, the standalone version works better than the website version https://reactnative.dev/docs/debugging

Keep your "Screen" components simple, the complex stuff should be the components inside of that.

Style your components with styled-components, it makes styling much easier and uses just regular CSS.

Style/Layout components using flex as much as possible.

Use the node version inside the .node-version and .nvmrc files.

Keep ALL your logic inside of the /src directory. It'll make upgrading to different React Native versions easier.

Keep React Native logic and Native logic in different repos. This is a React Native app, install components using yarn or npm.
Even Native components you created.
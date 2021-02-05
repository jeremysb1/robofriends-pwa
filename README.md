# robofriends-pwa

Previously, I added PWA capabilities to a react app

Now, I am testing the app with:

1. [Enzyme](https://enzymejs.github.io/enzyme/) to test the components output (the functions are working correctly by rendering the data I want)
2. [Snapshot testing ](https://jestjs.io/docs/en/snapshot-testing) for the UI components w/o a browser. 

## Dependencies

To run the project:

1. Clone this repo
2. Run `npm install`
3. Run `npm start`


To test with Enzyme: 

run 'npm i --save-dev enzyme enzyme-adapter-react-16'

To test with Snapshot:

1.  I created test files in the same folder with the components.
2.  used the toMatchSnapshot() method like the example [here](https://jestjs.io/docs/en/snapshot-testing)


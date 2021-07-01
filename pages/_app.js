import '../styles/globals.css'
import React from "react";
import App from 'next/app'
import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux'
import reducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const MyApp = ({ Component, store }) => {
  return (
      <Component></Component>
  )
}

const configureStore = (initialState, options) => {
  const middlewares = [];
  const enhancer = process.env.NODE_ENV === 'production' ?
    compose(applyMiddleware(...middlewares)) : 
      composeWithDevTools(
        applyMiddleware(...middlewares)
      )
  const store = createStore(reducer, initialState, enhancer);
  return store;
}


export default withRedux(configureStore)(MyApp);

// class MyApp extends App {
//   render() {
//     const {Component, pageProps} = this.props
//     return (
//         <Component {...pageProps}></Component>      
//     );        
//   }
// }

// export default MyApp

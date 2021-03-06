import React, { Component, useReducer } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/eventHandlers/EventBind';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/formHandling/Form';
import LifecycleA from './components/lifecycleMethods/LifecycleA';
import Table from './components/fragments/Table';
import RefsDemo from './components/refs/RefsDemo';
import FRParentInput from './components/forwarding Refs/FRParentInput';
import PortalDemo from './components/portals/PortalDemo';
import Hero from './components/errorBoundary/Hero';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import User from './components/renderProps/User';
import ClickCounter from './components/renderProps/ClickCounter';
import HoverCounter from './components/renderProps/HoverCounter';
import PostList from './http-react/PostList';
import PostForm from './http-react/PostForm';
import HookCounter from './hooks/HookCounter';
import HookCounterTwo from './hooks/HookCounterTwo ';
import HookObject from './hooks/HookObject';
import HookArray from './hooks/HookArray';
import HookMouse from './hooks/HookMouse';
import MouseContainer from './hooks/MouseContainer';
import DataFetching from './hooks/DataFetching';
import UseReducerCounter from './hooks/UseReducerCounter';
import UseReducerCounterComplex from './hooks/UseReducerCounterComplex';
import UseReducerMultipleCounter from './hooks/UseReducerMultipleCounter';
import ComponentA from './hooks/useReducerWithUseContext/ComponentA';
import ComponentB from './hooks/useReducerWithUseContext/ComponentB';
import ComponentC from './hooks/useReducerWithUseContext/ComponentC';
import DataFetchingOne from './hooks/fetchingDataWithUseStateAndUseReducer/DataFetchingOne';
import DataFetchingTwo from './hooks/fetchingDataWithUseStateAndUseReducer/DataFetchingTwo';
import ParentComponent from './hooks/useCallbackHook/ParentComponent';
import Counter from './hooks/useMemoHook/Counter';
import FocusInput from './hooks/useRefHook/FocusInput';
import HookTimer from './hooks/useRefHook/HookTimer';
import DocTitleOne from './hooks/customHook/DocTitleOne';
import DocTitleTwo from './hooks/customHook/DocTitleTwo';
import CounterOne from './hooks/customHook/CounterOne';
import CounterTwo from './hooks/customHook/CounterTwo';
import UserForm from './hooks/customHook/UserForm';

export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

function App() {
  return (
    <div className="App">
      <UserForm />
    </div >
  )
}

export default App;

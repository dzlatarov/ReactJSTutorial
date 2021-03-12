import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/eventHandlers/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/formHandling/Form';
import LifecycleA from './components/lifecycleMethods/LifecycleA';
import Table from './components/fragments/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/refs/RefsDemo';
import FocusInput from './components/refs/FocusInput';
import FRParentInput from './components/forwarding Refs/FRParentInput';
import PortalDemo from './components/portals/PortalDemo';
import Hero from './components/errorBoundary/Hero';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import User from './components/renderProps/User';
import ClickCounter from './components/renderProps/ClickCounter';
import HoverCounter from './components/renderProps/HoverCounter';
import Counter from './components/renderProps/Counter';
import ComponentC from './components/context/ComponentC';
import { UserProvider } from './components/context/UserContext';
import PostList from './http-react/PostList';
import PostForm from './http-react/PostForm';
import HookCounter from './hooks/HookCounter';
import HookCounterTwo from './hooks/HookCounterTwo ';
import HookObject from './hooks/HookObject';
import HookArray from './hooks/HookArray';
import HookMouse from './hooks/HookMouse';
import MouseContainer from './hooks/MouseContainer';
import DataFetching from './hooks/DataFetching';


class App extends Component {
  render() {
    return (
      <div className="App">
        <DataFetching />
      </div>
    );
  }
}

export default App;

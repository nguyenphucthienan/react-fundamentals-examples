import React from 'react';

import HelloWorld from './components/hello-world/hello-world.component';
import Hello from './components/hello/hello.component';
import Project from './components/project/project.component';
import ProjectFunctional from './components/project-functional/project-functional.component';
import Counter from './components/counter/counter.component';

import './App.scss';

function App() {
  return (
    <div className='app'>
      <Hello />
    </div>
  );
}

export default App;

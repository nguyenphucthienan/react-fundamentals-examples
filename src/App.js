import React from 'react';

import HelloWorld from './components/hello-world/hello-world.component';
import Project from './components/project/project.component';
import ProjectFunctional from './components/project-functional/project-functional.component';

import './App.css';

function App() {
  return (
    <div className='app'>
      <Project name='Elsevier' />
    </div>
  );
}

export default App;

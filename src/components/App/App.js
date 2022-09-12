import React from 'react'
import List from '../Util/List'

const bodyContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
    padding: '10px'
}

const todoListContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'aqua',
    borderRadius: '10px',
    width: '600px',
    boxShadow: '0 0 10px 0 rgba(255,255,255,.5',
}


function App() {
  return (
    <div style={bodyContainer}>
        <div style={todoListContainer}>
            <h1>Accio Todo</h1>

            {/* LIST */}
            <List />
        </div>
    </div>
  )
}

export default App
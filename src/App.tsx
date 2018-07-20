import * as React from 'react'
import './App.css'

import logo from './logo.svg'
import ApiClient from './clients/ApiClient'
import { Note } from './types/Note'
import CreateNote from './components/Notes/CreateNote'

class App extends React.Component {
  state = { notes: [] }
  async componentDidMount() {
    await this.getNotes()
  }

  async getNotes() {
    try {
      const results = await ApiClient.get('/notes')
      this.setState({ notes: results.data })
    } catch (e) {
      console.error(e)
    }
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <CreateNote />
        {this.state.notes.map((note: Note) => (
          <div key={note.noteId}>
            {note.noteId} - {note.temperature}
          </div>
        ))}
      </div>
    )
  }
}

export default App

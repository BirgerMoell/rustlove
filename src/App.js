import React from 'react'
import ferret from './ferret.png'
import './App.css'

let rustLove = [{
  'name': true
}]

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={ferret} className='App-logo' alt='logo' />
        <p>
          Things we love about Rust
        </p>

        <a target='_blank' href='https://doc.rust-lang.org/book/'><h2>The book</h2></a>
        <a target='_blank' href='https://www.rust-lang.org/what/wasm'><h2>Webassembly</h2></a>
        <a target='_blank' href='https://gitlab.com/solrs/secret-santa'><h2>Secret Santa</h2></a>

      </header>

    </div>
  )
}

export default App

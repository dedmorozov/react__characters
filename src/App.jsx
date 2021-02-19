import React, { Suspense } from 'react';
import { CharactersList } from './components/CharactersList/CharactersList';

import { getApi } from './components/api';

import './App.scss';

class App extends React.Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    getApi('/people/').then(characters => this.setState({
      characters: characters.results,
    }));
  }

  render() {
    const { characters } = this.state;

    return (
      <>
        <header className="header">
          <div className="header__title">
            <h1>Characters</h1>
          </div>
        </header>

        <main className="content">
          <Suspense fallback={<h1>Loading characters...</h1>}>
            <CharactersList characters={characters} />
          </Suspense>
        </main>
      </>
    );
  }
}

export default App;

/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { CharactersCard } from '../CharactersCard/CharactersCard';

const searchImage = characterName => window.open(
  `https://google.com/search?q=${characterName}`,
  '_blank', 'noopener, noreferrer',
  console.log(`I found ${characterName} at your request, Master`),
);

export const CharactersList = ({ characters }) => (
  <>
    <ul className="content__list list">
      {characters.map(char => (
        <li key={char.created} className="list__item">
          <CharactersCard
            name={char.name}
            birthYear={char.birth_year}
            gender={char.gender}
            openInNewTab={() => searchImage(char.name)}
          />
        </li>
      ))}
    </ul>
  </>
);

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
};

CharactersList.defaultProps = {
  characters: [],
};

/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';

import './CharactersCard.scss';

const maleAvatar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Male_Avatar.jpg/1200px-Male_Avatar.jpg';
const femaleAvatar = 'https://www.islandhospital.com/hubfs/female-1.jpg';
const noAvatar = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAGFBMVEX////r6+v6+vry8vL19fXv7+/8/Pz09PRBDxXVAAAEdElEQVR4nO3cgWLiIBAEUI1J/P8/vnrt2Xqm7Myys1C78wHgk0AIkJzOL5LT+fQSKchsKchsKchsKchsKchsKchsyYHs+ipkkGVdr9v2ONPetu26LoukPgVkWS/b8TPDHbSGa6Ih+9o2fNFcQzGhkOVCPtVd1rC64yB4WzxagtolCrKzjfGZLaRZYiCLqzE+E0CJgHS0RhwlALL2M96ydfaVbkjvVfWZy1DINYpxS0+j9EH2sOZ4T0ejdEGWWMZbNvf0sgcS08v/i1fSAQkYdI/iHIj9EJHDK3FDZA6nxAsROnwSJ0TqcEl8kNDb4FH4W6MLIhl3H0OPwh7IrnectwxI8LzkOOxsxQERd/R/ITs8D+EmWH8Xsj6yck/1XDfhIQziefDZV7hBuW5CQ+Dfcfn2H0Ubhrq4WAh6YbV/BEhRQrBfYA850K2IaRISgjUIcl+GHi51EKR2tJMCZRFNwkGQBsHvZLaEGLg4CDBkMXdkW4JPHjlIrAOQ4MVREHuoIed69vRTA7EvBc4B/DVwd2cg9v/HPw9Z/w18bTEQ8+9zLBRa4yB8rTIQc8ziHXaToHNgBmLV6VrGsZoZvVoJiNlFPA6zVPTfISDW5exc6zTaGe13BMS6CHwOa2kJ7e0ExOjr3r0N4/8RQIxrwLsfYF2x8ZCYf+4ps0GuTsd0EPeeWT5kOTqCxdZ3UGw65J79Rro8kvz7sUGjeuf29J3kP4JhzeDAYsYfzjRGdcF9RBNrrvVjINbml2DSqInhUEzjJTGfOhUPVopYDsmjriDm07Nk8SE+9kIZvC4zFAIsJcNljYQA29z4nHogBNnrwefU4yCIQ7atEBho741Ygh0FgTaHmcfnQRBsk5t56hwDwfaGqWWAERDwtLD45EN/0DMH3GZLPgQ9tUauL6VD0LMs7IJfNgQ+6MQWnAvBDxGmnGl0Bz/Uya8uZULwQ7Zp535dwc9CJp7EdgQ/z+hafs2CEGeFfcvISRC5IwlCHLH1LuunQIiz9O7tiQwI4fDvTiRAUhwJEKKf97ywK4cQjq5PXMghSQ45BL6f+98JfY8YIno14SBaCDxg9b0CfosUAnf0ST6V8G3QDhLx9QolBL2wQr4spIRgjO5u/lGZDoKNWP3d/D1CCORwH/N6qk0GCX/5qB0dJNehgyAPhZEfQpNBgK4e+kE3GSTZIYPYV1bwB/ZUkLhXdcCoIJJXNFpRQQxH0Lzka4UaiDWBj/8CpQhi9PXwC0sGMfq6oEYRpH07jJrxfo0I0h60FF8zHQJR1CiCNB3xY+9pDETRRYZABIOvCtK+H/4gSPt+KPkEc0Ga+SUQQYUFMfIykPZ9RFFhQaxiC+KuceD7I6EpyGwpyGwpyGwpyGwpyGypuZZRbEHcNRakXWxB3DUWpF1sQdw1FqRdbEHcNRakXWxB3DUWpF1sQdw1FqRdbEHcNRakXWxB3DUWpF1sQdw1FqRdbEHcNRakXeyrQPJTkNlSkNlSkNlSkNlSkNlSkNlSkNlSkNlyJr6tNnf+AMJvI8QUThJhAAAAAElFTkSuQmCC';

export class CharactersCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  openModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const {
      name,
      birthYear,
      gender,
      openInNewTab,
    } = this.props;

    const { isOpen } = this.state;

    return (
      <>
        <div className="card">
          <button
            onClick={openInNewTab}
            type="button"
            className="card__button"
          >
            <img
              className="card__img"
              src={
                // eslint-disable-next-line
                gender === 'male'
                  ? maleAvatar
                  : gender === 'female'
                    ? femaleAvatar
                    : noAvatar
              }
              alt="Avatar"
            />
          </button>

          <div className="card__description description">
            <h1 className="description__title">{name}</h1>
            <p className="description__year">
              {
              // eslint-disable-next-line
                gender === 'male'
                  ? 'He'
                  : gender === 'female'
                    ? 'She'
                    : 'It'
              }
              {' '}
              was born in
              {' '}
              {birthYear}
            </p>
            <button
              className="description__button"
              type="button"
              onClick={this.openModal}
            >
              Комментарии
            </button>
            {
              isOpen
                ? <Modal openModal={this.openModal} />
                : ''
            }
          </div>
        </div>
      </>
    );
  }
}

CharactersCard.propTypes = {
  name: PropTypes.string.isRequired,
  birthYear: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  openInNewTab: PropTypes.func.isRequired,
};

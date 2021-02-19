import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Form.scss';

const initialState = {
  newComment: {
    name: '',
    message: '',
  },
};

export class Form extends Component {
  state = { ...initialState.newComment };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { addComment } = this.props;
    const newComment = this.state;

    addComment(newComment);

    this.setState({ ...initialState.newComment });
  }

  render() {
    const {
      name,
      message,
    } = this.state;

    const { handleChange, handleSubmit } = this;

    return (
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form__heading">Оставьте комментарий</h2>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Введите имя"
            value={name}
            onChange={handleChange}
            autoComplete="off"
            required
            className="form__input"
          />
        </label>

        <label>
          <textarea
            type="text"
            name="message"
            placeholder="Комментарий"
            value={message}
            onChange={handleChange}
            autoComplete="off"
            rows="5"
            required
            className="form__input"
          />
        </label>

        <button type="submit" className="form__button">
          Отправить
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  addComment: PropTypes.func.isRequired,
};

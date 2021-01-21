import React, { Component, FormEvent } from 'react';

interface Props {
  onSubmit: Function,
}

interface State {
  query: string,
}

class SearchBar extends Component<Props, State> {
  state: State = { query: '' };

  onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);
  }

  render () {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" >
          <label>Image Search</label>
          <div className="field">
            <input
              type="text"
              value={this.state.query}
              onChange={(e) => this.setState({ query: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  };
};

export default SearchBar;

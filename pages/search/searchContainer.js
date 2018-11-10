import { Component } from "react";
import SearchPresenter from "./searchPresenter";

export default class extends Component {
  state = {
    searchTerm: "",
    canSearch: false
  };
  render() {
    const { searchTerm, canSearch } = this.state;
    return (
      <SearchPresenter
        searchTerm={searchTerm}
        updateSearchTerm={this._updateSearchTerm}
      />
    );
  }
  _updateSearchTerm = event => {
    clearTimeout(this.searchTimeout);
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    });
    this.searchTimeout = setTimeout(() => console.log("Searching..."), 500);
  };
}

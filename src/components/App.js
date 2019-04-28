import React, { Component } from "react";
import DataRetriever from "../utils/DataRetriever";
import SerializeArray from "../utils/SerializeArray";
import { Characters } from "./Characters";
import { Pagination } from "./Pagination";
import { Aside } from "./Aside";

class App extends Component {
  state = {
    status: "notLoaded",
    query: "",
    currentPage: 1
  };

  componentDidMount() {
    DataRetriever("custom", this.state.query).then(response => {
      this.updateState(response);
    });
  }

  updateState(data) {
    this.setState({
      charactersData: data.results,
      pagesCount: data.info.pages,
      currentPage: data.currentPage || 1,
      query: data.query || this.state.query,
      status: "ok"
    });
  }

  ascDescArraySorter = (arr, type) => {
    switch (type) {
      case "asc-name":
        return arr.sort((b, a) => (b.name < a.name ? -1 : 1));
      case "desc-name":
        return arr.sort((a, b) => (b.name < a.name ? -1 : 1));
      case "asc-id":
        return arr.sort((b, a) => (b.id < a.id ? -1 : 1));
      case "desc-id":
        return arr.sort((a, b) => (b.id < a.id ? -1 : 1));
      default:
        console.log("sorting error");
    }
  };

  paginationClickHandler = e => {
    const clickedElementId = +e.target.id;
    const queryWithPagination = `page=${clickedElementId}&${this.state.query}`;

    DataRetriever("custom", queryWithPagination).then(response => {
      response.currentPage = clickedElementId;
      this.updateState(response);
    });
  };

  formSubmitHandler = e => {
    e.preventDefault();

    const formDataArray = SerializeArray(e.target);
    const characterIdSearchValue = formDataArray.filter(
      item => item.name === "name"
    )[0].value;

    if (Number(characterIdSearchValue)) {
      DataRetriever("byId", characterIdSearchValue)
        .then(response => {
          this.updateState({ info: {}, results: [response] });
        })
        .catch(() => {
          this.setState({
            status: "404"
          });
        });

      return;
    }

    const query = formDataArray
      .map(item => (item.value ? `${item.name}=${item.value}&` : ""))
      .join("");

    const sortingOption = formDataArray.filter(item => item.name === "sort")[0]
      .value;

    DataRetriever("custom", query)
      .then(response => {
        if (sortingOption) {
          response.results = this.ascDescArraySorter(
            response.results,
            sortingOption
          );
        }

        response.query = query;
        this.updateState(response);
      })
      .catch(() => {
        this.setState({
          status: "404"
        });
      });
  };

  render() {
    if (this.state.status === "notLoaded") {
      return (
        <div className="container">
          <Aside formSubmitHandler={this.formSubmitHandler} />
          <main>
            <h2>Loading...</h2>
          </main>
        </div>
      );
    } else if (this.state.status === "ok") {
      return (
        <div className="container">
          <Aside formSubmitHandler={this.formSubmitHandler} />
          <main>
            <Characters charactersData={this.state.charactersData} />
            <Pagination
              pagesCount={this.state.pagesCount}
              currentPage={this.state.currentPage}
              onClick={this.paginationClickHandler}
            />
          </main>
        </div>
      );
    } else if (this.state.status === "404") {
      return (
        <div className="container">
          <Aside formSubmitHandler={this.formSubmitHandler} />
          <main>
            <h2>Not found</h2>
          </main>
        </div>
      );
    } else {
      return (
        <div className="container">
          <main>
            <h2>Unkown error while rendering</h2>
          </main>
        </div>
      );
    }
  }
}

export default App;

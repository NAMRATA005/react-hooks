import React from "react";
import LoaderComp from "../loader/LoaderComp";
class OptionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaderOne: null,
      loaderTwo: null,
      array1: [
        { id: 1, value: "use state" },
        { id: 2, value: "use effect" },
      ],
      array2: [
        { id: 1, value: "task list" },
        { id: 2, value: "pie chart" },
      ],
      array3: [
        { id: 1, value: "loader" },
        { id: 2, value: "responsive" },
      ],
    };
  }
  onChangeValue = (event) => {
    console.log(event.target.value);
    this.setState({
      loaderOne: false,
    });
    setTimeout(() => {
      this.setState({
        loaderOne: true,
      });
    }, 2000);
  };
  onChangeValueSecond = (event) => {
    console.log(event.target.value);
    this.setState({
      loaderTwo: false,
    });
    setTimeout(() => {
      this.setState({
        loaderTwo: true,
      });
    }, 2000);
  };
  render() {
    const { loaderOne, loaderTwo, array1, array2, array3 } = this.state;
    const primary_list = array1.map((item) => (
      <li className="radio" key={item.id}>
        <input
          id={`radio-${item.id}`}
          name="radio-list-one"
          type="radio"
          onChange={(e) => this.onChangeValue(e, item.id)}
        />
        <label htmlFor={`radio-${item.id}`} className="radio-label">
          {item.value}
        </label>
      </li>
    ));
    const Secondary_list = array2.map((item) => (
      <li className="radio" key={item.id}>
        <input
          id={`radio-${item.id}`}
          name="radio-list-two"
          type="radio"
          onChange={(e) => this.onChangeValueSecond(e, item.id)}
        />
        <label htmlFor={`radio-${item.id}`} className="radio-label">
          {item.value}
        </label>
      </li>
    ));
    const Tertiary_list = array3.map((item) => (
      <li className="radio" key={item.id}>
        <input
          id={`radio-${item.id}`}
          name="radio-list-three"
          type="radio"
          onChange={(e) => this.onChangeValue(e, item.id)}
        />
        <label htmlFor={`radio-${item.id}`} className="radio-label">
          {item.value}
        </label>
      </li>
    ));
    let Secondary_list_block;
    if (loaderOne == null) {
      Secondary_list_block = <></>;
    } else if (loaderOne === false) {
      Secondary_list_block = <LoaderComp />;
    }
    let Tertiary_list_block;
    if (loaderTwo == null) {
      Tertiary_list_block = <></>;
    } else if (loaderTwo === false) {
      Tertiary_list_block = <LoaderComp />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1>List one</h1>
            <ul className="container">{primary_list}</ul>
          </div>
          {loaderOne ? (
            <div className="col-sm">
              <h1>List two</h1>
              <ul className="container">{Secondary_list}</ul>
            </div>
          ) : (
            Secondary_list_block
          )}
          {loaderTwo ? (
            <div className="col-sm">
              <h1>List three</h1>
              <ul className="container">{Tertiary_list}</ul>
            </div>
          ) : (
            Tertiary_list_block
          )}
        </div>
      </div>
    );
  }
}
export default OptionList;

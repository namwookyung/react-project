import { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름",
  };
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.number.isRequired,
  };
  render() {
    const { name, number, children } = this.props; // 비구조화 할당
    return (
      <div>
        이름은 {name},<br />
        children 값은 {children},<br />
        숫자는 {number}
      </div>
    );
  }
}

export default MyComponent;

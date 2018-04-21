import React, {PropTypes} from 'react';

// Linkの実態は<span> or <a>
class Link extends React.Component {
  render() {
    if (this.props.active) {
      return <span>{this.props.children}</span>;
    }

    return (
      <a href="#"
        onclick = {e => {
          e.preventDefault()
          this.proprs.onClick()
        }}
      >
        {this.proprs.children}
      </a>
    );
  }
}

// 制約の指定
Link.PropTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
import React from 'react';
import New from './New';
import Popular from './Popular';

function withHighlight(Component) {
  return class extends React.Component {
    render() {
      const component = <Component {...this.props} />;
      if (this.props.views >= 1000) {
        return(
          <Popular>
            {component}
          </Popular>
        )
      }
      if (this.props.views < 100) {
        return(
          <New>
            {component}
          </New>
        )
      }
      return component;
    }
  }
};

export default withHighlight;
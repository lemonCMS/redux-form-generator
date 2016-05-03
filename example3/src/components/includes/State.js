import React, {Component} from 'react';

export default ComposedComponent => class extends Component {


  render() {
    /*
     if (_.get(this.props.state, 'pending') === true ) {
     return (
     <div id="content">
     <h1>Pagina wordt geladen....</h1>
     </div>
     );
     }

     if (_.get(this.props.state, 'pending') === false && _.get(this.props.state, 'failed') === true ) {
     return (
     <div id="content">
     <h1>De pagina kon niet worden geladen.</h1>
     </div>
     );
     }*/

    return (
        <ComposedComponent {...this.props} />
    );
  }
};

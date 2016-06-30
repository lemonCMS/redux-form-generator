import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class Resource extends Component {

  static propTypes = {
    show: PropTypes.bool,
    closeResource: PropTypes.func,
    clonedValues: PropTypes.array,
    clonedList: PropTypes.array,
    callBack: PropTypes.func,
    values: PropTypes.array,
    list: PropTypes.array
  }

  constructor() {
    super();
    this.body = this.body.bind(this);
    this.footer = this.footer.bind(this);
    this.state = {
      values: [],
      list: []
    };
  }

  componentWillMount() {
    this.setState({
      values: this.props.clonedValues,
      list: this.props.clonedList || []
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.show, nextProps.show)) {
      this.setState({
        values: nextProps.clonedValues,
        list: nextProps.clonedList || []
      });
    }
  }

  onChange(e, item) {
    const values = this.state.values;
    const list = this.state.list;
    const index = _.findIndex(list, {value: item.value});

    if (e.target.checked === true) {
      if (index === -1) {
        list.push(item);
      }
      values.push(item.value);
    } else {
      if (index > -1) {
        list.splice(index, 1);
      }
      values.splice(_.indexOf(values, item.value), 1);
    }

    this.setState({
      values: _.uniq(values),
      list: list
    });
  }

  list(items) {
    return _.map(items, (item, key) => {
      return (
        <li key={key}>
          <label>
            <input
              type="checkbox"
              value={item.value}
              defaultChecked={_.indexOf(this.state.values, item.value) > -1}
              onChange={(e) => { this.onChange(e, item); }}
            />
            {' ' + item.desc}
          </label>
        </li>
      );
    });
  }

  body() {
    // console.log(this.state.list, this.state.values);

    // Fixed for the example, but this should come from your store
    const items = [
      {value: 1, desc: 'Item 1'},
      {value: 2, desc: 'Item 2'},
      {value: 3, desc: 'Item 3'},
      {value: 4, desc: 'Item 4'},
      {value: 5, desc: 'Item 5'},
      {value: 6, desc: 'Item 6'},
      {value: 7, desc: 'Item 7'}
    ];

    return (
      <Modal.Body>
        <ul>
          {this.list(items)}
        </ul>
      </Modal.Body>
    );

  }

  footer() {
    const callBack = () => { this.props.callBack(this.state.values, this.state.list); };

    return (
      <Modal.Footer>
        <Button onClick={this.props.closeResource}>cancel</Button>
        <Button onClick={callBack} bsStyle="primary">choose</Button>
      </Modal.Footer>
    );
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.closeResource}>
        <Modal.Header>
          <Modal.Title>Data resource</Modal.Title>
        </Modal.Header>
             {this.body()}
             {this.footer()}
      </Modal>
    );
  }
}

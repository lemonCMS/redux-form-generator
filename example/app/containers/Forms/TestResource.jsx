import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Modal, Button} from 'react-bootstrap';

export default class Resource extends Component {

  static propTypes = {
    show: PropTypes.bool,
    closeResource: PropTypes.func,
    clonedValues: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
    clonedList: PropTypes.array,
    callBack: PropTypes.func,
    multiple: PropTypes.bool,
  };

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
    let {values} = this.state;
    let list = this.state.list;
    const index = _.findIndex(list, {value: item.value});

    if (this.props.multiple) {
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
    } else {
      list = [item];
      values = item.value;
    }

    this.setState({
      values: values,
      list: list
    });
  }

  list(items) {
    return _.map(items, (item, key) => {
      return (
        <li key={key}>
          <label htmlFor={`check-${key}`}>
            <input
              id={`check-${key}`}
              name={'option'}
              type={this.props.multiple ? 'checkbox' : 'radio'}
              value={item.value}
              defaultChecked={this.props.multiple ? _.indexOf(this.state.values, item.value) > -1 : String(this.state.values) === String(item.value)}
              onChange={(e) => { this.onChange(e, item); }}
            />
            {' ' + item.desc}
          </label>
        </li>
      );
    });
  }

  body() {
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

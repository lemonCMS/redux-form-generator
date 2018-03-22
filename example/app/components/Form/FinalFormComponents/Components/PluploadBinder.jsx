import React from 'react';
import PropTypes from 'prop-types';
import Plupload from 'react-plupload';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';
import _clone from 'lodash/clone';
import _get from 'lodash/get';
import _map from 'lodash/map';
import _filter from 'lodash/filter';

class PluploadBinder extends React.Component {

  constructor() {
    super();
    this.renderTable = this.renderTable.bind(this);
    this.addedFiles = this.addedFiles.bind(this);
    this.editRender = this.editRender.bind(this);
    this.fileDelete = this.fileDelete.bind(this);
    this.fileUploaded = this.fileUploaded.bind(this);
    this.stateChange = this.stateChange.bind(this);
    this.staticRender = this.staticRender.bind(this);
    this.allFiles = [];
  }

  stateChange(plupload) {
    if (plupload.state === 2) { // Starting with uploading
      this.setState({pending: true});
      return true;
    }

    this.setState({pending: false});
  }

  addedFiles(plupload, files) {
    const fileList = [];
    _map(files, (file) => {
      fileList.push(file.name);
    });
  }

  fileUploaded(plupload, file, response) {
    const uploadResponse = JSON.parse(response.response);
    if (_get(this.props.field.config, 'multi_selection', true) === false) {
      this.allFiles = [uploadResponse.result];
      this.setState({changed: Date.now()}, () => {
        this.props.input.onChange(this.allFiles);
      });
    } else {
      const files = _clone(this.allFiles);
      files.push(uploadResponse.result);
      this.allFiles = files;
      this.setState({changed: Date.now()}, () => {
        this.props.input.onBlur();
        this.props.input.onChange(this.allFiles);
      });
    }
  }

  fileDelete(index) {
    this.allFiles[index].deleted = 1;
    this.setState({changed: Date.now()}, () => {
      this.props.input.onBlur();
      this.props.input.onChange(this.allFiles);
      this.forceUpdate();
    });
  }

  editRender(files) {
    if (files.length > 0) {
      return (
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Bestand</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {_map(this.props.input.value, (file, key) => (!file.deleted &&
              <tr key={key}>
                <td>{file.file_original_name} {file.deleted}</td>
                <td>
                  <Button onClick={() => {
                    this.fileDelete(key);
                  }}><i className="fa fa-trash-o" /></Button>
                </td>
              </tr>
              )
            )}
          </tbody>
        </Table>
      );
    }
  }

  staticRender(files) {
    if (files.length > 0) {
      return (
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Bestand</th>
            </tr>
          </thead>
          <tbody>
            {_map(files, (file, key) => (!file.deleted &&
              <tr key={key}>
                <td>{file.file_original_name} {file.deleted}</td>
              </tr>
              )
            )}
          </tbody>
        </Table>
      );
    }
  }

  renderTable() {
    const staticForm = _get(this.props, 'static', false);
    const files = _filter(this.allFiles, (file) => {
      return !file.deleted;
    });
    if (files.length > 0) {
      return staticForm ? this.staticRender(files) : this.editRender(files);
    }
  }

  render() {
    const {field, input} = this.props;
    return (
      <div>
        <Plupload
          className={field.className}
          onFileUploaded={this.fileUploaded}
          id={`plupload_${input.name}`}
          {...field.config} />
        {this.renderTable()}
      </div>
    );
  }
}

PluploadBinder.propTypes = {
  field: PropTypes.object,
  input: PropTypes.object
};

export default ({input, field}) => (<PluploadBinder input={input} field={field} />);


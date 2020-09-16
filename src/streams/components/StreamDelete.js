import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteStream, fetchStream } from '../actions';
import Modal from '../Modal';
import history from '../history';

class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onDismiss = () => {
        history.push('/');
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure want to delete this stream?';
        }
        return `Are you sure want to delete the stream with title : ${this.props.stream.title}`;
    }

    renderActions() {
        const id = this.props.match.params.id;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <button className="ui button" onClick={this.onDismiss}>Cancel</button>
            </React.Fragment>
        )
    };

    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={this.onDismiss}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete);
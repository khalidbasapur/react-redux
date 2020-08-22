import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions/index';
import { v4 as uuid4 } from 'uuid';

const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title } = this.state;
        this.props.addArticle({title, id: uuid4()});
        this.setState({title: ''});
    }

    render() {
        const { title } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button
                    type="submit"
                >Submit</button>
            </form>
        )
    }
}

export default connect(null, mapDispatchToProps)(Form);

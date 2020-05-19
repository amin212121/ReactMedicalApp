import React from 'react';


class ProfileStatus extends React.Component {

    state = {
        editmode: false,
        status: this.props.status
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
        this.setState({status: this.props.status})}
    }

    ActivateModeTurn() {
        this.setState({editmode: true})
    }

    DisableModeTurn() {
        this.setState({editmode: false});
        this.props.updateUserStatus(this.state.status)
    }

    UpdateText(e) {
        this.setState({
            status: e.currentTarget.value
        })

    }

    render() {
        return (<div>
            {!this.state.editmode &&
            <div>
                <span onDoubleClick={this.ActivateModeTurn.bind(this)}>{this.props.status}</span>
            </div>
            }
            {this.state.editmode &&
            <div>
                <input onChange={this.UpdateText.bind(this)} autoFocus={true}
                       onBlur={this.DisableModeTurn.bind(this)}
                       value={this.state.status}/>
            </div>
            }
        </div>)
    }
}

export default ProfileStatus;

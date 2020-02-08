import React, { Component, Fragment } from "react";

class tableView extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn : true};
        // this.handleClick = this.handleClick.bind(this);
    }

    onClick = () => {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }


    table = (listItems) => (
        <Fragment>
            {listItems.map((list, i) => {
                const child = list.children;
                if (child) {
                    return (
                        <React.Fragment key={`idx${i}`}>
                            <tr>
                                <td>{list.c1}
                                    <button onClick={this.onClick}>
                                        {this.state.isToggleOn ? '+' : '-'}
                                    </button>
                                </td>
                                <td>{list.c2}</td>
                                <td>{list.c3}</td>
                                <td>{list.c4}</td>
                            </tr>
                            {this.table(child)}
                        </React.Fragment>
                    );
                } else {
                    return (
                        <React.Fragment key={i}>
                            <tr>
                                <td>{list.c1}</td>
                                <td>{list.c2}</td>
                                <td>{list.c3}</td>
                                <td>{list.c4}</td>
                            </tr>
                        </React.Fragment>
                    );
                }
            })}
        </Fragment>
    );

    render() {
        const { listItems } = this.props;
        return (
            <React.Fragment>
                {this.table(listItems)}
            </React.Fragment>
        );
    }
}

export default tableView;

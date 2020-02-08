import React, { Component } from "react";
import TableView from './view/TableView';

class TableTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [{ c1: "test", c2: "test", c3: "test", c4: "test", children: [{  c1: "depth", c2: "depth", c3: "depth", c4: "depth", }] }]
        };
    }
    render() {
        const { listItems } = this.state;
        return (
            <>
                <div className="table-row">
                    <table className="ui table center">
                        <colgroup>
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>테스트1</th>
                                <th>테스트2</th>
                                <th>테스트3</th>
                                <th>테스트4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableView listItems={listItems} />
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default TableTest;

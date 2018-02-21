import React from 'react';

import LinearProgress from 'material-ui/LinearProgress';

const tableData = [
    {
        name: 'HDD 0',
        status: 'Unpowered',
    },
    {
        name: 'HDD 1',
        capacity: '50',
        size: '2G',
        used: '1G',
        available: '1G',
        status: 'Powered. Not Mounted',
    },
    {
        name: 'HDD 2',
        capacity: '0',
        size: '5T',
        used: '0',
        available: '5T',
        status: 'Mounted',
    },
    {
        name: 'HDD 3',
        capacity: '15',
        size: '256M',
        used: '37M',
        available: '220M',
        status: 'Mounted',
    },
    {
        name: 'HDD 4',
        capacity: '90',
        size: '1M',
        used: '900M',
        available: '100M',
        status: 'Mounted',
    },
];

class HDDTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: true,
            showRowHover: true,
            showCheckboxes: false,
        };
    }

    render() {
        return (
            <article className="article">
                <h2 className="article-title">HDD Status</h2>
                <div className="box box-default table-box table-responsive mdl-shadow--2dp">
                    <table className="mdl-data-table">
                        <thead>
                        <tr>
                            <th className="mdl-data-table__cell--non-numeric">#</th>
                            <th className="mdl-data-table__cell--non-numeric">Name</th>
                            <th className="mdl-data-table__cell--non-numeric">Capacity</th>
                            <th className="mdl-data-table__cell--non-numeric">Size</th>
                            <th className="mdl-data-table__cell--non-numeric">Used</th>
                            <th className="mdl-data-table__cell--non-numeric">Available</th>
                            <th className="mdl-data-table__cell--non-numeric">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td className="mdl-data-table__cell--non-numeric">{index}</td>
                                <td className="mdl-data-table__cell--non-numeric">{row.name}</td>
                                <td className="mdl-data-table__cell--non-numeric">
                                    <LinearProgress mode="determinate"
                                                    color={row.capacity < 90 ? "green" : "red"}
                                                    value={row.capacity}/>
                                </td>
                                <td className="mdl-data-table__cell--non-numeric">{row.size}</td>
                                <td className="mdl-data-table__cell--non-numeric">{row.used}</td>
                                <td className="mdl-data-table__cell--non-numeric">{row.available}</td>
                                <td className="mdl-data-table__cell--non-numeric">{row.status}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </article>
        );
    }

    /*
    render() {
        return (
            <div className="row">
                <div className="col-xl-12">
                    <div className="box box-default">
                        <div className="box-header">HDD Status</div>
                        <div className="box-body">
                            <Table fixedHeader={this.state.fixedHeader}>
                                <TableHeader
                                    displaySelectAll={this.state.showCheckboxes}
                                    adjustForCheckbox={this.state.showCheckboxes}
                                >
                                    <TableRow>
                                        <TableHeaderColumn tooltip="The ID (Number in List)">#</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="The Drive Name">Name</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="The Drive Capacity">Capacity</TableHeaderColumn>
                                        <TableHeaderColumn
                                            tooltip="The Drive Disk Usage (Used / Total)">Usage</TableHeaderColumn>
                                        <TableHeaderColumn
                                            tooltip="The Status (Mounted or Not and if it is Powered)">Status</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>

                                <TableBody
                                    displayRowCheckbox={this.state.showCheckboxes}
                                    showRowHover={this.state.showRowHover}
                                >
                                    {tableData.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableRowColumn>{index}</TableRowColumn>
                                            <TableRowColumn>{row.name}</TableRowColumn>
                                            <TableRowColumn>TODO</TableRowColumn>
                                            <TableRowColumn>{row.space}</TableRowColumn>
                                            <TableRowColumn>{row.status}</TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        );
    } */
}

module.exports = HDDTable;

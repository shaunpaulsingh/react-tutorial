import React from 'react';

import Counter from './Counter'

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Address</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.number}</td>
                <td>{row.address}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter } = props;
        return (
            <table>
                <Counter dataParentToChild={characterData.length}/>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
}

export default Table;
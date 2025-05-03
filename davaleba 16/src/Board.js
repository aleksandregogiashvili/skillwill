import React from 'react';
import Column from './Column';

const Board = () => {
    const columns = [
        { title: 'Backlog', tasks: ['Download Android app', 'Change and update account details in the iOS app'], color: 'orange' },
        { title: 'In Progress', tasks: ['Set up recurring utilities payments', 'View transaction history by category', 'Set and monitor progress on financial goals'], color: 'yellow' },
        { title: 'Done', tasks: ['Download iOS app', 'Transfer money between accounts'], color: 'green' },
    ];

    return (
        <div className="board">
            {columns.map((col, index) => (
                <Column key={index} title={col.title} tasks={col.tasks} color={col.color} />
            ))}
        </div>
    );
};

export default Board;
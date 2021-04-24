import React from 'react'
import FlipMove from 'react-flip-move'

export default function TasksList({ items, deleteTask, bgColor }) {
    /* function getRandomColor() {
        var color = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
        return color;
    }

    let bgColor = getRandomColor(); */

    return (
        <div className="task-container">
            <FlipMove duration={500} easing="ease-in-out" typeName={null}>
                {
                    items.map(item => {
                        return (
                            <div className="task" key={item.key} >
                                <h3 className="date">{item.date}</h3>
                                <h3 className="description">{item.description}</h3>
                                <button className="btnUpdate"><i className="fas fa-edit"></i></button>
                                <button onClick={() => deleteTask(item.key)} className="btnDelete"><i className="fas fa-minus-circle"></i></button>
                                <div style={{ "backgroundColor": bgColor }} className="left-border"></div>
                                <div style={{ "backgroundColor": bgColor }} className="right-border"></div>
                                <div style={{ "backgroundColor": bgColor }} className="top-border"></div>
                                <div style={{ "backgroundColor": bgColor }} className="bottom-border"></div>
                            </div>
                        );
                    })
                }
            </FlipMove>
        </div>
    )
}

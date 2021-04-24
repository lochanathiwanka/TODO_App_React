import React, { Component } from 'react';
import TasksList from './TasksList';

export default class InputForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            description: '',
            date: '',
            items: [],
            bgColor: ''
        }

        this.addTaskToList = this.addTaskToList.bind(this);
        this.descriptionOnChangeHandler = this.descriptionOnChangeHandler.bind(this);
        this.dateOnSelectHandler = this.dateOnSelectHandler.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    addTaskToList(event) {
        event.preventDefault();
        if (this.state.description !== "" && this.state.date !== "") {
            const newItems = [
                {
                    key: Date.now(),
                    description: this.state.description,
                    date: this.state.date
                },
                ...this.state.items];


            this.setState({
                items: newItems,
                description: '',
                date: '',
                bgColor: "#" + (Math.random() * 0xFFFFFF << 0).toString(16)
            });

            document.getElementById("datePicker").value = "";
        }

        console.log(this.props.children); 
    }

    deleteTask(key) {
        const filteredItems = this.state.items.filter(item => item.key !== key);
        this.setState({
            items: filteredItems
        })
    }

    descriptionOnChangeHandler(event) {
        this.setState({
            description: event.target.value,
        })
    }

    dateOnSelectHandler(event) {
        this.setState({
            date: event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <form className="input-form" onSubmit={this.addTaskToList}>
                    <input id="txtDescription" type="text" placeholder="Description" value={this.state.description} onChange={this.descriptionOnChangeHandler} />
                    <input id="datePicker" type="date" onSelect={this.dateOnSelectHandler} />
                    <button type="submit">Add</button>
                </form>
                <TasksList deleteTask={this.deleteTask} items={this.state.items} bgColor={this.state.bgColor} />
            </React.Fragment>
        );
    }
}

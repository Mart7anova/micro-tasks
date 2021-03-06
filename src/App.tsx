import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {Todolist} from './Todolist';

export type FilterValuesType = 'all' | 'active' | 'completed';

export type todoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    //let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todoListsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS2', isDone: true},
            {id: v1(), title: 'JS2', isDone: true},
            {id: v1(), title: 'ReactJS2', isDone: false},
            {id: v1(), title: 'Rest API2', isDone: false},
            {id: v1(), title: 'GraphQL2', isDone: false},
        ]
    });

    function removeTask(todolistID: string, id: string) {
        let filteredTasks = tasks[todolistID].filter(t => t.id != id);
        setTasks({...tasks,[todolistID]:filteredTasks});
    }

    function addTask(todolistID: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks[todolistID]]
        setTasks({...tasks, [todolistID]:newTasks});
    }

    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
        /*tasks[todolistID].map(t=>t.id === taskId ? t.isDone = isDone : t)
        let newTasks = [...tasks[todolistID]]
        setTasks({...tasks,[todolistID]:newTasks});*/ // ???????? ??????
        setTasks({...tasks,[todolistID]:tasks[todolistID].map(t=>t.id === taskId ? {...t,isDone} : t)})
    }


    //let tasksForTodolist = tasks;

    /*if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }*/

    function changeFilter(todolistID: string, value: FilterValuesType) {
        /*setFilter(value);*/
        const newtodolist = todolists.map(t=>t.id === todolistID ? {...t, filter: value} : t)
        setTodolists([...newtodolist])
    }


    return (
        <div className="App">
            {todolists.map((mapTodolists: todoListsType) => {
                let tasksForTodolist = tasks[mapTodolists.id];

                if (mapTodolists.filter === 'active') {
                    tasksForTodolist = tasks[mapTodolists.id].filter(t => t.isDone === false);
                }
                if (mapTodolists.filter === 'completed') {
                    tasksForTodolist = tasks[mapTodolists.id].filter(t => t.isDone === true);
                }


                return (
                    <Todolist key={mapTodolists.id}
                              todolistID={mapTodolists.id}
                              title={mapTodolists.title}
                              tasks={tasksForTodolist}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              changeTaskStatus={changeStatus}
                              filter={mapTodolists.filter}
                    />
                )
            })}

        </div>
    );
}

export default App;

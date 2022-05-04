import React from 'react';
import './App.css';
import {Les1} from './lesson/Les1';
import {Les2} from './lesson/Les2/Les2';
import {Les3} from './lesson/Les3';
import {Les4} from './lesson/Les4';
import {Les2_dz} from './lesson/Les2/Les2_dz';
import {Les5} from './lesson/Les5/Les5';

const les1 = [
    {id: 1, manufacturer: 'BMW', model: 'm5cs'},
    {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
    {id: 3, manufacturer: 'Audi', model: 'rs6'}
]
const les2 = [
    {name: 'Katya'},
    {name: 'Ira'}
]

function App() {
    return (
        <div className="App">
            {/*<Les1 car={les1}/>
            <Les2/>
            <Les2_dz/>
            <Les3/>
            <Les4/>*/}
            <Les5/>
        </div>
    );
}

export default App;

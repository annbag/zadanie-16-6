import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {            
            data: [
                {
                    id: 1,
                    text: 'cnpmlean room'
                }, 
                {
                    id: 2,
                    text: 'wash the dishes'
                }, 
                {
                    id: 3,
                    text: 'feed my cat'
                }
            ]
        };                
    }
    //metoda do dodawania nowych elementów do kolekcji
    addTodo(val){
        const todo = {
            text: val, 
            id: uuid.v4(), //Przy użyciu metody uuid.v4() tworzymy unikatową kombinację cyfr i liczb i przypisujemy ją do klucza id
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    //usuwanue rzeczy do zrobienia
    //metoda .filter() tworzy tablicę z odfiltoranymi pewnymi elemeantami, 
    //jako parametr metoda przyjmuje funkcję, która ma za zadanie sprawdzić warunek dla każdego eleemntu tablicy, 
    //na której jest wykonywana i wybrać tylko te elementy które go spęłniają
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title='ToDo' lengthTask={this.state.data.length} />
                <TodoForm addTodo={this.addTodo.bind(this)} />
                <TodoList 
                    remove={this.removeTodo.bind(this)} 
                    todos={this.state.data}  />
            </div>
        );
    }
}

export default hot(module) App;
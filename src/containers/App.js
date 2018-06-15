import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {            
            todos: [
                {
                    id: 1,
                    text: 'clean room'
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
        const todos = [...this.state.todos, todo];
        this.setState({todos});
    }
    //usuwanue rzeczy do zrobienia
    //metoda .filter() tworzy tablicę z odfiltoranymi pewnymi elemeantami, 
    //jako parametr metoda przyjmuje funkcję, która ma za zadanie sprawdzić warunek dla każdego eleemntu tablicy, 
    //na której jest wykonywana i wybrać tylko te elementy które go spęłniają
    removeTodo(id) {
        const remainder = this.state.todos.filter(todo => todo.id !== id);
        this.setState({todos: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title='ToDo' lengthTask={this.state.todos.length} />
                <TodoList todos={this.state.todos} remove={this.removeTodo.bind(this)} />
            </div>
        );
    }
}

export default App;
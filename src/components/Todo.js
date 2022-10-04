import styles from '../style.module.css';

const Todo = ({todoItem, todoList, setTodoList}) => {
    const deleteTodo = () => {
        setTodoList(todoList.filter((item)=> item.id !== todoItem.id))
    };
    return(
        <div>
            <div className={styles.todoitems}>
                <h3 className={styles.todoname}>{todoItem.name}</h3>
                <button onClick={deleteTodo} className={styles.deletetodo}>Delete</button>
            </div>
        </div>
    );
};
export default Todo
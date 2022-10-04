import Todo from './Todo';

const Todolist = ({todoList, setTodoList,  isOpen, setIsOpen}) => {
    return <div>{todoList.map((todoItem)=>(
        <Todo setTodoList={setTodoList} key={todoItem.id} todoItem={todoItem} todoList={todoList} />
    ))}</div>;
}
export default Todolist;
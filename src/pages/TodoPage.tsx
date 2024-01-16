import AddTodoModal from "@/components/todoPages/addtodoModal";
import TodoCard from "@/components/todoPages/todoCard";
import TodoFilter from "@/components/todoPages/todoFilter";
import { useAppSelector } from "@/redux/hooks";

const Todo = () => {
  const { todos } = useAppSelector(state => state.todos);

  return (
    <div className="max-w-5xl rounded-lg p-4 mx-auto">
      <h1 className="text-center my-5 text-slate-800 text-xl font-semibold">
        My Todos{" "}
      </h1>

      <div className="flex justify-between items-center mb-4">
        <AddTodoModal />
        <TodoFilter />
      </div>

      <div className="bg-primary-gradient rounded-lg p-[5px]">
        <div className="space-y-4 bg-slate-100 rounded-lg p-4">
          {todos.length > 0 ? (
            <>
              {todos.map(todo => (
                <TodoCard
                  key={todo.id}
                  title={todo.title}
                  id={todo.id}
                  isCompleted={todo.isCompleted}
                  desc={todo.desc}
                />
              ))}
            </>
          ) : (
            <>
              <p className="text-center font-medium text-xl my-8 text-primary">
                You Don't have any todos
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;

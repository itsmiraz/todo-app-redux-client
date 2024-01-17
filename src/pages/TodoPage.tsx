import AddTodoModal from "@/components/todoPages/addtodoModal";
import TodoCard from "@/components/todoPages/todoCard";
import TodoFilter from "@/components/todoPages/todoFilter";
import { useGetTodosQuery } from "@/redux/apiServerice/apiService";
import { TTodo } from "@/redux/features/todoSlice";
import { useState } from "react";

const Todo = () => {
  const [priority, setpriority] = useState("");
  //* From Local State
  // const { todos } = useAppSelector(state => state.todos);

  //* From Server
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  // console.log(todos);

  return (
    <div className="max-w-5xl rounded-lg p-4 mx-auto">
      <h1 className="text-center my-5 text-slate-800 text-xl font-semibold">
        My Todos{" "}
      </h1>

      <div className="flex justify-between items-center mb-4">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setpriority} />
      </div>

      <div className="bg-primary-gradient rounded-lg p-[5px]">
        <div className="space-y-4 bg-slate-100 rounded-lg p-4">
          {isLoading ? (
            <p>Loading</p>
          ) : (
            <>
              {todos?.data?.length > 0 ? (
                <>
                  {todos?.data?.map((todo: TTodo) => (
                    <TodoCard
                      _id={todo._id}
                      priority={todo.priority}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;

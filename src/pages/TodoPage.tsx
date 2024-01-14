import AddTodoModal from "@/components/todoPages/addtodoModal";
import TodoCard from "@/components/todoPages/todoCard";
import TodoFilter from "@/components/todoPages/todoFilter";
import { Button } from "@/components/ui/button";

const Todo = () => {
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
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default Todo;

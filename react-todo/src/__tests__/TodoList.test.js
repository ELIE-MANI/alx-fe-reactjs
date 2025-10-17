import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList.jsx";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText("Add a todo"), {
      target: { value: "Test Todo" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Build a Todo App");
    const deleteButton = screen.getAllByText("Delete")[1];
    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});

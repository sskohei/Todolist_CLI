import { Command } from "commander"
import { loadTodos, saveTodos } from "../storage.js"
import type { Todo } from "../todo.js"

export function addCommand(program: Command) {
  program
    .command("add <text>")
    .description("Add a new todo")
    .action((text) => {
      const todos = loadTodos()
      const newTodo: Todo = {
        id: todos.length + 1,
        text,
        done: false
      }
      todos.push(newTodo)
      saveTodos(todos)
      console.log("✅ 追加:", text)
    })
}

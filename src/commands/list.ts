import { Command } from "commander"
import { loadTodos } from "../storage.js"

export function listCommand(program: Command) {
  program
    .command("list")
    .description("Show todo list")
    .action(() => {
      const todos = loadTodos()
      if (todos.length === 0) {
        console.log("📭 Todoはありません")
        return
      }

      todos.forEach(todo => {
        console.log(
          `${todo.id}. [${todo.done ? "x" : " "}] ${todo.text}`
        )
      })
    })
}

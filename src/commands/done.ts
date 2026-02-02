import { Command } from "commander"
import { loadTodos, saveTodos } from "../storage.js"

export function doneCommand(program: Command) {
  program
    .command("done <id>")
    .description("Mark todo as done")
    .action((id) => {
      const todos = loadTodos()
      const todo = todos.find(t => t.id === Number(id))

      if (!todo) {
        console.log("❌ 見つかりません")
        return
      }

      todo.done = true
      saveTodos(todos)
      console.log("🎉 完了:", todo.text)
    })
}

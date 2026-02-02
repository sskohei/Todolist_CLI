import { Command } from "commander"
import { loadTodos, saveTodos } from "../storage.js"

export function removeCommand(program: Command) {
  program
    .command("remove <id>")
    .description("Remove todo")
    .action((id) => {
      let todos = loadTodos()
      todos = todos.filter(t => t.id !== Number(id))
      saveTodos(todos)
      console.log("🗑 削除しました")
    })
}

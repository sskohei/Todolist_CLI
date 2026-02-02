import { Command } from "commander"
import { loadTodos, saveTodos } from "../storage.js"

export function removeCommand(program: Command) {
  program
    .command("remove <id>")
    .description("Remove todo")
    .action((id) => {
      let todos = loadTodos()
      todos = todos.filter(t => t.id !== Number(id))
      for(let i = 0;i < todos.length;i ++){
        todos[i].id = i + 1
      }
      saveTodos(todos)
      console.log("🗑 削除しました")
    })
}

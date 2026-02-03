import { Command } from "commander"
import { loadTodos, saveTodos } from "../storage.js"

export function allRemoveCommand(program:Command){
    program
        .command("allrm")
        .description("remove all todos")
        .action(() => {
            let todos = loadTodos()
            todos = []
            saveTodos(todos)
            console.log("全て削除しました")
        })
}
import fs from "fs"
import path from "path"
import type { Todo } from "./todo.js"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DATA_PATH = path.join(__dirname, "todo.json")

export function loadTodos(): Todo[] {
  if (!fs.existsSync(DATA_PATH)) return []
  return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"))
}

export function saveTodos(todos: Todo[]) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(todos, null, 2))
}


import fs from "fs"
import path from "path"
import type { Day } from "./day.js"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DATA_PATH = path.join(__dirname, "dayRecord.json")

export function loadDays(): Day[]{
    if (!fs.existsSync(DATA_PATH)) return []
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"))
}

export function saveDays(days: Day[]){
    fs.writeFileSync(DATA_PATH, JSON.stringify(days, null, 2))
}
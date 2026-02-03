import { Command} from "commander";
import { loadTodos,saveTodos } from "../storage.js";
import { loadDays,saveDays } from "../day_storage.js";
import type { Day } from "../day.js";

export function recordCommand(program: Command){
    program
        .command("record")
        .description("record achivement rate")
        .action(() => {
            const todos = loadTodos()
            let days = loadDays()
            const tasks_number = todos.length
            const achieve = todos.filter(t => t.done === true)
            const achieve_number = achieve.length
            let achieve_rate = 0
            if(tasks_number != 0){
                achieve_rate = achieve_number / tasks_number
            }
            const newDay:Day = {
                id: days.length + 1,
                achievement: achieve_number,
                tasks: tasks_number,
                rate: achieve_rate
            }
            days.push(newDay)
            saveDays(days)
            console.log("本日の達成率を記録しました。")
        })
}
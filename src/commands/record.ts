import { Command} from "commander";
import { loadTodos} from "../storage.js";
import { loadDays,saveDays } from "../day_storage.js";
import type { Day } from "../day.js";

export function recordCommand(program: Command){
    program
        .command("record")
        .description("record achivement rate")
        .action(() => {
            let d = new Date()
            let y = d.getFullYear()
            let m = d.getMonth() + 1
            let day = d.getDate()

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
                year: y,
                month:m,
                date:day,
                achievement: achieve_number,
                tasks: tasks_number,
                rate: achieve_rate
            }
            days.push(newDay)
            saveDays(days)
            console.log("本日の達成率を記録しました。")
        })
}
import { Command } from "commander";
import { loadDays } from "../day_storage.js";

export function logCommand(program:Command){
    program
        .command("log")
        .description("export daily logs")
        .action(() => {
            const days = loadDays()
            console.table(days)
        })
}
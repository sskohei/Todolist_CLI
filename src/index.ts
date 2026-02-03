#!/usr/bin/env node
import { Command } from "commander"

import { addCommand } from "./commands/add.js"
import { listCommand } from "./commands/list.js"
import { doneCommand } from "./commands/done.js"
import { removeCommand } from "./commands/remove.js"
import { allRemoveCommand } from "./commands/allRemove.js"
import { recordCommand } from "./commands/record.js"
import { logCommand } from "./commands/log.js"

const program = new Command()

program
  .name("todo")
  .description("Simple Todo CLI")
  .version("1.0.0")

addCommand(program)
listCommand(program)
doneCommand(program)
removeCommand(program)
allRemoveCommand(program)
recordCommand(program)
logCommand(program)

program.parse(process.argv)

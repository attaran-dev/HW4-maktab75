function sqlCommand(command) {
    return command.toUpperCase();
}

console.log(sqlCommand(prompt('type an sql command.')));
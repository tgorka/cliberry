// commands that are ready to override
const customCmds = ["new"];

// adding a local schematics collection by default at the beginning so later parameters can redefine it
const cliPrefix = process.argv.slice(0,2);
let cliArgs = process.argv.slice(2);
const hasCmd = (): boolean => {
    for (let customCmd of customCmds) {
        if (cliArgs.includes(customCmd)) {
            return true;
        }
    }
    return false;
};

if (hasCmd()) {
    cliArgs = ['--collection', 'schemaberry', ...cliArgs];
}

process.argv = [...cliPrefix, ...cliArgs];
console.log('process.argv.', process.argv);

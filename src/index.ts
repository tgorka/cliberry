/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry/LICENSE
 */
import config, {Config} from "./config";


// adding a local schematics collection by default at the beginning so later parameters can redefine it
const cliPrefix = process.argv.slice(0, 2);
let cliArgs = process.argv.slice(2);
const includesAny = (source: string[], values: string[]): boolean => {
    for (let value of values) {
        if (source.includes(value)) {
            return true;
        }
    }
    return false;
};

const getCustomTemplate = (cliArgs: string[], config: Config, targetTemplateName: string): string | null => {
    if (includesAny(cliArgs, ['--collection', '-c', 'c'])) return null; // collection is already set
    if (!includesAny(cliArgs, config[targetTemplateName].customCmds)) return null; // commands not supported in custom
    return config[targetTemplateName].template;
};


let targetTemplateName = 'default';
if (cliArgs.length > 0 && Object.keys(config).includes(cliArgs[0])) {
    targetTemplateName = cliArgs[0];
    cliArgs = cliArgs.slice(1); // do not use this parameter anymore in the future app generator (@angular/cli) call
}

const customTemplate = getCustomTemplate(cliArgs, config, targetTemplateName);
if (customTemplate) {
    cliArgs = ['--collection', customTemplate, ...cliArgs];
}

process.argv = [...cliPrefix, ...cliArgs];

import {Cli} from 'cucumber';
import path from 'path'

const cucumberCli = new Cli({
    argv: ['node', 'cucumber-js',  path.resolve('test/ulbra-automation/main-page.feature')/*'../../../../test/ulbra-automation/main-page.feature'*/],
    cwd : path.resolve('node_modules/cucumber/bin/cucumber-js'),
    stdout: process.stdout
});

//console.log(cucumberCli);
cucumberCli.run().then(res => {console.log(res);});
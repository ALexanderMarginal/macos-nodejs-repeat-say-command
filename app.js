const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function sleep() {
  const { stdout, stderr } = await exec('say "repeating phrase"');
  sleep();
}

sleep();
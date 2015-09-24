// Description
//   typescript_template
//
// Configuration:
//   LIST_OF_ENV_VARS_TO_SET
//
// Commands:
//   hubot hello - <what the respond trigger does>
//   orly - <what the hear trigger does>
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//   foo <foo@example.com>

function BotMain(robot) {
  robot.respond(/hello/, function(res) {
    res.send('hello hello');
  });
}
module.exports = BotMain;

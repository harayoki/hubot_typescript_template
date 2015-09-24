# Description
#   lot
#
# Configuration:
#   LIST_OF_ENV_VARS_TO_SET
#
# Commands:
#   hubot hello - <what the respond trigger does>
#   orly - <what the hear trigger does>
#
# Notes:
#   <optional notes required for the script>
#
# Author:
#   animalland <animalland@harayoki.net>

module.exports = (robot) ->
  robot.respond /lot (.+)/, (msg) ->
    items = msg.match[1].split(/[,\s]+/)
    item = msg.random items
    msg.send "#{item}かな"

  robot.respond /dare (.+)/, (msg) ->
    items = msg.match[1].split(/[,\s]+/)
    item = msg.random items
    msg.send "@#{item}"



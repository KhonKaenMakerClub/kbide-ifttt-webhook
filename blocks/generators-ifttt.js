Blockly.JavaScript['ifttt_esp32_setup'] = function(block) {
  var text_key = block.getFieldValue('key');
  var code = `
#EXTINC
#include "IFTTTWebhook.h"
#END
#VARIABLE IFTTTWebhook _esp32_ifttt("${text_key}");#END
`;
  return code;
};

Blockly.JavaScript['ifttt_esp32_trigger'] = function(block) {
  var text_event = block.getFieldValue('event');
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value3 = Blockly.JavaScript.valueToCode(block, 'value3', Blockly.JavaScript.ORDER_ATOMIC);
  var p1 = (value_value1)? ("String(" + value_value1 + ").c_str()") : "NULL";
  var p2 = (value_value2)? ("String(" + value_value2 + ").c_str()") : "NULL";
  var p3 = (value_value3)? ("String(" + value_value3 + ").c_str()") : "NULL";
  var code = `_esp32_ifttt.trigger("${text_event}",${p1},${p2},${p3});\n`;
  return code;
};
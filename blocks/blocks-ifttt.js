Blockly.Blocks['ifttt_esp32_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("IFTTT setup")
        .appendField(new Blockly.FieldTextInput("-key-"), "key");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("setup IFTTT");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ifttt_esp32_trigger'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("IFTTT trigger")
        .appendField(new Blockly.FieldTextInput("-event name-"), "event");
    this.appendValueInput("value1")
        .setCheck(["Boolean", "Number", "String"]);
    this.appendValueInput("value2")
        .setCheck(["Boolean", "Number", "String"]);
    this.appendValueInput("value3")
        .setCheck(["Boolean", "Number", "String"]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("trigger event");
 this.setHelpUrl("");
  }
};
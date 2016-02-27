
'use strict';

var warning = require('warning');

if (__DEV__) {
  var processingChildContext = false;

  var warnInvalidSetState = function() {
    if (processingChildContext === false) {
      return;
    }
    warning(
      false,
      'setState(...): Cannot call setState inside getChildContext()'
    );
  };
}

var ReactInvalidSetStateWarningDevTool = {
  onBeginProcessingChildContext() {
    processingChildContext = true;
  },
  onEndProcessingChildContext() {
    processingChildContext = false;
  },
  onSetState() {
    warnInvalidSetState();
  },
};

module.exports = ReactInvalidSetStateWarningDevTool;

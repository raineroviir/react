var warning = require('warning');

if (__DEV__) {
  var warnInvalidSetState = function(instance, boolean) {
    instance._processingChildContext = boolean
    return;
  }
}

var ReactInvalidSetStateWarningDevTool = {
  onBeginProcessingChildContext(instance, boolean) {
    warnInvalidSetState(instance, boolean)
  },
  onEndProcessingChildContext(instance, boolean) {
    warnInvalidSetState(instance, boolean)
  },
};

module.exports = ReactInvalidSetStateWarningDevTool;

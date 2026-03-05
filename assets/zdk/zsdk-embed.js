(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser globals
    root.zuperEmbed = factory();
  }
})(this, function () {
  /**
   * Validates the message object to ensure it has the required properties.
   * @param {Object} message - The message object to validate.
   * @throws {Error} If the message is not valid.
   */
  function validateMessage(message) {
    if (typeof message !== 'object' || message === null) {
      throw new Error('Message must be a non-null object');
    }
    if (!message.type || !message.content) {
      throw new Error(
        'Message must have "type" and "content" properties'
      );
    }
  }

  /**
   * A util library for sending and handling messages between windows.
   */
  const zuperEmbed = {
    /**
     * Sends a message from the child window to the parent window.
     * @param {Object} message - The message object to send.
     * @example
     * const message = {
     *   type: 'greeting',
     *   content: 'Hello from the child window!'
     * };
     * zuperEmbed.sendMessageToParent(message);
     */
    sendMessageToParent(message) {
      validateMessage(message);
      window.parent.postMessage(message, '*'); // Replace '*' with a specific origin for better security
    },

    /**
     * Sets up a handler to process incoming messages in the parent window.
     * @param {Function} callback - The function to call with the message data and origin.
     * @example
     * function handleIncomingMessage(data, origin) {
     *   console.log('Message received from origin:', origin);
     *   console.log('Message data:', data);
     *   if (data.type === 'greeting') {
     *     console.log('Received greeting:', data.content);
     *   }
     * }
     * zuperEmbed.handleMessage(handleIncomingMessage);
     */
    handleMessage(callback) {
      if (typeof callback !== 'function') {
        throw new Error('Callback must be a function');
      }

      window.addEventListener(
        'message',
        function (event) {
          try {
            validateMessage(event.data);
            callback(event.data, event.origin);
          } catch (e) {
            console.error('Invalid message received:', e.message);
          }
        },
        false
      );
    },
  };

  return zuperEmbed;
});
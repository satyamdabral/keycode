document.addEventListener('keydown', function(event) {
    
    const keycodeDisplay = document.getElementById('keycode-display');
    
  
    const keyName = event.key;
    // This line retrieves the string representing the pressed key.
  
    const keyCode = event.keyCode;
    // This line retrieves the numeric keycode of the pressed key. Note that 'keyCode'
    // is deprecated; 'event.key' should be used instead.
  
    const displayText = `Key Pressed: ${keyName} | Keycode: ${keyCode}`;
    // This line creates a string containing the key name and keycode.
  
    keycodeDisplay.textContent = displayText;
    // This line sets the text content of the 'keycode-display' element to the created string.
  });
  
  
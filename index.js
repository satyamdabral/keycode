document.addEventListener('keydown', function(event) {
    
    const keycodeDisplay = document.getElementById('keycode-display');
    
    const keyName = event.key;
    
    const keyCode = event.keyCode;
  
    const displayText = `Key Pressed: ${keyName} | Keycode: ${keyCode}`;
   
    keycodeDisplay.textContent = displayText;
   
  });
  
  

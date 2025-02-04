import React, { useEffect } from 'react';
export  default function ChatBot(){
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = '//uae.fw-cdn.com/40173208/106410.js';
    script.chat = 'true'; // Add the `chat` attribute if required
    script.async = true;  // Load the script asynchronously

    // Append the script to the document's head
    document.head.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component does not need to render anything
};



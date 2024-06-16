import { useEffect, useRef } from 'react';

const useKeyboardCommands = (commands) => {
  const commandsRef = useRef(commands);

  useEffect(() => {
    commandsRef.current = commands;
  }, [commands]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const command = commandsRef.current[event.key];
      if (command) {
        const shouldExecute =
          typeof command === 'function' ? command(event) : command.shouldExecute ? command.shouldExecute(event) : true;

        if (shouldExecute) {
          event.preventDefault();
          command.callback(event);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
};

export default useKeyboardCommands;

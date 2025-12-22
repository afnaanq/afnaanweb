import { useState, useEffect } from 'preact/hooks';

export default function Greeting({messages}) {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  
  const [greeting, setGreeting] = useState(messages[0]);
  const [isVisible, setIsVisible] = useState(true);

  const changeGreeting = () => {
    setIsVisible(false);
    

    setTimeout(() => {
      setGreeting(randomMessage());
      setIsVisible(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(changeGreeting, 10000);

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div>
      <h1 
        class={`transition-all duration-500 ease-in-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-2'
        }`}
      >
      {greeting}, my name is Afnaan Qasim.
      </h1>
    </div>
  );
}
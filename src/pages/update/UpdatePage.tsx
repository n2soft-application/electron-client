import { useEffect, useState } from "react";

function UpdatePage() {
  const [messages, setMessages] = useState<string[]>([]);
  useEffect(() => {
    window.electron.ipcRenderer.on("message", (message) => {
      setMessages((prev) => [...prev, message as string]);
    });
  }, []);

  return (
    <div>
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default UpdatePage;

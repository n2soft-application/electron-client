export { };

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        sendMessage: (channel: string, data: any) => void;
      };
    };
  }
}

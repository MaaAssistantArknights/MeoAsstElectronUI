export const getSystemInformation = async () => await window.ipcRenderer.invoke('main.Util:getSystemInformation')
export const getSystemStatus = async () => await window.ipcRenderer.invoke('main.Util:getSystemStatus')

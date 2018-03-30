// Config File
export const checkConfigFileSelector = (state) => state.configFileReducer.checkConfigFile.data;
export const configWhitelistSelector = (state) => state.configFileReducer.configWhitelist.data;
export const configFileSelector = (state) => state.configFileReducer.configFile.data;
export const updateConfigFileSelector = (state) => state.configFileReducer.updateConfigFile.data;

// HDD
export const checkHDDSelector = (state) => state.hddReducer.checkHDD.data;

// Misc
export const getHostnameSelector = (state) => state.miscReducer.getHostname.data.hostname;

// Network
export const checkVPNSelector = (state) => state.networkReducer.checkVPN.data;
export const restartVPNSelector = (state) => state.networkReducer.restartVPN.data;

export const checkInternetSelector = (state) => state.networkReducer.checkInternet.data;
export const restartModemSelector = (state) => state.networkReducer.restartModem.data;

// Time
export const outputTimeSelector = (state) => state.timeReducer.outputTime.data.time;

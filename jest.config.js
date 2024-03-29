// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  "testEnvironment": "jsdom",
   "testMatch": ["**/src/**/**.test.**"],
  "moduleNameMapper": {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
    '\\.(css|less|scss|sass|png)$': "identity-obj-proxy"
  }, 
  "transform": {
    "\\.(tsx|ts)$": "babel-jest"
  },
  "coveragePathIgnorePatterns": [
    "node_modules",
    "./mocks",
    "models"
  ]
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    verbose: true,
    "testEnvironment": "jsdom",
    "testMatch": ["**/src/**/**.test.**"],
    "moduleNameMapper": {
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
      '\\.(css|less|scss|sass)$': "identity-obj-proxy"
    }, 
    "transform": {
      "\\.(tsx|ts)$": "babel-jest"
    },
    "coveragePathIgnorePatterns": [
      "node_modules",
      "./mocks",
      "models"
    ]
  };
};



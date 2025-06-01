import { scan } from "sonarqube-scanner";
import dotenv from "dotenv";

dotenv.config();

scan(
  {
    serverUrl: process.env.SONAR_URL || 'http://localhost:9000',
    token: process.env.SONAR_TOKEN,
    projectVersion: "1.0.0",
    options: {
      "sonar.projectName": "movie-night",
      "sonar.projectKey": "movie-night",
      "sonar.sources": "src",
      "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
    },
  },
  () => process.exit()
);

# Movie Night

## Overview

Movie Night is a modern movie center website (much like Netflix or Disney+) where users can browse and explore movies in a visually appealing way.
<br />
<br />
This website is fully AI generated using **Cursor AI Editor** and **Vibe Coding** (you can find the used prompt inside [prompt-example.txt](https://github.com/FadyGerges23/Movie-Night/blob/main/prompt-example.txt) file).

## Prerequistes
Make sure to have React installed. You can follow the installation steps in the following [guide](https://www.freecodecamp.org/news/how-to-install-react-a-step-by-step-guide/).

## Setupt Instructions

1. Clone the project
    - using HTTPS:
        ```
        git clone https://github.com/FadyGerges23/Movie-Night.git
        ```
    
    - or using SSH:
        ```
        git clone git@github.com:FadyGerges23/Movie-Night.git
        ```

2. Make sure that you are at the root directory of the project
    ```
    cd Movie-Night
    ```

3. Install dependencies
    ```
    npm install
    ```

4. Run the project
    ```
    npm start
    ```

5. Visit the website: [http://localhost:3000](http://localhost:3000)

6. Run SonarQube project for code analysis
    ```
    docker compose up
    ```

7. Create a `.env` file from `.env.example`
    ```
    cp .env.example .env
    ```

8. Add values for the environment variables:
    - `SONAR_URL`: Host URL on which the Sonar Project instance is running.
    - `SONAR_TOKEN`: The generated token for your Sonar Project.

9. Run Sonar Scan for code analysis
    ```
    npm run sonar
    ```

10. Visit the SonarQube Project UI: [http://localhost:9000](http://localhost:9000)

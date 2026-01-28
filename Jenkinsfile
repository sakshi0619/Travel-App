pipeline {
    agent any

    tools {
        nodejs 'NodeJS'           // Make sure NodeJS is installed in Jenkins Global Tool Config
        sonarScanner 'SonarScanner' // Install SonarScanner in Jenkins Tools
    }

    environment {
        SONAR_HOST_URL = 'http://<your-sonarqube-server>:9000'
        SONAR_PROJECT_KEY = 'TravelApp'
        SONAR_LOGIN_TOKEN = credentials('sonar-token') // Jenkins credential ID for your token
    }

    stages {

        stage('Check Node & NPM') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('MySonarQube') {
                    bat """\
                    sonar-scanner.bat ^
                    -Dsonar.projectKey=%SONAR_PROJECT_KEY% ^
                    -Dsonar.sources=. ^
                    -Dsonar.host.url=%SONAR_HOST_URL% ^
                    -Dsonar.login=%SONAR_LOGIN_TOKEN%"""
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}

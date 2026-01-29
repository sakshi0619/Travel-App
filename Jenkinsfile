pipeline {
    agent any

    environment {
        // PATH me NodeJS, SonarScanner aur Trivy add kiya
        PATH = "C:\\sonarqube\\sonar-scanner-8.0.1.6346-windows-x64\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\Trivy;${env.PATH}"
        SONAR_HOST_URL = 'http://localhost:9000'
        SONAR_PROJECT_KEY = 'TravelApp'
    }

    stages {

        // ✅ Stage 1: Check Node & NPM
        stage('Check Node & NPM') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        // ✅ Stage 2: Check Trivy
        stage('Check Trivy') {
            steps {
                bat 'trivy --version'
            }
        }

        // ✅ Stage 3: Install Dependencies
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        // ✅ Stage 4: SonarQube Scan
        stage('SonarQube Scan') {
            steps {
                withCredentials([string(credentialsId: 'sonarqube-token', variable: 'SONAR_TOKEN')]) {
                    withSonarQubeEnv('MySonarQube') {
                        bat """
                        sonar-scanner.bat ^ 
                        -Dsonar.projectKey=%SONAR_PROJECT_KEY% ^ 
                        -Dsonar.sources=. ^ 
                        -Dsonar.host.url=%SONAR_HOST_URL% ^ 
                        -Dsonar.login=%SONAR_TOKEN%
                        """
                    }
                }
            }
        }

        // ✅ Stage 5: Quality Gate
        stage('Quality Gate') {
            steps {
                timeout(time: 30, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        // ✅ Stage 6: Trivy Scan (Docker image)
        stage('Trivy Scan') {
            steps {
                bat '''
                trivy image --severity HIGH,CRITICAL --exit-code 1 bits1234/travel-app:latest
                '''
            }
        }
    }
}

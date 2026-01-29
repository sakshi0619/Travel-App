pipeline {
    agent any

    environment {
        // Add Docker, NodeJS, SonarScanner, and Trivy to PATH
        PATH = "C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\sonarqube\\sonar-scanner-8.0.1.6346-windows-x64\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\Trivy;${env.PATH}"
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

        // ✅ Stage 4: Prepare Docker Image (for Trivy scan)
        stage('Prepare Docker Image') {
            steps {
                // Pull the image if available, otherwise build from Dockerfile
                bat '''
                docker pull bits1234/travel-app:latest || docker build -t bits1234/travel-app:latest .
                '''
            }
        }

        // ✅ Stage 5: SonarQube Scan
        stage('SonarQube Scan') {
            steps {
                withCredentials([string(credentialsId: 'sonarqube-token', variable: 'SONAR_TOKEN')]) {
                    withSonarQubeEnv('MySonarQube') {
                        // Use Jenkins Groovy env variables instead of Windows %VAR%
                        bat """
                        sonar-scanner.bat ^
                        -Dsonar.projectKey=${env.SONAR_PROJECT_KEY} ^
                        -Dsonar.sources=. ^
                        -Dsonar.host.url=${env.SONAR_HOST_URL} ^
                        -Dsonar.login=${SONAR_TOKEN}
                        """
                    }
                }
            }
        }

        // ✅ Stage 6: Quality Gate
        stage('Quality Gate') {
            steps {
                timeout(time: 60, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        // ✅ Stage 7: Trivy Scan (Docker image)
        stage('Trivy Scan') {
            steps {
                // Uses PATH, no full path needed
                bat 'trivy image --severity HIGH,CRITICAL --exit-code 1 bits1234/travel-app:latest'
            }
        }
    }
}

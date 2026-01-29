pipeline {
    agent any

    environment {
        // PATH me NodeJS, SonarScanner aur Trivy add kiya
        PATH = "C:\\Program Files\\nodejs;C:\\SonarScanner\\bin;C:\\Program Files\\Trivy;${env.PATH}"
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
                // Use the same credentials ID you created in Jenkins
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
                // Image name ko environment variable ya directly replace kar sakti ho
                bat '''
                trivy image --severity HIGH,CRITICAL --exit-code 1 bits1234/travel-app:latest
                '''
            }
        }
    }
}

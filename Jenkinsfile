pipeline {
    agent any

    environment {
        PATH = "C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\sonarqube\\sonar-scanner-8.0.1.6346-windows-x64\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\Trivy;${env.PATH}"
        SONAR_HOST_URL = 'http://localhost:9000'
        SONAR_PROJECT_KEY = 'TravelApp'
    }

    stages {

        stage('Check Node & NPM') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Check Trivy') {
            steps {
                bat 'trivy --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Prepare Docker Image') {
            steps {
                bat '''
                docker pull bits1234/travel-app:latest || docker build -t bits1234/travel-app:latest .
                '''
            }
        }

        stage('SonarQube Scan') {
            steps {
                withCredentials([string(credentialsId: 'sonarqube-token', variable: 'SONAR_TOKEN')]) {
                    withSonarQubeEnv('MySonarQube') {
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

        stage('Quality Gate') {
            steps {
                timeout(time: 60, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        // 🔓 NON-BLOCKING Trivy Scan
        stage('Trivy Scan (Non-Blocking)') {
            steps {
                bat '''
                trivy image --severity HIGH,CRITICAL bits1234/travel-app:latest || exit 0
                '''
            }
        }
    }
}

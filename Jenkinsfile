pipeline {
  agent any

  environment {
    PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
  }

  stages {

    stage('Check Node & NPM') {
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build Frontend') {
      steps {
        sh 'npm run build'
      }
    }

  }
}




pipeline {
  agent any

  stages {

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




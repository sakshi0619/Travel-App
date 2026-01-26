pipeline {
  agent any

  stages {

    stage('Install Dependencies') {
      steps {
        sh '/opt/homebrew/bin/npm install'
      }
    }

    stage('Build Frontend') {
      steps {
        sh '/opt/homebrew/bin/npm run build'
      }
    }

  }
}






pipeline 
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

    stage('Docker Build') {
      steps {
        sh 'docker build -t travel-frontend .'
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker run -d -p 3000:3000 travel-frontend'
      }
    }

    stage('Load Testing') {
      steps {
        sh 'hey -n 100 -c 5 http://localhost:3000'
      }
    }

  }
}


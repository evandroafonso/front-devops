pipeline {
  agent any {
    docker {
      image 'node:6-alpine' 
      args '-p 3000:3000' 
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Deploy') { 
      steps {
        input message: 'Finalizar deploy? (Click "Proceed" to continue)' 
      }
    }
  }
}
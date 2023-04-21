pipeline {
  agent any 
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
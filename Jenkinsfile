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
    stage('Deliver') { 
      steps {
        input message: 'Finished using the web site? (Click "Proceed" to continue)' 
      }
    }
  }
}
pipeline {
  agent any 
   environment {
        //once you sign up for Docker hub, use that user_id here
        registry = 'evandroafonso/frontdevops'
        //- update your credentials ID after creating credentials for connecting to Docker Hub
        registryCredential = ''
        dockerImage = ''
    }
  stages {
    stage('Checkout') {
      steps{
        checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/evandroafonso/front-devops.git']])
      }
    }
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
    stage('Build Docker Image'){
      steps {
        script {
          dockerImage = docker.build registry
        }
      }
    }
  }
}
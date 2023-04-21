pipeline {
  agent any 
   environment {
        //once you sign up for Docker hub, use that user_id here
        registry = "evandroafonso/frontdevops"
        //- update your credentials ID after creating credentials for connecting to Docker Hub
        registryCredential = 'fa32f95a-2d3e-4c7b-8f34-11bcc0191d70'
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
    stage('Dockerize') {
        steps {
          script {
            docker.build("front-devops:${env.BUILD_NUMBER}")
            docker.withRegistry('https://hub.docker.com/r/evandroafonso/frontdevops', 'docker-registry-credentials-id') {
              dockerImage.push()
            }
          }
        }
    }
  }
}
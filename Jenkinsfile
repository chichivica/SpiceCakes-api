pipeline {
    agent any
    stages {
        stage('fetch'){
            steps {
                echo 'fetching from repo'
                checkout scm
            }
        }
        stage('build'){
            steps {
                echo 'installing dependencies'
                sh 'npm install'
                sh 'sudo npm install -g mocha'
            }
        }
        stage('testing'){
            steps {
                echo 'testing'
                sh 'mocha tests/* --reporter xunit-file || true'
                junit "xunit.xml"
            }
        }
    }
}
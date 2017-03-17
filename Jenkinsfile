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
                parallel (
                   "hop": {
                       echo 'passed hop'

                       },
                   "gop": {
                       echo 'passed gop'
                   }
                )
                parallel (
                    "overalltest": {
                        echo 'passed 1'

                    },
                    "specific": {
                        echo 'passed 2'
                    }
                )
            }
        }
    }
}
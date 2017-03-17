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
                step([$class: 'XUnitBuilder', testTimeMargin: '3000', thresholdMode: 1,
                thresholds: [
                    [$class: 'FailedThreshold', failureNewThreshold: '', failureThreshold: '', unstableNewThreshold: '1', unstableThreshold: '1'],
                    [$class: 'SkippedThreshold', failureNewThreshold: '', failureThreshold: '', unstableNewThreshold: '', unstableThreshold: '']],
                tools: [
                    [$class: 'JUnitType', deleteOutputFiles: false, failIfNotNew: false, pattern: 'xunit.xml', skipNoTestFiles: false, stopProcessingIfError: true]]
                ])
            }

        }
    }
}
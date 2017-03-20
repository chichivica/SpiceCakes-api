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
        stage('passing tests'){
            steps {
                parallel (
                    "api": {
                        withEnv(["XUNIT_FILE=api-test.xml"]) {
                            sh 'mocha tests/* --reporter xunit-file || true'
                        }
                    },
                    "database": {
                        withEnv(["XUNIT_FILE=database-test.xml"]) {
                            sh 'mocha tests/* --reporter xunit-file || true'
                        }
                    }
                )
            }
        }
        stage('checking test results') {
            steps {
                parallel (
                    "api": {
                        step([$class: 'XUnitBuilder', testTimeMargin: '3000', thresholdMode: 1,
                        thresholds: [
                            [$class: 'FailedThreshold', failureNewThreshold: '', failureThreshold: '', unstableNewThreshold: '0', unstableThreshold: '0'],
                            [$class: 'SkippedThreshold', failureNewThreshold: '', failureThreshold: '', unstableNewThreshold: '', unstableThreshold: '']],
                        tools: [
                            [$class: 'JUnitType', deleteOutputFiles: false, failIfNotNew: false, pattern: 'api-test.xml', skipNoTestFiles: false, stopProcessingIfError: true]]
                        ])
                    },
                    "database": {
                        step([$class: 'XUnitBuilder', testTimeMargin: '3000', thresholdMode: 1,
                        thresholds: [
                            [$class: 'FailedThreshold', failureNewThreshold: '', failureThreshold: '', unstableNewThreshold: '0', unstableThreshold: '0'],
                            [$class: 'SkippedThreshold', failureNewThreshold: '', failureThreshold: '', unstableNewThreshold: '', unstableThreshold: '']],
                        tools: [
                            [$class: 'JUnitType', deleteOutputFiles: false, failIfNotNew: false, pattern: 'database-test.xml', skipNoTestFiles: false, stopProcessingIfError: true]]
                        ])
                    }

                )
            }
        }
        stage('deployment beta') {
            when {
                branch 'beta'
            }
            steps {
                echo 'deploy beta'
            }
        }
        stage('deployment development') {
            when {
                branch 'development'
            }
            steps {
                echo 'deploy development'
            }
        }
    }
}
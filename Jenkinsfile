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
                        environment {
                            XUNIT_FILE=test1.xml
                        }
                        sh 'mocha tests/* --reporter xunit --reporter-options output=test1.xml || true'
                    },
                    "database": {
                        sh 'mocha tests/* --reporter xunit --reporter-options output=test2.xml || true'
                    }
                )
            }
        }
        stage('checking result') {
            steps {
                parallel (
                    "api": {
                        step([$class: 'XUnitBuilder', testTimeMargin: '3000', thresholdMode: 1,
                        thresholds: [
                            [$class: 'FailedThreshold', failureNewThreshold: '', failureThreshold: '', unstableNewThreshold: '0', unstableThreshold: '0'],
                            [$class: 'SkippedThreshold', failureNewThreshold: '', failureThreshold: '', unstableNewThreshold: '', unstableThreshold: '']],
                        tools: [
                            [$class: 'JUnitType', deleteOutputFiles: false, failIfNotNew: false, pattern: 'test1.xml', skipNoTestFiles: false, stopProcessingIfError: true]]
                        ])
                    },
                    "database": {
                        step([$class: 'XUnitBuilder', testTimeMargin: '3000', thresholdMode: 1,
                        thresholds: [
                            [$class: 'FailedThreshold', failureNewThreshold: '', failureThreshold: '', unstableNewThreshold: '0', unstableThreshold: '0'],
                            [$class: 'SkippedThreshold', failureNewThreshold: '', failureThreshold: '', unstableNewThreshold: '', unstableThreshold: '']],
                        tools: [
                            [$class: 'JUnitType', deleteOutputFiles: false, failIfNotNew: false, pattern: 'test2.xml', skipNoTestFiles: false, stopProcessingIfError: true]]
                        ])
                    }

                )
            }
        }
    }
}
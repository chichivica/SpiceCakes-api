pipeline {

    agent {
        label 'master'
    }
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
                            sh 'mocha tests/api.spec.js --reporter xunit-file || true'
                        }
                    },
                    "database": {
                        withEnv(["XUNIT_FILE=database-test.xml"]) {
                            sh 'mocha tests/database.spec.js --reporter xunit-file || true'
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
            agent{
                label 'beta'
            }
            steps {
                sh 'mkdir /hove/devhouse/spice-cakes'
                echo 'deploy beta'
            }
        }
        stage('deployment development') {
            when {
                branch 'development'
            }
            steps {
                sh "cd /home/devhouse/spice-cakes"
                sh "sudo pm2 stop ecosystem.config.js"
                //sh "sudo pm2 stop SpiceCakes-API"
                echo "deploy development"
                echo "$WORKSPACE"
                echo "${env.WORKSPACE}"
                sh "rsync -arv ${env.WORKSPACE}/ /home/devhouse/spice-cakes"
                sh "sudo pm2 start ecosystem.config.js"
                //sh "sudo pm2 start SpiceCakes-API"
            }
        }
    }
}
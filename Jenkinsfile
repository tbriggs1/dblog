pipeline {
    agent any

    stages {
        stage('gitcheckout'){
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/tbriggs1/dblog']])
            }
        }
            stage('buildit') {
                steps {
                    sh '''pwd
                        ls'''
                }
            }
    }
}
properties([
  pipelineTriggers([
    [$class: 'GitHubPushTrigger']
  ])
])

def buildDockerImage() {
    // Capture the output of the shell commands
    def output = sh(script: '''
        docker build -t blog_ui .
        docker images
    ''', returnStdout: true).trim()
    
    // Print the captured output to the console log
    echo "Shell output:\n${output}"
}

def gitCheckout(gitUrl) {
    checkout([$class: 'GitSCM',
                  branches: [[name: '*/main']],
                  extensions: [],
                  userRemoteConfigs: [[url: gitUrl]]])
}


node{
    stage('codeCheckout'){
        // Using the GitSCM class with a map of parameters to checkout the repo
        gitCheckout('https://github.com/tbriggs1/dblog')
    }
    stage('build') {
        // Exectute shell command test
        buildDockerImage()
    }
    stage('terraformCheckout') {
        gitCheckout('https://github.com/tbriggs1/dblog_infra')
    }
    stage('terraform') {
        sh '''
            terraform init
            terraform plan
        '''
    }
    stage('ssh') {
        sh '''
            docker save -o ui.tar ui
            scp -i /var/lib/jenkins/tom.pem -o StrictHostKeyChecking=no ubuntu@dev.tom-briggs.com:/home/ubuntu
            ssh -i /var/lib/jenkins/tom.pem -o StrictHostKeyChecking=no ubuntu@dev.tom-briggs.com
            sudo docker load /home/ubuntu/ui.tar
            sudo docker run -d -p 80:80 ui
        '''
    }
}
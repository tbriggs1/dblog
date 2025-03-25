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
            docker save -o blog_ui.tar blog_ui
            scp -i /var/lib/jenkins/tom.pem -o StrictHostKeyChecking=no blog_ui.tar ubuntu@dev.tom-briggs.com:/home/ubuntu
            ssh -tt -i /var/lib/jenkins/tom.pem -o StrictHostKeyChecking=no ubuntu@dev.tom-briggs.com "ssudo docker load -i blog_ui.tar &&
            sudo docker run -d -p 80:80 blog_ui:latest"
        '''
    }
}
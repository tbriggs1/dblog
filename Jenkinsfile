def runShellCommands() {
    // Capture the output of the shell commands
    def output = sh(script: '''
        docker build -t blog_ui
        docker images
        docker run -p 80:80 -d blog_ui
    ''', returnStdout: true).trim()
    
    // Print the captured output to the console log
    echo "Shell output:\n${output}"
}

def buildDockerImage() {
    sh '''
        docker build -t blog_ui
        docker images
        docker run -p 80:80 -d blog_ui
    '''
}

node{
    stage('gitcheckout'){
        // Using the GitSCM class with a map of parameters to checkout the repo
        checkout([$class: 'GitSCM',
                  branches: [[name: '*/main']],
                  extensions: [],
                  userRemoteConfigs: [[url: 'https://github.com/tbriggs1/dblog']]])
    }
    stage('build') {
        // Exectute shell command test
        runShellCommands()
    }
}
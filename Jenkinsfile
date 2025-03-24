def runShellCommands() {
    // Capture the output of the shell commands
    def output = sh(script: '''
        pwd
        ls
    ''', returnStdout: true).trim()
    
    // Print the captured output to the console log
    echo "Shell output:\n${output}"

node{
    stage('gitcheckout'){
        // Using the GitSCM class with a map of parameters to checkout the repo
        checkout([$class: 'GitSCM',
                  branches: [[name: '*/main']],
                  extensions: [],
                  userRemoteConfigs: [[url: 'https://github.com/tbriggs1/dblog']]])
    }
    stage('buildit') {
        // Exectute shell command
        runShellCommands()
    }
}
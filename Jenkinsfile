def runShellCommands(){
    ssh '''
        pwd
        ls
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
    stage('buildit') {
        // Exectute shell command
        runShellCommands()
    }
}
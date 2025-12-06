pipeline {
    agent any

    tools {
        nodejs "NODE20"
    }

    environment {
        REPORT_DIR = "playwright-report"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/rukesh2/automation-playwright.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test --reporter=html'
            }
        }

        stage('Publish HTML Report') {
            steps {
                publishHTML target: [
                    reportDir: "${REPORT_DIR}",
                    reportFiles: 'index.html',
                    reportName: 'PlaywrightTestReport',   // 🔥 clean name (optional)
                    keepAll: true
                ]
            }
        }
    }

    post {
        success {
            emailext to: "rukeshruk1991@gmail.com",
                subject: "SUCCESS ✓ Playwright Automation - Jenkins Build #${BUILD_NUMBER}",
                body: """
🎉 Build Success

Project: Automation Playwright
Build URL: ${BUILD_URL}
Report: ${BUILD_URL}PlaywrightTestReport/

All tests passed successfully.
                """
        }
        failure {
            emailext to: "rukeshruk1991@gmail.com",
                subject: "❌ FAILED — Playwright Automation - Jenkins Build #${BUILD_NUMBER}",
                body: """
🚨 Build Failed

Project: Automation Playwright
Build URL: ${BUILD_URL}

Check console logs or HTML report for details.
                """
        }
    }
}

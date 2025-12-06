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
                sh 'npx playwright install --with-deps'
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
        mail to: "rukeshruk1991@gmail.com",
            subject: "SUCCESS ✓ Playwright Automation - Jenkins Build #${BUILD_NUMBER}",
            body: "Build succeeded — ${BUILD_URL}"
    }
    failure {
        mail to: "rukeshruk1991@gmail.com",
            subject: "❌ FAILED — Playwright Automation - Jenkins Build #${BUILD_NUMBER}",
            body: "Build failed — check logs: ${BUILD_URL}"
    }
}
}

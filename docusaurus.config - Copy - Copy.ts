import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DevOpsWorld',
      items: [
        {
          type: 'dropdown',
          label: 'DevOps',
          position: 'left',
          items: [
            {
              label: 'Capstone Project',
              to: '/docs/devops/capstone-project',
            },
            {
              label: 'Nagios',
              to: '/docs/devops/nagios',
            },
            {
              label: 'Jenkins',
              to: '/docs/devops/jenkins',
            },
            {
              label: 'Puppet',
              to: '/docs/devops/puppet',
            },
            {
              label: 'Ansible Tutorials',
              to: '/docs/devops/ansible',
            },
            {
              label: 'Kubernetes',
              to: '/docs/devops/kubernetes',
            },
            {
              label: 'Docker',
              to: '/docs/devops/docker',
            },
            {
              label: 'Maven - Build Tool',
              to: '/docs/devops/maven',
            },
            {
              label: 'Git - Distributed Version Control',
              to: '/docs/devops/git',
            },
            {
              label: 'System',
              to: '/docs/devops/system',
            },
            {
              label: 'SDLC & DevOps - Introduction',
              to: '/docs/devops/sdlc-intro',
            },
            {
              label: 'Vagrant',
              to: '/docs/devops/vagrant',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Azure DevOps',
          position: 'left',
          items: [
            {
              label: 'Azure Certification Details',
              to: '/docs/azure/certification-details',
            },
            {
              label: 'SDLC & DevOps – Introduction',
              to: '/docs/azure/sdlc-intro',
            },
            {
              label: 'Azure DevOps',
              to: '/docs/azure/azure-devops',
            },
            {
              label: 'Azure Release Pipeline',
              to: '/docs/azure/release-pipeline',
            },
            {
              label: 'Azure DevOps Tools',
              to: '/docs/azure/devops-tools',
            },
            {
              label: 'Azure Monitoring',
              to: '/docs/azure/monitoring',
            },
            {
              label: 'Azure ARM Templates',
              to: '/docs/azure/arm-templates',
            },
            {
              label: 'Jenkins with Azure Repos',
              to: '/docs/azure/jenkins-azure-repos',
            },
            {
              label: 'Azure DevOps – Self-hosted agents',
              to: '/docs/azure/self-hosted-agents',
            },
            {
              label: 'Azure DevOps – Microsoft-hosted agents',
              to: '/docs/azure/microsoft-hosted-agents',
            },
            {
              label: 'Azure DevOps – Azure pipeline using GitHub',
              to: '/docs/azure/pipeline-github',
            },
            {
              label: 'Azure DevOps-Azure Pipeline',
              to: '/docs/azure/azure-pipeline',
            },
            {
              label: 'Azure DevOps – CICD Pipeline',
              to: '/docs/azure/cicd-pipeline',
            },
            {
              label: 'Azure Repo',
              to: '/docs/azure/repo',
            },
            {
              label: 'Git – Distributed Version Control System',
              to: '/docs/azure/git',
            },
            {
              label: 'Azure Add AD Users',
              to: '/docs/azure/add-ad-users',
            },
            {
              label: 'Agile Terminology',
              to: '/docs/azure/agile-terminology',
            },
            {
              label: 'Azure Project Processes',
              to: '/docs/azure/project-processes',
            },
            {
              label: 'Azure DevOps Organization and Its Configuration',
              to: '/docs/azure/organization-config',
            },
            {
              label: 'Azure Projects',
              to: '/docs/azure/projects',
            },
            {
              label: 'Azure Active Directory Overview',
              to: '/docs/azure/active-directory',
            },
            {
              label: 'Azure DevOps – Add Users and Set Permissions',
              to: '/docs/azure/add-users-permissions',
            },
            {
              label: 'Azure DevOps – Project Teams',
              to: '/docs/azure/project-teams',
            },
            {
              label: 'Azure Boards',
              to: '/docs/azure/boards',
            },
            {
              label: 'Azure Boards Lab',
              to: '/docs/azure/boards-lab',
            },
            {
              label: 'Azure Sprint Lab',
              to: '/docs/azure/sprint-lab',
            }
          ],
        },
        {
          type: 'dropdown',
          label: 'AWS Solution Architect Tutorials',
          position: 'left',
          items: [
            {
              label: 'AWS Certified Solutions Architect',
              to: '/docs/aws/certified-solutions-architect',
            },
            {
              label: 'AWS Cloud Computing',
              to: '/docs/aws/cloud-computing',
            },
            {
              label: 'AWS Fundamentals',
              to: '/docs/aws/fundamentals',
            },
            {
              label: 'AWS History',
              to: '/docs/aws/history',
            },
            {
              label: 'AWS Sign Up',
              to: '/docs/aws/sign-up',
            },
            {
              label: 'EC2',
              to: '/docs/aws/ec2',
            },
            {
              label: 'AWS – IAM',
              to: '/docs/aws/iam',
            },
            {
              label: 'AWS – EBS',
              to: '/docs/aws/ebs',
            },
            {
              label: 'Simple Storage Service – S3',
              to: '/docs/aws/s3',
            },
            {
              label: 'AWS – Cloud Front',
              to: '/docs/aws/cloudfront',
            },
            {
              label: 'AWS – DynamoDB',
              to: '/docs/aws/dynamodb',
            },
            {
              label: 'AWS – Elastic Load Balancer',
              to: '/docs/aws/elb',
            },
            {
              label: 'AWS – Autoscaling and Launch Configuration',
              to: '/docs/aws/autoscaling',
            },
            {
              label: 'AWS – SNS',
              to: '/docs/aws/sns',
            },
            {
              label: 'AWS – VPC Peering',
              to: '/docs/aws/vpc-peering',
            },
            {
              label: 'AWS – VPC',
              to: '/docs/aws/vpc',
            },
            {
              label: 'AWS – Transit Gateway',
              to: '/docs/aws/transit-gateway',
            },
            {
              label: 'CloudWatch – Alarm and Logs',
              to: '/docs/aws/cloudwatch',
            },
            {
              label: 'AWS – SSM',
              to: '/docs/aws/ssm',
            },
            {
              label: 'AWS – Lambda API Gateway',
              to: '/docs/aws/lambda-api-gateway',
            },
            {
              label: 'AWS – RDS',
              to: '/docs/aws/rds',
            },
            {
              label: 'AWS – CloudFormation',
              to: '/docs/aws/cloudformation',
            },
            {
              label: 'AWS – Beanstalk',
              to: '/docs/aws/beanstalk',
            },
            {
              label: 'AWS – ECS',
              to: '/docs/aws/ecs',
            },
            {
              label: 'AWS – EKS',
              to: '/docs/aws/eks',
            },
            {
              label: 'AWS – WAF',
              to: '/docs/aws/waf',
            },
            {
              label: 'Quizzes',
              to: '/docs/aws/quizzes',
            },
            {
              label: "FAQ's",
              to: '/docs/aws/faqs',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Terraform Tutorials',
          position: 'left',
          items: [
            {
              label: 'Terraform – dynamic blocks',
              to: '/docs/terraform/dynamic-blocks',
            },
            {
              label: 'Terraform – Locals',
              to: '/docs/terraform/locals',
            },
            {
              label: 'Terraform – AWS Installation',
              to: '/docs/terraform/aws-installation',
            },
            {
              label: 'Terraform Autoscaling',
              to: '/docs/terraform/autoscaling',
            },
            {
              label: 'Terraform Blocks',
              to: '/docs/terraform/blocks',
            },
            {
              label: 'Terraform conditional statements',
              to: '/docs/terraform/conditional-statements',
            },
            {
              label: 'Terraform DataSource',
              to: '/docs/terraform/datasource',
            },
            {
              label: 'Terraform ELB',
              to: '/docs/terraform/elb',
            },
            {
              label: 'Terraform IAM',
              to: '/docs/terraform/iam',
            },
            {
              label: 'Terraform Language Basics',
              to: '/docs/terraform/language-basics',
            },
            {
              label: 'Terraform Loops (for, for each)',
              to: '/docs/terraform/loops',
            },
            {
              label: 'Terraform Modules',
              to: '/docs/terraform/modules',
            },
            {
              label: 'Terraform Overview',
              to: '/docs/terraform/overview',
            },
            {
              label: 'Terraform providers resources',
              to: '/docs/terraform/providers-resources',
            },
            {
              label: 'Terraform Provisioner',
              to: '/docs/terraform/provisioner',
            },
            {
              label: 'Terraform RDS',
              to: '/docs/terraform/rds',
            },
            {
              label: 'Terraform state file on S3',
              to: '/docs/terraform/state-file-s3',
            },
            {
              label: 'Terraform Variable and DataSource Example',
              to: '/docs/terraform/variable-datasource-example',
            },
            {
              label: 'Terraform VPC',
              to: '/docs/terraform/vpc',
            },
            {
              label: 'Terraform VPC Without Module',
              to: '/docs/terraform/vpc-without-module',
            },
            {
              label: 'Terraform VpcModule',
              to: '/docs/terraform/vpc-module',
            },
            {
              label: 'Terraform Workflow',
              to: '/docs/terraform/workflow',
            },
            {
              label: 'Terraform Workspace',
              to: '/docs/terraform/workspace',
            },
            {
              label: 'Terraform – Variables',
              to: '/docs/terraform/variables',
            },
            {
              label: 'Terraform – EBS Volume',
              to: '/docs/terraform/ebs-volume',
            },
            {
              label: 'Test Your Installation',
              to: '/docs/terraform/test-installation',
            },
            {
              label: 'Upgrading Kubernetes',
              to: '/docs/terraform/upgrading-kubernetes',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Linux Basics',
          position: 'left',
          items: [
            {
              label: 'Linux – Introduction',
              to: '/docs/linux/introduction',
            },
            {
              label: 'Linux – Installation',
              to: '/docs/linux/installation',
            },
            {
              label: 'Linux – File and Directory Management',
              to: '/docs/linux/file-directory-management',
            },
            {
              label: 'Linux – Permissions and Ownership',
              to: '/docs/linux/permissions-ownership',
            },
            {
              label: 'Linux – Package Management',
              to: '/docs/linux/package-management',
            },
            {
              label: 'Linux – User and Group Management',
              to: '/docs/linux/user-group-management',
            },
            {
              label: 'Linux – Networking Basics',
              to: '/docs/linux/networking-basics',
            },
            {
              label: 'Linux – Processes and System Monitoring',
              to: '/docs/linux/processes-monitoring',
            },
            {
              label: 'Linux – File System Basics',
              to: '/docs/linux/file-system-basics',
            },
            {
              label: 'Linux – Shell Scripting Basics',
              to: '/docs/linux/shell-scripting',
            },
            {
              label: 'Linux – Archiving and Compression',
              to: '/docs/linux/archiving-compression',
            },
            {
              label: 'Linux – Cron Jobs and Automation',
              to: '/docs/linux/cron-jobs-automation',
            },
            {
              label: 'Linux – System Logs',
              to: '/docs/linux/system-logs',
            },
            {
              label: 'Linux – Disk Usage and Partition Management',
              to: '/docs/linux/disk-partition-management',
            },
            {
              label: 'Linux – Security and Firewalls',
              to: '/docs/linux/security-firewalls',
            },
            {
              label: 'Linux – Remote Access with SSH',
              to: '/docs/linux/remote-access-ssh',
            },
            {
              label: 'Linux – Basic Troubleshooting',
              to: '/docs/linux/basic-troubleshooting',
            },
            {
              label: 'Linux – Advanced Topics Overview',
              to: '/docs/linux/advanced-topics',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Python Ligne de Commande',
          position: 'left',
          items: [
            {
              label: 'Python – Introduction',
              to: '/docs/python-cli/introduction',
            },
            {
              label: 'Python – Installation et Configuration',
              to: '/docs/python-cli/installation-configuration',
            },
            {
              label: 'Python – Gestion des Fichiers et Répertoires',
              to: '/docs/python-cli/files-directories',
            },
            {
              label: 'Python – Modules de Base pour la Ligne de Commande',
              to: '/docs/python-cli/basic-modules',
            },
            {
              label: 'Python – Création d\'Outils CLI avec argparse',
              to: '/docs/python-cli/argparse',
            },
            {
              label: 'Python – Automatisation des Tâches Système',
              to: '/docs/python-cli/system-automation',
            },
            {
              label: 'Python – Gestion des Erreurs et Logging',
              to: '/docs/python-cli/error-logging',
            },
            {
              label: 'Python – Interaction avec les API REST',
              to: '/docs/python-cli/rest-api',
            },
            {
              label: 'Python – Exécution de Commandes Système avec subprocess',
              to: '/docs/python-cli/subprocess',
            },
            {
              label: 'Python – Manipulation des Données (CSV, JSON)',
              to: '/docs/python-cli/data-manipulation',
            },
            {
              label: 'Python – Téléchargement de Fichiers et Réseau avec requests',
              to: '/docs/python-cli/network-requests',
            },
            {
              label: 'Python – Outils CLI Avancés avec click',
              to: '/docs/python-cli/click',
            },
            {
              label: 'Python – Intégration avec des Outils Externes',
              to: '/docs/python-cli/external-tools',
            },
            {
              label: 'Python – Gestion des Environnements Virtuels',
              to: '/docs/python-cli/virtual-environments',
            },
            {
              label: 'Python – Développement et Debugging des Scripts',
              to: '/docs/python-cli/development-debugging',
            },
            {
              label: 'Python – Création de Packages CLI',
              to: '/docs/python-cli/cli-packages',
            },
            {
              label: 'Python – Advanced Topics Overview',
              to: '/docs/python-cli/advanced-topics',
            },
          ],
        },
        // ... autres menus
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

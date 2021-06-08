This is a project that demonstrates the process of CI/CD by the use of AWS tools CodeDeploy, CodePipeline and EC2.
With the help of CodeDeploy, a pipeline is initiated, if any change in this repository is made, to store the repository files in S3 bucket.
The S3 bucket then triggers another pipeline to store these in the EC2 instance/instances.
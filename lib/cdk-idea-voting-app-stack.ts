import * as cdk from 'aws-cdk-lib';
import { RemovalPolicy } from 'aws-cdk-lib';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export class CdkIdeaVotingAppStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // what do we need?
        // API Gateway
        // Cognito
        // Several AWS Lambdas
        // DynamoDb
        const table = new Table(this, 'IdeasTable', {
            billingMode: BillingMode.PAY_PER_REQUEST,
            partitionKey: { name: 'pk', type: AttributeType.STRING },
            sortKey: { name: 'sk', type: AttributeType.STRING },
            removalPolicy: RemovalPolicy.DESTROY,
            tableName: 'IdeasTable',
        });
        
    }
}

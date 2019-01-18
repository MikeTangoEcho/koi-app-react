# Koi App React

Basic Chat that will connect to a instance of the koi-api.

# Run

```
    npm start 
```

# Test

```
    npm test
```

# Build

```
    npm run build
```

# Deploy Infra

## Install AWS Cli

## Make sure you have all the required IAM access

Read the file `aws-iam.json`, better knowing what you do.

You will need to modify it, if you want to change
the stack name, bucket name, or give you more access.
Then you can create a custom strategy and link it to the user/role
you are using to deploy the stack.

## Create Cloudformation stack

```
    aws cloudformation deploy \
        --stack-name koi-app-react-stack \
        --template template.yaml
```

Creating the Cloudfront distribution will take a long time, since
it replicate all other the world according to the PriceClass.

**Warning: The first time even when cloudfront is active, it may take hours before it get fully operational.
Until then you will see all your requests  get redirected on the S3 bucket with an Access Denied XML response.
Be patient and wait, doing so i obviously dont't recommend you to modify dns records until the cache is op.**

If you want to change parameters:

```
    aws cloudformation deploy \
        --stack-name koi-app-react-stack \
        --template template.yaml \
        --parameter-overrides KoiDomainName=www.anotherdomain.com KoiBucketName=mysweetbucket
```

* [Cloudformation](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/index.html)

# Deploy the App

```
    npm run build
    aws s3 sync ./build s3://BUCKET_NAME
    aws cloudfront create-invalidation \
        --distribution-id DISTRIBUTION_ID \
        --paths "/*"
```

When invalidating dont forget the quotes else your bash will replace it with your folders.

If you love perf optimization, you can retrieve the list of synced items and only invalidate theses.
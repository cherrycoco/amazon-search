# Amazon Search Microservice

## What Is It?

This microservice simulates search activity of Amazon's website. 

## App Plan

<a href="https://docs.google.com/document/d/1aMCOd23jQX6GnpqQF4qTpHij4GL_973k5oOySg74kGM/edit?usp=sharing">App Plan</a>

## What Did I Do?

I architected the routes, endpoints, and database functions in a Node.js runtime environment. To evaluate my application's performance, I stress tested my heaviest endpoint using custom Artillery settings. Initially, my
``GET search/:page`` functionality could only reach a throughput of 80 requests per second (RPS) and a P95 latency of 100 milliseconds (ms) to complete a request. However, after horizontally scaling my ElasticSearch nodes and implemented a Redis cache, I increased my throughput by 1500% to 1,200 RPS and with a consistent P95 latency of 100ms! 

In addition, I architected a background worker to communicate with the Product Microservice - to ensure the search database is up-to-date with the Product Microservice database. I constructed my background worker to use AWS SQS - to only query my database when there is capacity.

I then deploy my service on Amazon Web Services EC2 Linux Instances using Docker. I used a cluster of auto-scaling enabled t2.micro instances to hold my application's web server. I used AWS Elasticache to manage my Redis and AWS ElasticSearch to manage my database. I configured a VPC for my AWS resources, which allowed for a more secured network of communication between my instances.

## Technologies
Powered by: AWS (EC2, ElastiCache, SQS, ElasticSearch), Docker, Node.js, Koa.js, ElasticSearch, Redis
Test: Chai, ChaiHTTP, Istanbul
Load-test: Artillery
Performance Monitor: New Relic

## Requirements

- Node 6.4.x
- Koa 2.4.1
- ElasticSearch 14.0.0
- Redis

### Installing Dependencies

From within the root directory:

`npm install`

## Roadmap

View the project roadmap [here](https://trello.com/b/YEVVUNMx/roadmap)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

# Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)

## Usage

> Some usage instructions

## Requirements

- Node 6.9.x
- Redis 3.2.x
- Postgresql 9.6.x
- etc

## Other Information

(TODO: fill this out with details about your project. Suggested ideas: architecture diagram, schema, and any other details from your app plan that sound interesting.)


[![Build Status](https://dev.azure.com/creditsafe/Identity_Resolution/_apis/build/status%2Fusp-integration-tests?branchName=develop&jobName=integrationTests)](https://dev.azure.com/creditsafe/Identity_Resolution/_build/latest?definitionId=5152&branchName=develop)

# Introduction

This project currently runs integration tests targetting our internal search API (USP) against multiple countries to ensure that overall search "behaviours" are what we expect.

These tests are scheduled to run once a week (Saturday) in off peak hours to maintain a weekly audit trail. They are also triggered via an external pipeline (usp-infra) whenever a deployment is made to an environment (dev, test, stage, prod)

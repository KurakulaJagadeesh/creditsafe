# Introduction 
This project is a replica of Connects searchcriteria/validate endpoint. 

As part of the USP project, the search team are taking over ownership/responsibility for defining valid search criteria sets. Therefore, this repo will contain all of the logic that facilitates the following requirements:

* Validating the search criteria sets against the input query parameters

This project contains replicated code that has been updated to pass linter rules.

# Setup
## Pre Requisites
* nodeJS v18+
* vsCode Extensions
    * eslint
    * coverage gutters

## Set up instructions
* Run npm install

# Criteria validation Example
The following request has input query and criteria sets

```json
{
  "query": {
    "name": "bank",
    "type" : "Ltd"
  },
  "criteriaSets": [
    {
      "id": {
        "required": true
      }
    },
    {
      "safeNo": {
        "minLength": 10,
        "maxLength": 10,
        "validationRegExp": "GB\\d{8}",
        "required": true
      }
    },
    {
      "regNo": {
        "minLength": 2,
        "maxLength": 8,
        "required": true
      }
    },
    {
      "name": {
        "required": false
      },
      "type": {
        "allowedValues": [
          "Ltd",
          "NonLtd"
        ],
        "required": false
      },
      "status": {
        "allowedValues": [
          "Active",
          "NonActive"
        ],
        "required": false
      },
      "address": {
        "street": {
          "required": false
        },
        "city": {
          "required": false
        },
        "postCode": {
          "minLength": 2,
          "required": false
        }
      },
      "phoneNo": {
        "required": false
      }
    }
  ]
}

```
Example output
```json
{
    "isQueryValid": true
}

```

# Architecture

The criteria sets are stored in a separate [repository](https://dev.azure.com/creditsafe/Identity_Resolution/_git/usp-company-search-criteria-config) to the lambda. This is because they are shared between multiple lambdas (search criteria and usp company search). 

This code is intended to be used as a standalone module for lamdas, and as an importable module, to be reused by external lamdas. For example, usp company search endpoint will need to have the capability to validate criteria sets against a input query.

## Run unit tests
Use the following command to run the unit tests & code coverage:

`npm run coverage`

## Run build
This project uses esbuild to transpile and bundle the code into a single file. There are a couple of considerations with the current setup:

* It does not support "top level await" calls. This is because the esbuild bundler does not support it yet. 
* It uses a pre & post script to dynamically modify the code to workaround an issue caused by the OTEL lambda layer.


# Updates
. 
This repo is for any changes **specifically for the searchcriteria/validate lambda**


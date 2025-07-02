# Introduction 
This project is a replica of Connects search criteria endpoint. 

As part of the USP project, the search team are taking over ownership/responsibility for defining valid search criteria sets. Therefore, this repo will contain all of the logic that facilitates the following requirements:

* Single country - Search criteria
    * Return a list of "criteria sets" that are valid for a particular country
* Multi country - Search criteria
    * Return a list of generic "criteria sets" that are relevant for each country

This project will contain simple lambda code that will return a relevant JSON object (containing criteria sets)

# Criteria Sets
Each set consists of permutations of valid parameters (from the usp company search api) in a JSON object 

Basic Example:

* Set 1

    * RegNo

* Set 2

    * RegNo, Type, Address

Example JSON output
```json
"criteriaSets": [
    {
         "regNo": {
            "validationRegExp": "\\d{8}"
            "required": true,
            "minLength": 1
        },
    },
    {
        "regNo": {
            "validationRegExp": "\\d{8}"
            "required": true,
            "minLength": 1
        },
        "type": {
            "allowedValues": [
                "Ltd",
                "NonLtd"
            ],
            "required": false
        },
        "address": {
            "city": {
                "required": false
            }
        }
    }
]

```

# Architecture

The criteria sets are stored in a [separate repository](https://dev.azure.com/creditsafe/Identity_Resolution/_git/usp-company-search-criteria-config) to the lambda. This is because they are shared between multiple lambdas (search criteria and usp company search). 

In order for these static files to be shared, each consuming lambda uses this repo as a submodule. This effectively clones a copy of this repo and checks out a specific commit.

## Prerequisites
- Node version 20.11.0
- Git

# Running locally
To run this project in local machine, you'll need to initialise the git submodules to clone in the static configuration files. This can be done by running the following command in a Git CLI

`git submodule update --init --recursive`

## Package.json scripts

### Run command
We use the npm package dotenv and a ".env" file to inject environment variables when running locally. Please note, this file is **NOT** used in any deployed environment. Instead they use variables defined in terraform.

In order to get the env variables loaded, use the built in (as of Node 20) env command e.g.

`node --env-file=.env ./src/index.mjs`

### Run unit tests
Use the following command to run the unit tests & code coverage:

`npm run coverage`

### Run build
This project uses esbuild to transpile and bundle the code into a single file. There are a couple of considerations with the current setup:

* It does not support "top level await" calls. This is because the esbuild bundler does not support it yet. 
* It uses a pre & post script to dynamically modify the code to workaround an issue caused by the OTEL lambda layer. For more information see next section.

# Updates
Updates to the static search criteria JSON files is done [separately](https://dev.azure.com/creditsafe/Identity_Resolution/_git/usp-company-search-criteria-config) and in its own repo. Any changes to these configurations are also deployed separately. 

This repo is for any changes **specifically for the lambda**


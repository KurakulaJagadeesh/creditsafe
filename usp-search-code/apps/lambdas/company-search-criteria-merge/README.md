# Introduction 
This project is a replica of Connects searchcriteria/merge endpoint. 

As part of the USP project, the search team are taking over ownership/responsibility for defining valid search criteria sets. Therefore, this repo will contain all of the logic that facilitates the following requirements:

* Merging criteria set arrays and finding common elements between them

This project contains replicated code that has been updated to pass linter rules.

# Setup
## Pre Requisites
* nodeJS v18+
* vsCode Extensions
    * eslint
    * coverage gutters

## Set up instructions
* Run npm install

# Criteria Set Merging Example
The following request object contains criteria sets for two countries: DE and GB

```json
{
    "countriesCriteria": [
        {
            "criteriaSets": [
                {
                    "id": {
                        "required": true
                    }
                },
                {
                    "safeNo": {
                        "validationRegExp": "DE\\d{8}",
                        "maxLength": 10,
                        "required": true,
                        "minLength": 10
                    }
                },
                {
                    "vatNo": {
                        "validationRegExp": "DE\\d{9}",
                        "maxLength": 11,
                        "required": true,
                        "minLength": 11
                    }
                },
                {
                    "regNo": {
                        "validationRegExp": "^(?!^\\s*HR\\s*$)(?!^\\s*HRB\\s*$)(?!^\\s*HRA\\s*$)(?!^\\s*GnR\\s*$)(?!^\\s*PR\\s*$)(?!^\\s*IN\\s*$).*$",
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
                },
                {
                    "name": {
                        "required": false,
                        "minLength": 2
                    },
                    "tradeName": {
                        "required": false,
                        "minLength": 2
                    },
                    "address": {
                        "simpleValue": {
                            "required": false,
                            "minLength": 2
                        },
                        "postCode": {
                            "required": false,
                            "minLength": 2
                        },
                        "city": {
                            "required": false
                        },
                        "street": {
                            "required": false
                        }
                    },
                    "type": {
                        "allowedValues": [
                            "Ltd",
                            "NonLtd"
                        ],
                        "required": false
                    },
                    "phoneNo": {
                        "required": false
                    },
                    "status": {
                        "allowedValues": [
                            "Active",
                            "NonActive"
                        ],
                        "required": false
                    }
                }
            ],
            "country": "DE"
        },
        {
            "criteriaSets": [
                {
                    "id": {
                        "required": true
                    }
                },
                {
                    "safeNo": {
                        "validationRegExp": "GB\\d{8}",
                        "maxLength": 10,
                        "required": true,
                        "minLength": 10
                    }
                },
                {
                    "regNo": {
                        "maxLength": 8,
                        "required": true,
                        "minLength": 2
                    }
                },
                {
                    "vatNo": {
                        "validationRegExp": "GB\\d{9}",
                        "maxLength": 11,
                        "required": true,
                        "minLength": 11
                    }
                },
                {
                    "exact": {
                        "allowedValues": [
                            true,
                            false
                        ],
                        "required": false
                    },
                    "name": {
                        "required": false
                    },
                    "address": {
                        "simpleValue": {
                            "required": false,
                            "minLength": 2
                        },
                        "postCode": {
                            "required": false,
                            "minLength": 2
                        },
                        "city": {
                            "required": false
                        },
                        "street": {
                            "required": false
                        }
                    },
                    "type": {
                        "allowedValues": [
                            "Ltd",
                            "NonLtd"
                        ],
                        "required": false
                    },
                    "phoneNo": {
                        "required": false
                    },
                    "status": {
                        "allowedValues": [
                            "Active",
                            "NonActive"
                        ],
                        "required": false
                    }
                }
            ],
            "country": "GB"
        }
    ],
    "aggregate": {}
}

```



Example JSON output
```json
{
    "countries": [
        "DE",
        "GB"
    ],
    "aggregate": [
        {
            "id": {
                "required": true
            }
        },
        {
            "safeNo": {
                "required": true
            }
        },
        {
            "regNo": {
                "required": true
            }
        },
        {
            "vatNo": {
                "required": true
            }
        },
        {
            "name": {
                "required": false
            },
            "address": {
                "simpleValue": {
                    "required": false
                },
                "postCode": {
                    "required": false
                },
                "city": {
                    "required": false
                },
                "street": {
                    "required": false
                }
            },
            "type": {
                "allowedValues": [
                    "Ltd",
                    "NonLtd"
                ],
                "required": false
            },
            "phoneNo": {
                "required": false
            },
            "status": {
                "allowedValues": [
                    "Active",
                    "NonActive"
                ],
                "required": false
            }
        }
    ]
}

```

# Architecture

The criteria sets are stored in a separate [repository](https://dev.azure.com/creditsafe/Identity_Resolution/_git/usp-company-search-criteria-config) to the lambda. This is because they are shared between multiple lambdas (search criteria and usp company search). 

This code is intended to be used as a standalone module for lamdas, and as an importable module, to be reused by external lamdas. For example, usp company search endpoint will need to have the capability to merge criteria sets for multi country searches. 

## Run unit tests
Use the following command to run the unit tests & code coverage:

`npm run coverage`

## Run build
This project uses esbuild to transpile and bundle the code into a single file. There are a couple of considerations with the current setup:

* It does not support "top level await" calls. This is because the esbuild bundler does not support it yet. 
* It uses a pre & post script to dynamically modify the code to workaround an issue caused by the OTEL lambda layer.


# Updates
Updates to the static search criteria JSON files is done separately and in its own repo. Any changes to these configurations are also deployed separately. 

This repo is for any changes **specifically for the searchcriteria/merge lambda**


import {Abi, Bytes, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
    "source": {
        "hash": "0x4beac590e0c2e670b87997c893281c9eac45c8515e51bd96d7e31a660bc75db2",
        "language": "ink! 4.3.0",
        "compiler": "rustc 1.76.0",
        "build_info": {
            "build_mode": "Release",
            "cargo_contract_version": "4.0.2",
            "rust_toolchain": "stable-aarch64-apple-darwin",
            "wasm_opt_settings": {
                "keep_debug_symbols": false,
                "optimization_passes": "Z"
            }
        }
    },
    "contract": {
        "name": "cross_chain_transfer",
        "version": "0.1.0",
        "authors": [
            "D9 team tech@d9network.com"
        ]
    },
    "image": null,
    "spec": {
        "constructors": [
            {
                "args": [
                    {
                        "label": "usdt_contract",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [
                    "Constructor that initializes the `bool` value to the given `init_value`."
                ],
                "label": "new",
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink_primitives",
                        "ConstructorResult"
                    ],
                    "type": 7
                },
                "selector": "0x9bae9d5e"
            }
        ],
        "docs": [],
        "environment": {
            "accountId": {
                "displayName": [
                    "AccountId"
                ],
                "type": 1
            },
            "balance": {
                "displayName": [
                    "Balance"
                ],
                "type": 5
            },
            "blockNumber": {
                "displayName": [
                    "BlockNumber"
                ],
                "type": 28
            },
            "chainExtension": {
                "displayName": [
                    "ChainExtension"
                ],
                "type": 29
            },
            "hash": {
                "displayName": [
                    "Hash"
                ],
                "type": 27
            },
            "maxEventTopics": 4,
            "timestamp": {
                "displayName": [
                    "Timestamp"
                ],
                "type": 0
            }
        },
        "events": [
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "transaction_id",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "from_address",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "amount",
                        "type": {
                            "displayName": [
                                "u128"
                            ],
                            "type": 5
                        }
                    }
                ],
                "docs": [],
                "label": "CommitCreated"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "tx_id",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "to_address",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "amount",
                        "type": {
                            "displayName": [
                                "u128"
                            ],
                            "type": 5
                        }
                    }
                ],
                "docs": [],
                "label": "DispatchCompleted"
            }
        ],
        "lang_error": {
            "displayName": [
                "ink",
                "LangError"
            ],
            "type": 9
        },
        "messages": [
            {
                "args": [
                    {
                        "label": "admin",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "add_transaction_admin",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 10
                },
                "selector": "0xec409e8a"
            },
            {
                "args": [
                    {
                        "label": "admin",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "remove_transaction_admin",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 10
                },
                "selector": "0xb3e15c07"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_transaction_admins",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0xa81d32bb"
            },
            {
                "args": [
                    {
                        "label": "admin",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "is_transaction_admin",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 15
                },
                "selector": "0x7a996b18"
            },
            {
                "args": [
                    {
                        "label": "user_id",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "record_cancelled_tron_transfer",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 10
                },
                "selector": "0x1617c8b4"
            },
            {
                "args": [
                    {
                        "label": "user_id",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "generate_tx_id",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 17
                },
                "selector": "0xfc9bd990"
            },
            {
                "args": [
                    {
                        "label": "user_id",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " get last transaction. function is called on both chains."
                ],
                "label": "get_last_transaction",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 18
                },
                "selector": "0x7081dd38"
            },
            {
                "args": [
                    {
                        "label": "user_id",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Helper function to get the current transaction nonce for a user"
                ],
                "label": "get_current_nonce",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 24
                },
                "selector": "0xe5219595"
            },
            {
                "args": [
                    {
                        "label": "tx_id",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_transaction",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 18
                },
                "selector": "0xfeeb858e"
            },
            {
                "args": [
                    {
                        "label": "code_hash",
                        "type": {
                            "displayName": [],
                            "type": 2
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Modifies the code which is used to execute calls to this contract address (`AccountId`).",
                    "",
                    " We use this to upgrade the contract logic. We don't do any authorization here, any caller",
                    " can execute this method. In a production contract you would do some authorization here."
                ],
                "label": "set_code",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 7
                },
                "selector": "0x694fb50f"
            },
            {
                "args": [
                    {
                        "label": "transaction_id",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "label": "from_address",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    },
                    {
                        "label": "to_address",
                        "type": {
                            "displayName": [],
                            "type": 23
                        }
                    },
                    {
                        "label": "amount",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 5
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "asset_commit",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 25
                },
                "selector": "0xc2ad66bb"
            },
            {
                "args": [
                    {
                        "label": "from_address",
                        "type": {
                            "displayName": [],
                            "type": 23
                        }
                    },
                    {
                        "label": "to_address",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    },
                    {
                        "label": "amount",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 5
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "asset_dispatch",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 25
                },
                "selector": "0x535b25a5"
            },
            {
                "args": [
                    {
                        "label": "new_controller",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "change_controller",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 7
                },
                "selector": "0xc92e346d"
            },
            {
                "args": [
                    {
                        "label": "new_admin",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "relinquish_admin",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 7
                },
                "selector": "0xda7dbaee"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "claim_admin",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 7
                },
                "selector": "0xa8656c6c"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "cancel_admin_transfer",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 7
                },
                "selector": "0xd45e3d78"
            }
        ]
    },
    "storage": {
        "root": {
            "layout": {
                "struct": {
                    "fields": [
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x8eb615e1",
                                            "ty": 0
                                        }
                                    },
                                    "root_key": "0x8eb615e1"
                                }
                            },
                            "name": "user_transaction_nonce"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 1
                                }
                            },
                            "name": "super_admin"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 1
                                }
                            },
                            "name": "new_admin"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 1
                                }
                            },
                            "name": "controller"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 1
                                }
                            },
                            "name": "usdt_contract"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "struct": {
                                            "fields": [
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x82645412",
                                                            "ty": 4
                                                        }
                                                    },
                                                    "name": "transaction_id"
                                                },
                                                {
                                                    "layout": {
                                                        "enum": {
                                                            "dispatchKey": "0x82645412",
                                                            "name": "TransactionType",
                                                            "variants": {
                                                                "0": {
                                                                    "fields": [],
                                                                    "name": "Commit"
                                                                },
                                                                "1": {
                                                                    "fields": [],
                                                                    "name": "Dispatch"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "name": "transaction_type"
                                                },
                                                {
                                                    "layout": {
                                                        "enum": {
                                                            "dispatchKey": "0x82645412",
                                                            "name": "Chain",
                                                            "variants": {
                                                                "0": {
                                                                    "fields": [],
                                                                    "name": "D9"
                                                                },
                                                                "1": {
                                                                    "fields": [],
                                                                    "name": "TRON"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "name": "from_chain"
                                                },
                                                {
                                                    "layout": {
                                                        "enum": {
                                                            "dispatchKey": "0x82645412",
                                                            "name": "AddressType",
                                                            "variants": {
                                                                "0": {
                                                                    "fields": [
                                                                        {
                                                                            "layout": {
                                                                                "array": {
                                                                                    "layout": {
                                                                                        "leaf": {
                                                                                            "key": "0x82645412",
                                                                                            "ty": 3
                                                                                        }
                                                                                    },
                                                                                    "len": 21,
                                                                                    "offset": "0x82645412"
                                                                                }
                                                                            },
                                                                            "name": "0"
                                                                        }
                                                                    ],
                                                                    "name": "Tron"
                                                                },
                                                                "1": {
                                                                    "fields": [
                                                                        {
                                                                            "layout": {
                                                                                "leaf": {
                                                                                    "key": "0x82645412",
                                                                                    "ty": 1
                                                                                }
                                                                            },
                                                                            "name": "0"
                                                                        }
                                                                    ],
                                                                    "name": "D9"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "name": "from_address"
                                                },
                                                {
                                                    "layout": {
                                                        "enum": {
                                                            "dispatchKey": "0x82645412",
                                                            "name": "AddressType",
                                                            "variants": {
                                                                "0": {
                                                                    "fields": [
                                                                        {
                                                                            "layout": {
                                                                                "array": {
                                                                                    "layout": {
                                                                                        "leaf": {
                                                                                            "key": "0x82645412",
                                                                                            "ty": 3
                                                                                        }
                                                                                    },
                                                                                    "len": 21,
                                                                                    "offset": "0x82645412"
                                                                                }
                                                                            },
                                                                            "name": "0"
                                                                        }
                                                                    ],
                                                                    "name": "Tron"
                                                                },
                                                                "1": {
                                                                    "fields": [
                                                                        {
                                                                            "layout": {
                                                                                "leaf": {
                                                                                    "key": "0x82645412",
                                                                                    "ty": 1
                                                                                }
                                                                            },
                                                                            "name": "0"
                                                                        }
                                                                    ],
                                                                    "name": "D9"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "name": "to_address"
                                                },
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x82645412",
                                                            "ty": 5
                                                        }
                                                    },
                                                    "name": "amount"
                                                },
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x82645412",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "name": "timestamp"
                                                }
                                            ],
                                            "name": "Transaction"
                                        }
                                    },
                                    "root_key": "0x82645412"
                                }
                            },
                            "name": "transactions"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 6
                                }
                            },
                            "name": "transaction_admins"
                        }
                    ],
                    "name": "CrossChainTransfer"
                }
            },
            "root_key": "0x00000000"
        }
    },
    "types": [
        {
            "id": 0,
            "type": {
                "def": {
                    "primitive": "u64"
                }
            }
        },
        {
            "id": 1,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "type": 2,
                                "typeName": "[u8; 32]"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "types",
                    "AccountId"
                ]
            }
        },
        {
            "id": 2,
            "type": {
                "def": {
                    "array": {
                        "len": 32,
                        "type": 3
                    }
                }
            }
        },
        {
            "id": 3,
            "type": {
                "def": {
                    "primitive": "u8"
                }
            }
        },
        {
            "id": 4,
            "type": {
                "def": {
                    "primitive": "str"
                }
            }
        },
        {
            "id": 5,
            "type": {
                "def": {
                    "primitive": "u128"
                }
            }
        },
        {
            "id": 6,
            "type": {
                "def": {
                    "sequence": {
                        "type": 1
                    }
                }
            }
        },
        {
            "id": 7,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 8
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 9
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 8
                    },
                    {
                        "name": "E",
                        "type": 9
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 8,
            "type": {
                "def": {
                    "tuple": []
                }
            }
        },
        {
            "id": 9,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 1,
                                "name": "CouldNotReadInput"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "LangError"
                ]
            }
        },
        {
            "id": 10,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 11
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 9
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 11
                    },
                    {
                        "name": "E",
                        "type": 9
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 11,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 8
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 8
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 12,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 1,
                                        "typeName": "AccountId"
                                    }
                                ],
                                "index": 0,
                                "name": "Restrictedto"
                            },
                            {
                                "index": 1,
                                "name": "AmountMustBeGreaterThanZero"
                            },
                            {
                                "index": 2,
                                "name": "TransactionAlreadyExists"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 13,
                                        "typeName": "Chain"
                                    }
                                ],
                                "index": 3,
                                "name": "InvalidAddressLength"
                            },
                            {
                                "index": 4,
                                "name": "InvalidHexString"
                            },
                            {
                                "index": 5,
                                "name": "DecodedHexLengthInvalid"
                            },
                            {
                                "index": 6,
                                "name": "TronAddressInvalidByteLength"
                            },
                            {
                                "index": 7,
                                "name": "InvalidTronAddress"
                            },
                            {
                                "index": 8,
                                "name": "TronDecodeError"
                            },
                            {
                                "index": 9,
                                "name": "UnableToSendUSDT"
                            },
                            {
                                "index": 10,
                                "name": "InsufficientAllowance"
                            },
                            {
                                "index": 11,
                                "name": "UserUSDTBalanceInsufficient"
                            },
                            {
                                "index": 12,
                                "name": "D9orUSDTProvidedLiquidityAtZero"
                            },
                            {
                                "index": 13,
                                "name": "AlreadyTransactionAdmin"
                            }
                        ]
                    }
                },
                "path": [
                    "cross_chain_transfer",
                    "cross_chain_transfer",
                    "Error"
                ]
            }
        },
        {
            "id": 13,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "D9"
                            },
                            {
                                "index": 1,
                                "name": "TRON"
                            }
                        ]
                    }
                },
                "path": [
                    "cross_chain_transfer",
                    "cross_chain_transfer",
                    "Chain"
                ]
            }
        },
        {
            "id": 14,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 6
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 9
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 6
                    },
                    {
                        "name": "E",
                        "type": 9
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 15,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 16
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 9
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 16
                    },
                    {
                        "name": "E",
                        "type": 9
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 16,
            "type": {
                "def": {
                    "primitive": "bool"
                }
            }
        },
        {
            "id": 17,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 4
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 9
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 4
                    },
                    {
                        "name": "E",
                        "type": 9
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 18,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 19
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 9
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 19
                    },
                    {
                        "name": "E",
                        "type": 9
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 19,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 20
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 20
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 20,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "transaction_id",
                                "type": 4,
                                "typeName": "String"
                            },
                            {
                                "name": "transaction_type",
                                "type": 21,
                                "typeName": "TransactionType"
                            },
                            {
                                "name": "from_chain",
                                "type": 13,
                                "typeName": "Chain"
                            },
                            {
                                "name": "from_address",
                                "type": 22,
                                "typeName": "AddressType"
                            },
                            {
                                "name": "to_address",
                                "type": 22,
                                "typeName": "AddressType"
                            },
                            {
                                "name": "amount",
                                "type": 5,
                                "typeName": "u128"
                            },
                            {
                                "name": "timestamp",
                                "type": 0,
                                "typeName": "Timestamp"
                            }
                        ]
                    }
                },
                "path": [
                    "cross_chain_transfer",
                    "cross_chain_transfer",
                    "Transaction"
                ]
            }
        },
        {
            "id": 21,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "Commit"
                            },
                            {
                                "index": 1,
                                "name": "Dispatch"
                            }
                        ]
                    }
                },
                "path": [
                    "cross_chain_transfer",
                    "cross_chain_transfer",
                    "TransactionType"
                ]
            }
        },
        {
            "id": 22,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 23,
                                        "typeName": "[u8; 21]"
                                    }
                                ],
                                "index": 0,
                                "name": "Tron"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 1,
                                        "typeName": "AccountId"
                                    }
                                ],
                                "index": 1,
                                "name": "D9"
                            }
                        ]
                    }
                },
                "path": [
                    "cross_chain_transfer",
                    "cross_chain_transfer",
                    "AddressType"
                ]
            }
        },
        {
            "id": 23,
            "type": {
                "def": {
                    "array": {
                        "len": 21,
                        "type": 3
                    }
                }
            }
        },
        {
            "id": 24,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 0
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 9
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 0
                    },
                    {
                        "name": "E",
                        "type": 9
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 25,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 26
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 9
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 26
                    },
                    {
                        "name": "E",
                        "type": 9
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 26,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 4
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 4
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 27,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "type": 2,
                                "typeName": "[u8; 32]"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "types",
                    "Hash"
                ]
            }
        },
        {
            "id": 28,
            "type": {
                "def": {
                    "primitive": "u32"
                }
            }
        },
        {
            "id": 29,
            "type": {
                "def": {
                    "variant": {}
                },
                "path": [
                    "d9_chain_extension",
                    "D9ChainExtension"
                ]
            }
        }
    ],
    "version": "4"
}

const _abi = new Abi(metadata)

export function decodeEvent(bytes: Bytes): Event {
    return _abi.decodeEvent(bytes)
}

export function decodeMessage(bytes: Bytes): Message {
    return _abi.decodeMessage(bytes)
}

export function decodeConstructor(bytes: Bytes): Constructor {
    return _abi.decodeConstructor(bytes)
}

export interface RpcChain {
    rpc: {
        call<T=any>(method: string, params?: unknown[]): Promise<T>
    }
}

export interface ChainContext {
    _chain: RpcChain
}

export class Contract {
    constructor(private ctx: ChainContext, private address: Bytes, private blockHash?: Bytes) { }

    get_transaction_admins(): Promise<Result<AccountId[], LangError>> {
        return this.stateCall('0xa81d32bb', [])
    }

    is_transaction_admin(admin: AccountId): Promise<Result<boolean, LangError>> {
        return this.stateCall('0x7a996b18', [admin])
    }

    generate_tx_id(user_id: AccountId): Promise<Result<String, LangError>> {
        return this.stateCall('0xfc9bd990', [user_id])
    }

    get_last_transaction(user_id: AccountId): Promise<Result<(Transaction | undefined), LangError>> {
        return this.stateCall('0x7081dd38', [user_id])
    }

    get_current_nonce(user_id: AccountId): Promise<Result<bigint, LangError>> {
        return this.stateCall('0xe5219595', [user_id])
    }

    get_transaction(tx_id: String): Promise<Result<(Transaction | undefined), LangError>> {
        return this.stateCall('0xfeeb858e', [tx_id])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.rpc.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export interface Transaction {
    transactionId: String
    transactionType: TransactionType
    fromChain: Chain
    fromAddress: AddressType
    toAddress: AddressType
    amount: bigint
    timestamp: bigint
}

export type AddressType = AddressType_D9 | AddressType_Tron

export interface AddressType_D9 {
    __kind: 'D9'
    value: AccountId
}

export interface AddressType_Tron {
    __kind: 'Tron'
    value: Bytes
}

export type Chain = Chain_D9 | Chain_TRON

export interface Chain_D9 {
    __kind: 'D9'
}

export interface Chain_TRON {
    __kind: 'TRON'
}

export type TransactionType = TransactionType_Commit | TransactionType_Dispatch

export interface TransactionType_Commit {
    __kind: 'Commit'
}

export interface TransactionType_Dispatch {
    __kind: 'Dispatch'
}

export type String = string

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type AccountId = Bytes

export type Constructor = Constructor_new

/**
 * Constructor that initializes the `bool` value to the given `init_value`.
 */
export interface Constructor_new {
    __kind: 'new'
    usdtContract: AccountId
}

export type Message = Message_add_transaction_admin | Message_asset_commit | Message_asset_dispatch | Message_cancel_admin_transfer | Message_change_controller | Message_claim_admin | Message_generate_tx_id | Message_get_current_nonce | Message_get_last_transaction | Message_get_transaction | Message_get_transaction_admins | Message_is_transaction_admin | Message_record_cancelled_tron_transfer | Message_relinquish_admin | Message_remove_transaction_admin | Message_set_code

export interface Message_add_transaction_admin {
    __kind: 'add_transaction_admin'
    admin: AccountId
}

export interface Message_asset_commit {
    __kind: 'asset_commit'
    transactionId: String
    fromAddress: AccountId
    toAddress: Bytes
    amount: bigint
}

export interface Message_asset_dispatch {
    __kind: 'asset_dispatch'
    fromAddress: Bytes
    toAddress: AccountId
    amount: bigint
}

export interface Message_cancel_admin_transfer {
    __kind: 'cancel_admin_transfer'
}

export interface Message_change_controller {
    __kind: 'change_controller'
    newController: AccountId
}

export interface Message_claim_admin {
    __kind: 'claim_admin'
}

export interface Message_generate_tx_id {
    __kind: 'generate_tx_id'
    userId: AccountId
}

/**
 *  Helper function to get the current transaction nonce for a user
 */
export interface Message_get_current_nonce {
    __kind: 'get_current_nonce'
    userId: AccountId
}

/**
 *  get last transaction. function is called on both chains.
 */
export interface Message_get_last_transaction {
    __kind: 'get_last_transaction'
    userId: AccountId
}

export interface Message_get_transaction {
    __kind: 'get_transaction'
    txId: String
}

export interface Message_get_transaction_admins {
    __kind: 'get_transaction_admins'
}

export interface Message_is_transaction_admin {
    __kind: 'is_transaction_admin'
    admin: AccountId
}

export interface Message_record_cancelled_tron_transfer {
    __kind: 'record_cancelled_tron_transfer'
    userId: AccountId
}

export interface Message_relinquish_admin {
    __kind: 'relinquish_admin'
    newAdmin: AccountId
}

export interface Message_remove_transaction_admin {
    __kind: 'remove_transaction_admin'
    admin: AccountId
}

/**
 *  Modifies the code which is used to execute calls to this contract address (`AccountId`).
 * 
 *  We use this to upgrade the contract logic. We don't do any authorization here, any caller
 *  can execute this method. In a production contract you would do some authorization here.
 */
export interface Message_set_code {
    __kind: 'set_code'
    codeHash: Bytes
}

export type Event = Event_CommitCreated | Event_DispatchCompleted

export interface Event_CommitCreated {
    __kind: 'CommitCreated'
    transactionId: String
    fromAddress: AccountId
    amount: bigint
}

export interface Event_DispatchCompleted {
    __kind: 'DispatchCompleted'
    txId: String
    toAddress: AccountId
    amount: bigint
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}

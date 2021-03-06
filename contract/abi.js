var abi =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "banquanID",
				"type": "uint256"
			}
		],
		"name": "getBanquan",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "numbanquans",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "banquans",
		"outputs": [
			{
				"name": "useraddress",
				"type": "address"
			},
			{
				"name": "user",
				"type": "string"
			},
			{
				"name": "docname",
				"type": "string"
			},
			{
				"name": "time",
				"type": "string"
			},
			{
				"name": "info",
				"type": "string"
			},
			{
				"name": "dochash",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "useraddress",
				"type": "address"
			},
			{
				"name": "user",
				"type": "string"
			},
			{
				"name": "docname",
				"type": "string"
			},
			{
				"name": "time",
				"type": "string"
			},
			{
				"name": "info",
				"type": "string"
			},
			{
				"name": "dochash",
				"type": "string"
			}
		],
		"name": "newBanquan",
		"outputs": [
			{
				"name": "banquanID",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]
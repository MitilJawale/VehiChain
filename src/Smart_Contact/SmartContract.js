import web3 from '../web3';

const address = '0x8194778348cf371189dfa77cba7b1c80b610765b';

const abi = 
[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_AadharNo",
				"type": "string"
			},
			{
				"name": "_OwnerName",
				"type": "string"
			},
			{
				"name": "_VehicleModel",
				"type": "string"
			},
			{
				"name": "_ChassisNo",
				"type": "string"
			},
			{
				"name": "_FuelType",
				"type": "string"
			},
			{
				"name": "_VehicleColor",
				"type": "string"
			},
			{
				"name": "_MfgDate",
				"type": "string"
			}
		],
		"name": "AutomobileCompany",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_AadharNo",
				"type": "string"
			},
			{
				"name": "_DateOfClaim",
				"type": "string"
			},
			{
				"name": "_DamageDescription",
				"type": "string"
			}
		],
		"name": "InsuranceClaim",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_AadharNo",
				"type": "string"
			},
			{
				"name": "_LicenseNo",
				"type": "string"
			},
			{
				"name": "_InsuranceCompanyName",
				"type": "string"
			},
			{
				"name": "_Address",
				"type": "string"
			}
		],
		"name": "OwnerSide",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_AadharNo",
				"type": "string"
			},
			{
				"name": "_LicensePlateNumber",
				"type": "string"
			},
			{
				"name": "_AssignedUser",
				"type": "string"
			},
			{
				"name": "_RCBook",
				"type": "string"
			}
		],
		"name": "RTO",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "x",
				"type": "string"
			},
			{
				"name": "_AadharNo",
				"type": "string"
			}
		],
		"name": "sendHash",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_AadharNo",
				"type": "string"
			},
			{
				"name": "_DateOfIssue",
				"type": "string"
			}
		],
		"name": "UploadInsuranceDetails",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "AadharNo",
				"type": "string"
			}
		],
		"name": "showClaim",
		"outputs": [
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
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "AadharNo",
				"type": "string"
			}
		],
		"name": "showIssue",
		"outputs": [
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
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "AadharNo",
				"type": "string"
			}
		],
		"name": "showOwner",
		"outputs": [
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
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "AadharNo",
				"type": "string"
			}
		],
		"name": "showRTO",
		"outputs": [
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
		"stateMutability": "view",
		"type": "function"
	}
]


export default new web3.eth.Contract(abi,address);
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  CannonRegistry,
  CannonRegistryInterface,
} from "../../contracts/CannonRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
    ],
    name: "InvalidName",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "url",
        type: "string",
      },
    ],
    name: "InvalidUrl",
    type: "error",
  },
  {
    inputs: [],
    name: "NoChange",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "NotNominated",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerNominated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "version",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32[]",
        name: "tags",
        type: "bytes32[]",
      },
      {
        indexed: false,
        internalType: "string",
        name: "url",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ProtocolPublish",
    type: "event",
  },
  {
    inputs: [],
    name: "MIN_PACKAGE_NAME_LENGTH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_name",
        type: "bytes32",
      },
    ],
    name: "acceptProtocolOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_protocolName",
        type: "bytes32",
      },
    ],
    name: "getProtocolNominatedOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_protocolName",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_protocolVersion",
        type: "bytes32",
      },
    ],
    name: "getProtocolUrl",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_protocolName",
        type: "bytes32",
      },
    ],
    name: "getProtocolVersions",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProtocols",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newNominatedOwner",
        type: "address",
      },
    ],
    name: "nominateNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_name",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "nominateProtocolOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nominatedOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_name",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_version",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "_tags",
        type: "bytes32[]",
      },
      {
        internalType: "string",
        name: "_url",
        type: "string",
      },
    ],
    name: "publish",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceNomination",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
    ],
    name: "validateProtocolName",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611d3e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806379ba50971161008c57806399585fea1161006657806399585fea14610225578063a2afe1dc14610255578063b723522a14610271578063f434bb681461028d576100ea565b806379ba5097146101cd578063873648a9146101d75780638da5cb5b14610207576100ea565b80632e9e8ea1116100c85780632e9e8ea11461015757806340142a631461018757806353a47bb7146101a5578063718fe928146101c3576100ea565b80631627540c146100ef578063168d205f1461010b5780632374f3de14610127575b600080fd5b610109600480360381019061010491906114c7565b6102ab565b005b6101256004803603810190610120919061152a565b610470565b005b610141600480360381019061013c919061156a565b61056f565b60405161014e91906115a6565b60405180910390f35b610171600480360381019061016c91906115c1565b6105b5565b60405161017e919061169a565b60405180910390f35b61018f610675565b60405161019c91906116d5565b60405180910390f35b6101ad61067a565b6040516101ba91906115a6565b60405180910390f35b6101cb6106ad565b005b6101d5610794565b005b6101f160048036038101906101ec919061156a565b610921565b6040516101fe919061170b565b60405180910390f35b61020f610c44565b60405161021c91906115a6565b60405180910390f35b61023f600480360381019061023a919061156a565b610c77565b60405161024c91906117e4565b60405180910390f35b61026f600480360381019061026a919061156a565b610ceb565b005b61028b60048036038101906102869190611a03565b610e44565b005b610295611255565b6040516102a291906117e4565b60405180910390f35b60006102b56112b6565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146102f4576102f36112e9565b5b60006102fe611362565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610367576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156103f1576040517fa88ee57700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b828160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce228360405161046391906115a6565b60405180910390a1505050565b600061047a61138a565b90503373ffffffffffffffffffffffffffffffffffffffff1681600201600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610516576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8181600401600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b600061057961138a565b600401600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60606105bf61138a565b6001016000848152602001908152602001600020600083815260200190815260200160002080546105ef90611ad1565b80601f016020809104026020016040519081016040528092919081815260200182805461061b90611ad1565b80156106685780601f1061063d57610100808354040283529160200191610668565b820191906000526020600020905b81548152906001019060200180831161064b57829003601f168201915b5050505050905092915050565b600381565b6000610684611362565b60010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006106b7611362565b90503373ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461074d57336040517fa0e5a0d700000000000000000000000000000000000000000000000000000000815260040161074491906115a6565b60405180910390fd5b60008160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600061079e611362565b905060008160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461083957336040517fa0e5a0d700000000000000000000000000000000000000000000000000000000815260040161083091906115a6565b60405180910390fd5b7fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c8260000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff168260405161088e929190611b03565b60405180910390a1808260000160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008260010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600080600090505b6020811015610c3957600060f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191683826020811061096c5761096b611b2c565b5b1a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610a265760038110156109ab576000915050610c3f565b7f2d00000000000000000000000000000000000000000000000000000000000000836001836109da9190611b8a565b602081106109eb576109ea611b2c565b5b1a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610a21576000915050610c3f565b610c39565b7f3000000000000000000000000000000000000000000000000000000000000000838260208110610a5a57610a59611b2c565b5b1a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161080610ae357507f3900000000000000000000000000000000000000000000000000000000000000838260208110610abb57610aba611b2c565b5b1a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916115b8015610ba857507f6100000000000000000000000000000000000000000000000000000000000000838260208110610b1e57610b1d611b2c565b5b1a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161080610ba757507f7a00000000000000000000000000000000000000000000000000000000000000838260208110610b7f57610b7e611b2c565b5b1a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916115b5b8015610c1757506000811480610c1657507f2d00000000000000000000000000000000000000000000000000000000000000838260208110610bed57610bec611b2c565b5b1a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614155b5b15610c26576000915050610c3f565b8080610c3190611bbe565b915050610929565b50600190505b919050565b6000610c4e611362565b60000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060610c8161138a565b6003016000838152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610cdf57602002820191906000526020600020905b815481526020019060010190808311610ccb575b50505050509050919050565b6000610cf561138a565b9050600081600401600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d96576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8082600201600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600082600401600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000610e4e61138a565b9050600082511415610e9757816040517fb17265ae000000000000000000000000000000000000000000000000000000008152600401610e8e919061169a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1681600201600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614158015610f6a57503373ffffffffffffffffffffffffffffffffffffffff1681600201600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b15610fa1576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1681600201600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156110d55761101485610921565b61105557846040517f7de0e78800000000000000000000000000000000000000000000000000000000815260040161104c9190611c16565b60405180910390fd5b3381600201600087815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000018590806001815401808255809150506001900390600052602060002001600090919091909150555b60008160010160008781526020019081526020016000206000868152602001908152602001600020805461110890611ad1565b9050141561114d578060030160008681526020019081526020016000208490806001815401808255809150506001900390600052602060002001600090919091909150555b81816001016000878152602001908152602001600020600086815260200190815260200160002090805190602001906111879291906113b2565b5060005b83518110156111fc578282600101600088815260200190815260200160002060008684815181106111bf576111be611b2c565b5b6020026020010151815260200190815260200160002090805190602001906111e89291906113b2565b5080806111f490611bbe565b91505061118b565b508260405161120b9190611cc1565b604051809103902084867f0f6e7326ae728828fd7a3b981362c75dc97619ce5050be4ef1832789811c52348533604051611246929190611cd8565b60405180910390a45050505050565b606061125f61138a565b6000018054806020026020016040519081016040528092919081815260200182805480156112ac57602002820191906000526020600020905b815481526020019060010190808311611298575b5050505050905090565b60006112c0611362565b60000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6112f16112b6565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461136057336040517f8e4a23d600000000000000000000000000000000000000000000000000000000815260040161135791906115a6565b60405180910390fd5b565b60007f66d20a9eef910d2df763b9de0d390f3cc67f7d52c6475118cd57fa98be8cf6cb905090565b60007fd386b53009e5ad6d6853d9184c05c992a989289c1761a6d9dd1cdfd204098522905090565b8280546113be90611ad1565b90600052602060002090601f0160209004810192826113e05760008555611427565b82601f106113f957805160ff1916838001178555611427565b82800160010185558215611427579182015b8281111561142657825182559160200191906001019061140b565b5b5090506114349190611438565b5090565b5b80821115611451576000816000905550600101611439565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061149482611469565b9050919050565b6114a481611489565b81146114af57600080fd5b50565b6000813590506114c18161149b565b92915050565b6000602082840312156114dd576114dc61145f565b5b60006114eb848285016114b2565b91505092915050565b6000819050919050565b611507816114f4565b811461151257600080fd5b50565b600081359050611524816114fe565b92915050565b600080604083850312156115415761154061145f565b5b600061154f85828601611515565b9250506020611560858286016114b2565b9150509250929050565b6000602082840312156115805761157f61145f565b5b600061158e84828501611515565b91505092915050565b6115a081611489565b82525050565b60006020820190506115bb6000830184611597565b92915050565b600080604083850312156115d8576115d761145f565b5b60006115e685828601611515565b92505060206115f785828601611515565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561163b578082015181840152602081019050611620565b8381111561164a576000848401525b50505050565b6000601f19601f8301169050919050565b600061166c82611601565b611676818561160c565b935061168681856020860161161d565b61168f81611650565b840191505092915050565b600060208201905081810360008301526116b48184611661565b905092915050565b6000819050919050565b6116cf816116bc565b82525050565b60006020820190506116ea60008301846116c6565b92915050565b60008115159050919050565b611705816116f0565b82525050565b600060208201905061172060008301846116fc565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61175b816114f4565b82525050565b600061176d8383611752565b60208301905092915050565b6000602082019050919050565b600061179182611726565b61179b8185611731565b93506117a683611742565b8060005b838110156117d75781516117be8882611761565b97506117c983611779565b9250506001810190506117aa565b5085935050505092915050565b600060208201905081810360008301526117fe8184611786565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61184382611650565b810181811067ffffffffffffffff821117156118625761186161180b565b5b80604052505050565b6000611875611455565b9050611881828261183a565b919050565b600067ffffffffffffffff8211156118a1576118a061180b565b5b602082029050602081019050919050565b600080fd5b60006118ca6118c584611886565b61186b565b905080838252602082019050602084028301858111156118ed576118ec6118b2565b5b835b8181101561191657806119028882611515565b8452602084019350506020810190506118ef565b5050509392505050565b600082601f83011261193557611934611806565b5b81356119458482602086016118b7565b91505092915050565b600080fd5b600067ffffffffffffffff82111561196e5761196d61180b565b5b61197782611650565b9050602081019050919050565b82818337600083830152505050565b60006119a66119a184611953565b61186b565b9050828152602081018484840111156119c2576119c161194e565b5b6119cd848285611984565b509392505050565b600082601f8301126119ea576119e9611806565b5b81356119fa848260208601611993565b91505092915050565b60008060008060808587031215611a1d57611a1c61145f565b5b6000611a2b87828801611515565b9450506020611a3c87828801611515565b935050604085013567ffffffffffffffff811115611a5d57611a5c611464565b5b611a6987828801611920565b925050606085013567ffffffffffffffff811115611a8a57611a89611464565b5b611a96878288016119d5565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611ae957607f821691505b60208210811415611afd57611afc611aa2565b5b50919050565b6000604082019050611b186000830185611597565b611b256020830184611597565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611b95826116bc565b9150611ba0836116bc565b925082821015611bb357611bb2611b5b565b5b828203905092915050565b6000611bc9826116bc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611bfc57611bfb611b5b565b5b600182019050919050565b611c10816114f4565b82525050565b6000602082019050611c2b6000830184611c07565b92915050565b600081905092915050565b611c45816114f4565b82525050565b6000611c578383611c3c565b60208301905092915050565b6000611c6e82611726565b611c788185611c31565b9350611c8383611742565b8060005b83811015611cb4578151611c9b8882611c4b565b9750611ca683611779565b925050600181019050611c87565b5085935050505092915050565b6000611ccd8284611c63565b915081905092915050565b60006040820190508181036000830152611cf28185611661565b9050611d016020830184611597565b939250505056fea2646970667358221220636cb9f9384e8097ad2d670434b9f2d19e5414061810d36e885b8ba808aad1d664736f6c634300080b0033";

type CannonRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CannonRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CannonRegistry__factory extends ContractFactory {
  constructor(...args: CannonRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CannonRegistry> {
    return super.deploy(overrides || {}) as Promise<CannonRegistry>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CannonRegistry {
    return super.attach(address) as CannonRegistry;
  }
  override connect(signer: Signer): CannonRegistry__factory {
    return super.connect(signer) as CannonRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CannonRegistryInterface {
    return new utils.Interface(_abi) as CannonRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CannonRegistry {
    return new Contract(address, _abi, signerOrProvider) as CannonRegistry;
  }
}

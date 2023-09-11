/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  OwnableInterface,
  OwnableInterfaceInterface,
} from "../../../contracts/interfaces/OwnableInterface";

const _abi = [
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
] as const;

export class OwnableInterface__factory {
  static readonly abi = _abi;
  static createInterface(): OwnableInterfaceInterface {
    return new Interface(_abi) as OwnableInterfaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): OwnableInterface {
    return new Contract(address, _abi, runner) as unknown as OwnableInterface;
  }
}

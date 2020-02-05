/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface PinningManagerInterface extends Interface {
  functions: {
    offerRegistry: TypedFunctionDescription<{ encode([]: [string]): string }>;

    setStorageOffer: TypedFunctionDescription<{
      encode([capacity, maximumDuration, periods, pricesForPeriods]: [
        BigNumberish,
        BigNumberish,
        BigNumberish[],
        BigNumberish[]
      ]): string;
    }>;

    increaseStorageCapacity: TypedFunctionDescription<{
      encode([increase]: [BigNumberish]): string;
    }>;

    decreaseStorageCapacity: TypedFunctionDescription<{
      encode([decrease]: [BigNumberish]): string;
    }>;

    stopStorage: TypedFunctionDescription<{ encode([]: []): string }>;

    setStoragePrice: TypedFunctionDescription<{
      encode([periods, pricesForPeriods]: [
        BigNumberish[],
        BigNumberish[]
      ]): string;
    }>;

    setMaximumDuration: TypedFunctionDescription<{
      encode([maximumDuration]: [BigNumberish]): string;
    }>;

    newRequest: TypedFunctionDescription<{
      encode([fileReference, provider, size, period, contentManager]: [
        Arrayish[],
        string,
        BigNumberish,
        BigNumberish,
        string
      ]): string;
    }>;

    stopRequestBefore: TypedFunctionDescription<{
      encode([fileReference, provider, fromContentManager]: [
        Arrayish[],
        string,
        boolean
      ]): string;
    }>;

    acceptRequest: TypedFunctionDescription<{
      encode([requestReference]: [Arrayish]): string;
    }>;

    topUpRequest: TypedFunctionDescription<{
      encode([fileReference, provider, fromContentManager]: [
        Arrayish[],
        string,
        boolean
      ]): string;
    }>;

    stopRequestDuring: TypedFunctionDescription<{
      encode([fileReference, provider, fromContentManager]: [
        Arrayish[],
        string,
        boolean
      ]): string;
    }>;

    withdrawEarnings: TypedFunctionDescription<{
      encode([requestReferences]: [Arrayish[]]): string;
    }>;

    getRequestReference: TypedFunctionDescription<{
      encode([bidder, fileReference, fromContentManager]: [
        string,
        Arrayish[],
        boolean
      ]): string;
    }>;
  };

  events: {
    CapacitySet: TypedEventDescription<{
      encodeTopics([storer, capacity]: [string | null, null]): string[];
    }>;

    EarningsWithdrawn: TypedEventDescription<{
      encodeTopics([requestReference]: [Arrayish | null]): string[];
    }>;

    MaximumDurationSet: TypedEventDescription<{
      encodeTopics([storer, maximumDuration]: [string | null, null]): string[];
    }>;

    PriceSet: TypedEventDescription<{
      encodeTopics([storer, period, price]: [
        string | null,
        null,
        null
      ]): string[];
    }>;

    RequestAccepted: TypedEventDescription<{
      encodeTopics([requestReference]: [Arrayish | null]): string[];
    }>;

    RequestMade: TypedEventDescription<{
      encodeTopics([
        fileReference,
        requester,
        provider,
        size,
        period,
        usesContentManager,
        deposited
      ]: [
        Arrayish[] | null,
        string | null,
        string | null,
        null,
        null,
        null,
        null
      ]): string[];
    }>;

    RequestStopped: TypedEventDescription<{
      encodeTopics([requestReference]: [Arrayish | null]): string[];
    }>;

    RequestTopUp: TypedEventDescription<{
      encodeTopics([requestReference, deposited]: [
        Arrayish | null,
        null
      ]): string[];
    }>;
  };
}

export class PinningManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): PinningManager;
  attach(addressOrName: string): PinningManager;
  deployed(): Promise<PinningManager>;

  on(event: EventFilter | string, listener: Listener): PinningManager;
  once(event: EventFilter | string, listener: Listener): PinningManager;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): PinningManager;
  removeAllListeners(eventName: EventFilter | string): PinningManager;
  removeListener(eventName: any, listener: Listener): PinningManager;

  interface: PinningManagerInterface;

  functions: {
    offerRegistry(
      arg0: string
    ): Promise<{
      capacity: BigNumber;
      maximumDuration: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    setStorageOffer(
      capacity: BigNumberish,
      maximumDuration: BigNumberish,
      periods: BigNumberish[],
      pricesForPeriods: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    increaseStorageCapacity(
      increase: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    decreaseStorageCapacity(
      decrease: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    stopStorage(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    setStoragePrice(
      periods: BigNumberish[],
      pricesForPeriods: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setMaximumDuration(
      maximumDuration: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    newRequest(
      fileReference: Arrayish[],
      provider: string,
      size: BigNumberish,
      period: BigNumberish,
      contentManager: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    stopRequestBefore(
      fileReference: Arrayish[],
      provider: string,
      fromContentManager: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    acceptRequest(
      requestReference: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    topUpRequest(
      fileReference: Arrayish[],
      provider: string,
      fromContentManager: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    stopRequestDuring(
      fileReference: Arrayish[],
      provider: string,
      fromContentManager: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    withdrawEarnings(
      requestReferences: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getRequestReference(
      bidder: string,
      fileReference: Arrayish[],
      fromContentManager: boolean
    ): Promise<string>;
  };

  offerRegistry(
    arg0: string
  ): Promise<{
    capacity: BigNumber;
    maximumDuration: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  setStorageOffer(
    capacity: BigNumberish,
    maximumDuration: BigNumberish,
    periods: BigNumberish[],
    pricesForPeriods: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  increaseStorageCapacity(
    increase: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  decreaseStorageCapacity(
    decrease: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  stopStorage(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  setStoragePrice(
    periods: BigNumberish[],
    pricesForPeriods: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setMaximumDuration(
    maximumDuration: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  newRequest(
    fileReference: Arrayish[],
    provider: string,
    size: BigNumberish,
    period: BigNumberish,
    contentManager: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  stopRequestBefore(
    fileReference: Arrayish[],
    provider: string,
    fromContentManager: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  acceptRequest(
    requestReference: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  topUpRequest(
    fileReference: Arrayish[],
    provider: string,
    fromContentManager: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  stopRequestDuring(
    fileReference: Arrayish[],
    provider: string,
    fromContentManager: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  withdrawEarnings(
    requestReferences: Arrayish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getRequestReference(
    bidder: string,
    fileReference: Arrayish[],
    fromContentManager: boolean
  ): Promise<string>;

  filters: {
    CapacitySet(storer: string | null, capacity: null): EventFilter;

    EarningsWithdrawn(requestReference: Arrayish | null): EventFilter;

    MaximumDurationSet(
      storer: string | null,
      maximumDuration: null
    ): EventFilter;

    PriceSet(storer: string | null, period: null, price: null): EventFilter;

    RequestAccepted(requestReference: Arrayish | null): EventFilter;

    RequestMade(
      fileReference: Arrayish[] | null,
      requester: string | null,
      provider: string | null,
      size: null,
      period: null,
      usesContentManager: null,
      deposited: null
    ): EventFilter;

    RequestStopped(requestReference: Arrayish | null): EventFilter;

    RequestTopUp(
      requestReference: Arrayish | null,
      deposited: null
    ): EventFilter;
  };

  estimate: {
    offerRegistry(arg0: string): Promise<BigNumber>;

    setStorageOffer(
      capacity: BigNumberish,
      maximumDuration: BigNumberish,
      periods: BigNumberish[],
      pricesForPeriods: BigNumberish[]
    ): Promise<BigNumber>;

    increaseStorageCapacity(increase: BigNumberish): Promise<BigNumber>;

    decreaseStorageCapacity(decrease: BigNumberish): Promise<BigNumber>;

    stopStorage(): Promise<BigNumber>;

    setStoragePrice(
      periods: BigNumberish[],
      pricesForPeriods: BigNumberish[]
    ): Promise<BigNumber>;

    setMaximumDuration(maximumDuration: BigNumberish): Promise<BigNumber>;

    newRequest(
      fileReference: Arrayish[],
      provider: string,
      size: BigNumberish,
      period: BigNumberish,
      contentManager: string
    ): Promise<BigNumber>;

    stopRequestBefore(
      fileReference: Arrayish[],
      provider: string,
      fromContentManager: boolean
    ): Promise<BigNumber>;

    acceptRequest(requestReference: Arrayish): Promise<BigNumber>;

    topUpRequest(
      fileReference: Arrayish[],
      provider: string,
      fromContentManager: boolean
    ): Promise<BigNumber>;

    stopRequestDuring(
      fileReference: Arrayish[],
      provider: string,
      fromContentManager: boolean
    ): Promise<BigNumber>;

    withdrawEarnings(requestReferences: Arrayish[]): Promise<BigNumber>;

    getRequestReference(
      bidder: string,
      fileReference: Arrayish[],
      fromContentManager: boolean
    ): Promise<BigNumber>;
  };
}
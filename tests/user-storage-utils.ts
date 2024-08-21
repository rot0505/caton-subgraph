import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  RescueErc20,
  Subscribe,
  Withdraw
} from "../generated/UserStorage/UserStorage"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRescueErc20Event(
  token: Address,
  amount: BigInt
): RescueErc20 {
  let rescueErc20Event = changetype<RescueErc20>(newMockEvent())

  rescueErc20Event.parameters = new Array()

  rescueErc20Event.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  rescueErc20Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return rescueErc20Event
}

export function createSubscribeEvent(
  user: Address,
  expireTs: BigInt
): Subscribe {
  let subscribeEvent = changetype<Subscribe>(newMockEvent())

  subscribeEvent.parameters = new Array()

  subscribeEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  subscribeEvent.parameters.push(
    new ethereum.EventParam(
      "expireTs",
      ethereum.Value.fromUnsignedBigInt(expireTs)
    )
  )

  return subscribeEvent
}

export function createWithdrawEvent(user: Address, amount: BigInt): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}

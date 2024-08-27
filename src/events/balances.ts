import {ProcessorContext} from "../processor";
import {Store} from "@subsquid/typeorm-store";
import {SS58Encode} from "../utils/ss58";
import {events} from '../types'
import assert from 'assert'

interface BalancesTransfer {
    event_id: string
    block_number: number
    block_hash: string
    extrinsic_hash?: string
    timestamp: Date
    from_address: string
    to_address: string
    d9: bigint
    usdt: bigint
    fee?: bigint
    actions: string
}

export async function BalancesTransferEvent(ctx: ProcessorContext<Store>): Promise<BalancesTransfer[]>{
    let transfers: BalancesTransfer[] = []
    for (let block of ctx.blocks) {
        for (let event of block.events) {
            if (event.name == events.balances.transfer.name){
                let rec: {from: string; to: string; amount: bigint}
                if (events.balances.transfer.v1020.is(event)) {
                    let [from, to, amount] = events.balances.transfer.v1020.decode(event)
                    rec = {from, to, amount}
                }
                else if (events.balances.transfer.v1050.is(event)) {
                    let [from, to, amount] = events.balances.transfer.v1050.decode(event)
                    rec = {from, to, amount}
                }
                else if (events.balances.transfer.v9130.is(event)) {
                    rec = events.balances.transfer.v9130.decode(event)
                }
                else {
                    throw new Error('Unsupported spec')
                }

                assert(block.header.timestamp, `Got an undefined timestamp at block ${block.header.height}`)
                const commonData = {
                    event_id: event.id,
                    block_number: block.header.height,
                    block_hash: block.header.hash,
                    extrinsic_hash: event.extrinsic?.hash ?? "1",
                    fee: event.extrinsic?.fee ?? 0n,
                    timestamp: new Date(event.block.timestamp!),
                    from_address: SS58Encode(rec.from),
                    to_address: SS58Encode(rec.to),
                };

                let data: BalancesTransfer = {
                    ...commonData,
                    usdt: 0n,
                    d9: rec.amount,
                    actions: "D9Transfer"
                };

                transfers.push(data);
            }
        }
    }
    return transfers
}
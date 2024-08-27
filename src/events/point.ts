import {ProcessorContext} from "../processor";
import {Store} from "@subsquid/typeorm-store";
import {ContractAddress} from "../contract";
import * as merchant from '../abi/merchant_v2';
import {isContractsEvent} from "../utils/tools";
import {SS58Encode} from "../utils/ss58";

interface GreenPointsTransaction {
    event_id: string
    block_number: number
    block_hash: string
    extrinsic_hash?: string
    timestamp: Date
    from_address: string
    to_address: string
    merchant_points: bigint;
    consumer_points: bigint;
    fee?: bigint
    actions: string
}

export async function GreenPointsTransactionEvent(ctx: ProcessorContext<Store>): Promise<GreenPointsTransaction[]>{
    let transfers: GreenPointsTransaction[] = []
    for (let block of ctx.blocks) {
        for (let event of block.events) {
            if (!isContractsEvent(event, ContractAddress.MERCHANT)) {
                continue;
            }

            let decoded = merchant.decodeEvent(event.args.data)

            if (decoded.__kind === "GreenPointsTransaction") {
                const commonData = {
                    event_id: event.id,
                    block_number: block.header.height,
                    block_hash: block.header.hash,
                    extrinsic_hash: event.extrinsic?.hash ?? "1",
                    fee: event.extrinsic?.fee ?? 0n,
                    timestamp: new Date(event.block.timestamp!),
                    from_address: SS58Encode(
                        decoded.merchant.accountId === ContractAddress.MERCHANT
                            ? ContractAddress.MERCHANT
                            : decoded.merchant.accountId
                    ),
                    to_address: SS58Encode(
                        decoded.consumer.accountId === ContractAddress.MERCHANT
                            ? decoded.consumer.accountId
                            : ContractAddress.MERCHANT
                    )
                };

                let data: GreenPointsTransaction = {
                    ...commonData,
                    merchant_points: decoded.merchant.greenPoints,
                    consumer_points: decoded.consumer.greenPoints,
                    actions: decoded.__kind
                };

                transfers.push(data);
            }
        }
    }
    return transfers
}
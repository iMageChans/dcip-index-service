import {ProcessorContext} from "../processor";
import {Store} from "@subsquid/typeorm-store";
import {ContractAddress} from "../contract";
import * as merchant from '../abi/merchant_v2';
import {isContractsEvent} from "../utils/tools";
import {SS58Encode} from "../utils/ss58";

interface USDTMerchantPaymentSent {
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

export async function USDTMerchantPaymentSentEvent(ctx: ProcessorContext<Store>): Promise<USDTMerchantPaymentSent[]>{
    let transfers: USDTMerchantPaymentSent[] = []
    for (let block of ctx.blocks) {
        for (let event of block.events) {
            if (!isContractsEvent(event, ContractAddress.MERCHANT)) {
                continue;
            }

            let decoded = merchant.decodeEvent(event.args.data)

            if (decoded.__kind === "USDTMerchantPaymentSent") {
                const commonData = {
                    event_id: event.id,
                    block_number: block.header.height,
                    block_hash: block.header.hash,
                    extrinsic_hash: event.extrinsic?.hash ?? "1",
                    fee: event.extrinsic?.fee ?? 0n,
                    timestamp: new Date(event.block.timestamp!),
                    from_address: SS58Encode(decoded.consumer),
                    to_address: SS58Encode(decoded.merchant)
                };

                let data: USDTMerchantPaymentSent = {
                    ...commonData,
                    usdt: decoded.amount,
                    d9: 0n,
                    actions: decoded.__kind
                };

                transfers.push(data);
            }
        }
    }
    return transfers
}
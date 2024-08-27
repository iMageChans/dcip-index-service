import {ProcessorContext} from "../processor";
import {Store} from "@subsquid/typeorm-store";
import {ContractAddress} from "../contract";
import * as amm from '../abi/market_maker';
import {isContractsEvent} from "../utils/tools";
import {SS58Encode} from "../utils/ss58";

interface Liquidity {
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

export async function LiquidityEvent(ctx: ProcessorContext<Store>): Promise<Liquidity[]>{
    let transfers: Liquidity[] = []
    for (let block of ctx.blocks) {
        for (let event of block.events) {
            if (!isContractsEvent(event, ContractAddress.AMM)) {
                continue;
            }

            let decoded = amm.decodeEvent(event.args.data)

            if (decoded.__kind === "LiquidityAdded" || decoded.__kind === "LiquidityRemoved") {
                const commonData = {
                    event_id: event.id,
                    block_number: block.header.height,
                    block_hash: block.header.hash,
                    extrinsic_hash: event.extrinsic?.hash ?? "1",
                    fee: event.extrinsic?.fee ?? 0n,
                    timestamp: new Date(event.block.timestamp!),
                    from_address: SS58Encode(
                        decoded.accountId === ContractAddress.AMM
                            ? ContractAddress.AMM
                            : decoded.accountId
                    ),
                    to_address: SS58Encode(
                        decoded.accountId === ContractAddress.AMM
                            ? decoded.accountId
                            : ContractAddress.AMM
                    )
                };

                let data: Liquidity = {
                    ...commonData,
                    usdt: decoded.usdt,
                    d9: decoded.d9,
                    actions: decoded.__kind
                };

                transfers.push(data);
            }
        }
    }
    return transfers
}
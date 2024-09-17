import {ProcessorContext} from "../processor";
import {Store} from "@subsquid/typeorm-store";
import {ContractAddress} from "../contract";
import * as usdt from '../abi/d9_usdt';
import {isContractsCall} from "../utils/tools";
import {SS58Encode} from "../utils/ss58";

interface USDTTransfer {
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

export async function USDTTransferEvent(ctx: ProcessorContext<Store>): Promise<USDTTransfer[]>{
    let transfers: USDTTransfer[] = []
    for (let block of ctx.blocks) for (let call of block.calls) {
        if (!isContractsCall(call, ContractAddress.USDT)) {
            continue;
        }

        let decoded = usdt.decodeMessage(call.args.data)

        if (decoded.__kind === "PSP22_transfer") {
            const commonData = {
                event_id: call.id,
                block_number: block.header.height,
                block_hash: block.header.hash,
                extrinsic_hash: call.extrinsic?.hash ?? "1",
                fee: call.extrinsic?.fee ?? 0n,
                timestamp: new Date(call.block.timestamp!),
                from_address: SS58Encode(call.origin.value.value),
                to_address: SS58Encode(decoded.to)
            };

            let data: USDTTransfer = {
                ...commonData,
                usdt: decoded.value,
                d9: 0n,
                actions: decoded.__kind
            };

            transfers.push(data);
        }

    }
    return transfers
}


export async function USDTTransferFromEvent(ctx: ProcessorContext<Store>): Promise<USDTTransfer[]>{
    let transfers: USDTTransfer[] = []
    for (let block of ctx.blocks) for (let call of block.calls) {
        if (!isContractsCall(call, ContractAddress.USDT)) {
            continue;
        }

        let decoded = usdt.decodeMessage(call.args.data)

        if (decoded.__kind === "PSP22_transfer_from") {
            const commonData = {
                event_id: call.id,
                block_number: block.header.height,
                block_hash: block.header.hash,
                extrinsic_hash: call.extrinsic?.hash ?? "1",
                fee: call.extrinsic?.fee ?? 0n,
                timestamp: new Date(call.block.timestamp!),
                from_address: SS58Encode(decoded.from),
                to_address: SS58Encode(decoded.to)
            };

            let data: USDTTransfer = {
                ...commonData,
                usdt: decoded.value,
                d9: 0n,
                actions: decoded.__kind
            };

            transfers.push(data);
        }

    }
    return transfers
}
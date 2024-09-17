import {assertNotNull} from '@subsquid/util-internal'
import {
    BlockHeader,
    DataHandlerContext,
    SubstrateBatchProcessor,
    SubstrateBatchProcessorFields,
    Event as _Event,
    Call as _Call,
    Extrinsic as _Extrinsic
} from '@subsquid/substrate-processor'

import {events} from './types'
import {ContractAddress} from "./contract";

export const processor = new SubstrateBatchProcessor()
    .setRpcEndpoint({
        url: assertNotNull(process.env.RPC_ENDPOINT, 'No RPC endpoint supplied'),
        rateLimit: 0,
        capacity:50,
        maxBatchCallSize: 500
    })
    .addEvent({
        name: [events.balances.transfer.name],
        extrinsic: true
    })
    .addContractsContractEmitted({
        contractAddress: [
            ContractAddress.CROSS_CHAIN,
            ContractAddress.AMM,
            ContractAddress.NODE_REWARD,
            ContractAddress.USDT,
            ContractAddress.BURNING,
            ContractAddress.MERCHANT
        ],
        extrinsic: true,
        call: true,
        stack: true,
    })
    .setFields({
        event: {
            args: true
        },
        extrinsic: {
            hash: true,
            fee: true
        },
        block: {
            timestamp: true
        },
        call: {
            name: true,
            args: true,
            origin: true,
        },
    })
    .setBlockRange({
        from: 3000000,
        // to: 3041811
    })
// Uncomment to disable RPC ingestion and drastically reduce no of RPC calls
//.useArchiveOnly()

export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Call = _Call<Fields>
export type Extrinsic = _Extrinsic<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>

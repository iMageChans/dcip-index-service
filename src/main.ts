import {TypeormDatabase} from '@subsquid/typeorm-store'
import {processor} from './processor'
import {ConversionEvent} from "./events/conversion";
import {LiquidityEvent} from "./events/liquidity";
import {BalancesTransferEvent} from "./events/balances";
import {SubscriptionEvent} from "./events/subscription";
import {GreenPointsTransactionEvent} from "./events/point";
import {USDTMerchantPaymentSentEvent} from "./events/payment";
import {GivePointsUSDTEvent} from "./events/give-points";
import {USDTTransferEvent, USDTTransferFromEvent} from "./events/usdt";
import {GreenPointTransfers, SwapTransfers, TokenTransfers} from "./utils/requests";

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    let conversions = ConversionEvent(ctx)
    for (let conversion of await conversions) {
        await TokenTransfers(conversion)
        await SwapTransfers(conversion)
    }

    let liquidityList = LiquidityEvent(ctx)
    for (let liquidity of await liquidityList) {
        await TokenTransfers(liquidity)
    }

    let balancesTransferList = BalancesTransferEvent(ctx)
    for (let balancesTransfer of await balancesTransferList) {
        await TokenTransfers(balancesTransfer)
    }

    let subscriptionList = SubscriptionEvent(ctx)
    for (let subscription of await subscriptionList) {
        await TokenTransfers(subscription)
    }

    let greenPointsTransactionList = GreenPointsTransactionEvent(ctx)
    for (let greenPointsTransaction of await greenPointsTransactionList) {
        await GreenPointTransfers(greenPointsTransaction)
    }

    let USDTMerchantPaymentSentList = USDTMerchantPaymentSentEvent(ctx)
    for (let USDTMerchantPaymentSent of await USDTMerchantPaymentSentList) {
        await TokenTransfers(USDTMerchantPaymentSent)
    }

    let givePointsUSDTList = GivePointsUSDTEvent(ctx)
    for (let givePointsUSDT of await givePointsUSDTList) {
        await TokenTransfers(givePointsUSDT)
    }

    let USDTTransferList = USDTTransferEvent(ctx)
    for (let USDTTransfer of await USDTTransferList) {
        await TokenTransfers(USDTTransfer)
    }

    let USDTTransferFromList = USDTTransferFromEvent(ctx)
    for (let USDTTransferFrom of await USDTTransferFromList) {
        await TokenTransfers(USDTTransferFrom)
    }

})

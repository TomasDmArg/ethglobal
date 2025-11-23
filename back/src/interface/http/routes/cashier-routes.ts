import { Router } from "express"
import {
  getCashiers,
  createCashier,
  getCashierByUuid,
  getCashierDetails,
  getCashiersByMerchant,
  getCashiersByMerchantAddress
} from "../controllers/cashier-controller"

const router = Router()
router.post("/cashiers", createCashier)
router.get("/cashiers/merchant/address/:address", getCashiersByMerchantAddress)
router.get("/cashiers/merchant/:merchantId", getCashiersByMerchant)
router.get("/cashiers/:uuid/details", getCashierDetails)
router.get("/cashiers", getCashiers)
router.get("/cashiers/:uuid", getCashierByUuid)

export default router

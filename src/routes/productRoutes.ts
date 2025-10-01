import { Router } from "express";
import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    increaseStock,
    decreaseStock,
    getLowStockProducts,
} from "../controllers/productController";

const router = Router();

router.post("/",createProduct);
router.get("/", getProducts);
router.get("/low-stock", getLowStockProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.put("/:id/increase", increaseStock);
router.put("/:id/decrease", decreaseStock);


export default router;


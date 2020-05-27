import { ShoppingItem } from '../shopping-list/shopping-item.model';
export class GlobalConstants {
    public static cartCounter = 0;
    public static mycartDetails: ShoppingItem[] = [];
    public static isCartDetailsAvailable = false;
    public static paymentDetails: any[] = [];
    public static totalPayableAmount: number;
    public static discountedPrice: number;
    public static isMobileView = false;
}

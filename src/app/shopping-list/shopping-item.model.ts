export class ShoppingItem {
    public itemId: any;
    public name: string;
    public imagePath: string;
    public price: number;
    public originalPrice: number;
    public desc: string;
    public discountPrice: number;
    public originalQty: number;
    public qty: number;
    public qtyUsed: number;

    constructor(itemId: any, name: string, imagePath: string, price: number, originalPrice: number,
                desc: string, discountPrice: number, originalQty: number, qty: number, qtyUsed: number) {
        this.itemId = itemId;
        this.name = name;
        this.imagePath = imagePath;
        this.price = price;
        this.originalPrice = originalPrice;
        this.desc = desc;
        this.discountPrice = discountPrice;
        this.originalQty = originalQty;
        this.qty = qty;
        this.qtyUsed = qtyUsed;
    }
}

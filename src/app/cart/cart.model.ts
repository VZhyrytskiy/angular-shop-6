import { IProduct } from 'src/app/shared/models/product.model';

export interface IPurchasedProduct extends IProduct {
  count: number;
}

// Apply 5% discount for bundles (Orange, Pink, Green)
import { menuItems } from "../constants/MenuItems";
export const applyBundleDiscount = (quantity, item) => {
  if (quantity >= 2) {
    const itemPrice = menuItems[item];
    const discountPerPair = itemPrice * 0.05;
    return discountPerPair * Math.floor(quantity / 2);
  }
  return 0;
};

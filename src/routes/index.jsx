import Main from "../pages/Home";
import Plant from "../pages/Plant";
import Shop from "../pages/Shop";
import ByNow from "../pages/Shop/Buy";
import ShopDetail from "../pages/Shop/Detail";
import { paths } from "../paths";
const { HOME, SHOP, PLANT, SHOP_INFO, SHOP_BYNOW } = paths;

export const PUBLIC__ROUTES = [
  { path: HOME, element: <Main /> },
  { path: SHOP, element: <Shop /> },
  { path: PLANT, element: <Plant /> },
  { path: SHOP_INFO, element: <ShopDetail /> },
  { path: SHOP_BYNOW, element: <ByNow /> },
];

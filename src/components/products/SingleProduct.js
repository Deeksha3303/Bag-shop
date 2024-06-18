import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FitScreenOutlinedIcon from '@mui/icons-material/FitScreenOutlined';
import { Stack } from "@mui/material";
import { 
  ProductActionsWrapper, 
  Product, 
  ProductActionButton, 
  ProductAddToCart, 
  ProductFavButton, 
  ProductImage, 
  ProductMetaWrapper 
} from "../../styles/product";
import ProductMeta from "./ProductMeta";
import { useHistory } from "react-router-dom";

export default function SingleProduct({ product, matches }) {
  const history = useHistory();

  const handleBookClick = () => {
    // Navigate to the next page, for example "/book"
    history.push("/book");
  };

  return (
    <>
      <Product>
        <ProductImage src={product.image}></ProductImage>
        <ProductMeta product={product} matches={matches}></ProductMeta>
        <ProductActionsWrapper>
          <Stack direction="row">
            <ProductFavButton isfav={1}>
              <FavoriteBorderOutlined></FavoriteBorderOutlined>
            </ProductFavButton>
            <ProductActionButton>
              <ShareOutlinedIcon></ShareOutlinedIcon>
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenOutlinedIcon></FitScreenOutlinedIcon>
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
        <ProductAddToCart onClick={handleBookClick}>BOOK</ProductAddToCart>
      </Product>
    </>
  );
}

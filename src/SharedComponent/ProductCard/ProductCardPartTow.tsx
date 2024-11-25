import { setAddToCartData } from "@/Redux/api/AddToCart/AddToCartSlice";
import { useAppDispatch } from "@/Redux/hooks";
import { useState } from "react";

import { CiStar } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { toast } from "sonner";

interface ProductData {
  id: number; // Ensure each product has a unique ID
  name: string;
  price: number;
}

interface ProductCardProps {
  data: ProductData;
}

const ProductCardPartTow = ({ data }: ProductCardProps) => {
  const [array, setArray] = useState<ProductData[]>([]);
  const dispatch = useAppDispatch()

  const addToCartHandler = () => {
    const storedProducts = localStorage.getItem("product");
    let updatedProducts: ProductData[] = [];

    if (storedProducts) {
      // Parse stored products
      updatedProducts = JSON.parse(storedProducts);
      const isAlreadyAdded = updatedProducts.some((product) => product.id === data.id);

      if (isAlreadyAdded) {
        toast.error("You have already added this product to the cart.");
        return;
      }

      // Add the product to the cart
      updatedProducts.push(data);
    } else {
      // No products stored yet; initialize with the current product
      updatedProducts = [data];
    }

    // Update state and localStorage
    setArray(updatedProducts);
    localStorage.setItem("product", JSON.stringify(updatedProducts));
    toast.success("Product added to cart successfully!");

    const lastGetItem = localStorage.getItem("product");
    const lastData = JSON.parse(lastGetItem);
    dispatch(setAddToCartData(lastData))
  };

  return (
    <div className=" group"> {/* Apply 'relative' to contain 'absolute' positioned elements */}
      {/* section 1 ------------------------------------------------------------------- */}
      <section>
        <h3 className="font-bold text-[14px]">Apple MacBook Pro 16″ M1 Pro</h3>
        <p className="font-[500] text-gray-400 text-[14px] mt-2">Apple MacBook</p>

        <section className="flex mt-2">
          <CiStar className="text-[17px]" />
          <CiStar className="text-[17px]" />
          <CiStar className="text-[17px]" />
          <CiStar className="text-[17px]" />
          <CiStar className="text-[17px]" />
        </section>

        <section className="flex gap-1 items-center mt-2">
          <p>
            <FaCheck className="text-blue-500" />
          </p>
          <p className="font-[500] text-[14px]">In Stock</p>
        </section>

        <p className="text-blue-500 text-[14px] font-[600] mt-2">${data?.price}</p>

        <div className="mt-2">
          <button onClick={addToCartHandler} className="py-2.5 group w-full h-[40px] px-6 text-[15px] flex justify-center items-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
            <IoCartOutline className="text-white font-bold text-[25px] hidden group-hover:block" />
            <span className="group-hover:hidden">Add To Cart</span>
          </button>

          <p className="text-[14px] font-[500] my-2">
            SKU: <span className="text-gray-400">304344</span>
          </p>
        </div>
      </section>

      {/* section 2 ------------------------------------------------------------------- */}
      {/* Position this section absolutely so it appears above section 1 on hover */}
      <section className="absolute  rounded-xl left-0  mt-2 w-full bg-white p-4 border-t-0 overflow-y-auto hidden group-hover:block h-[300px] z-10 border border-gray-200 shadow-lg group-hover:rounded-t-none">
        <hr />
        <h2 className="mt-2">Apple MacBook Pro</h2>

        <div>
          <h3>Available Colors:</h3>
          <p>Silver, Space Gray</p>
        </div>

        <div>
          <h3>Operating System:</h3>
          <p>Mac OS 12</p>
        </div>

        <div>
          <h3>Processor:</h3>
          <p>M1 Pro (10-core)</p>
          <ul>
            <li>8 CPU / 16 GPU</li>
            <li>10 CPU / 24 GPU</li>
            <li>10 CPU / 32 GPU</li>
          </ul>
        </div>

        <div>
          <h3>Display:</h3>
          <p>16” - 3456×2234</p>
          <p>Retina Display with 120 Hz refresh rate</p>
        </div>

        <div>
          <h3>RAM:</h3>
          <p>16GB, 32GB</p>
        </div>

        <div>
          <h3>Storage:</h3>
          <p>256GB SSD, 512GB SSD, 1 TB SSD</p>
        </div>

        <div>
          <h3>Graphics:</h3>
          <p>Integrated - M1 Pro</p>
        </div>

        <div>
          <h3>Battery:</h3>
          <p>Capacity: 70 W*h</p>
          <p>Battery Life: Up to 21 hours</p>
        </div>

        <div>
          <h3>Weight:</h3>
          <p>1.6 kg</p>
        </div>

        <div>
          <h3>Dimensions:</h3>
          <p>155×312.6×221x2 mm</p>
        </div>

        <div>
          <h3>Warranty:</h3>
          <p>12 months</p>
        </div>
      </section>
    </div>
  );
};

export default ProductCardPartTow;

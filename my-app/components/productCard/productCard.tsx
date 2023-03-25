import { ProductButton } from "@/components/productCard/button";
import Image from "next/image";

export const ProductCard = () => {
  return (
    <div className="flex w-[600px] rounded-xl shadow-xl">
      <Image
        src="/images/image-product-desktop.jpg"
        width={480}
        height={240}
        className="w-1/2 rounded-l-xl"
        alt="Product"
      />
      <div className="w-1/2 space-y-4 p-8">
        <h2 className="font-montserrat text-xs uppercase tracking-[0.2em] text-gray-500">
          Perfume
        </h2>
        <h1 className="font-fraunces text-4xl font-bold">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="font-montserrat text-sm text-gray-500">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex items-center space-x-4">
          <h3 className="font-fraunces text-3xl font-bold text-emerald-600">
            $149.99
          </h3>
          <p className="text-sm text-gray-500 line-through">$169.99</p>
        </div>
        <ProductButton text="Add to cart" />
      </div>
    </div>
  );
};

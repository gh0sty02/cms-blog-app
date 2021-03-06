import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import categoriesI from "../interfaces/ICategory";

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<categoriesI>([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Catgories</h3>
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <span className="cursor-pointer block pb-3 mb-3 border-b">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function FilterSidebar() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        category: "",
        gender: "",
        color: "",
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100,
    });
    const [priceRange, setPriceRange] = useState([0, 100]);

    const categories = ["Top Wear", "Bottom Wear"];
    const colors = [
        "Red",
        "Blue",
        "Green",
        "Black",
        "Yellow",
        "Gray",
        "White",
        "Navy",
        "Beige",
        "Pink",
    ];
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const materials = [
        "Cotton",
        "Polyester",
        "Denim",
        "Wool",
        "Silk",
        "Linen",
        "Fleece",
        "Viscose",
    ];
    const brands = ["Gentle Park", "H&M", "Zara", "Levis", "Gucci", "Cats Eye"];
    const genders = ["Men", "Women"];

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);

        setFilters({
            category: params.category || "",
            gender: params.gender || "",
            color: params.color || "",
            size: params.size ? params.size.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 100,
        });
        setPriceRange([0, params.maxPrice || 100]);
    }, [searchParams]);

    const handleFilterChange = (e) => {
        const { name, value, checked, type } = e.target;

        let newFilters = { ...filters };
        if (type === "checkbox") {
            if (checked) {
                newFilters[name] = [...(newFilters[name] || []), value];
            } else {
                newFilters[name] = newFilters[name].filter((item) => item !== value);
            }
        } else {
            newFilters[name] = value;
        }

        setFilters(newFilters);
        updateURLParams(newFilters);
    };

    const updateURLParams = (newFilters) => {
        const params = new URLSearchParams();

        Object.keys(newFilters).forEach((key) => {
            if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
                params.append(key, newFilters[key].join(","));
            } else {
                params.append(key, newFilters[key]);
            }
        });

        setSearchParams(params);
        navigate(`?${params.toString()}`);
    };

    const handlePriceRangeChange = (e) => {
        const newPrice = e.target.value;

        setPriceRange([0, newPrice]);
        const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
        setFilters(filters);
        updateURLParams(newFilters);
    }

    return (
        <div className="p-4">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

            {/* //? categories filter */}
            <div className="mb-6">
                <span className="block text-gray-600 font-medium mb-2 uppercase">Category</span>
                {categories.map((category, idx) => (
                    <div key={category} className="flex items-center mb-1">
                        <input
                            type="radio"
                            id={`category-${idx}`}
                            name="category"
                            value={category}
                            onChange={handleFilterChange}
                            checked={filters.category === category}
                            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border border-gray-300"
                        />
                        <label htmlFor={`category-${idx}`} className="text-gray-700 cursor-pointer">
                            {category}
                        </label>
                    </div>
                ))}
            </div>

            {/* //? genders filter */}
            <div className="mb-6">
                <span className="block text-gray-600 font-medium mb-2 uppercase">Gender</span>
                {genders.map((gender, idx) => (
                    <div key={gender} className="flex items-center mb-1">
                        <input
                            type="radio"
                            id={`gender-${idx}`}
                            name="gender"
                            value={gender}
                            onChange={handleFilterChange}
                            checked={filters.gender === gender}
                            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border border-gray-300"
                        />
                        <label htmlFor={`gender-${idx}`} className="text-gray-700 cursor-pointer">
                            {gender}
                        </label>
                    </div>
                ))}
            </div>

            {/* //? colors filter */}
            <div className="mb-6">
                <span className="block text-gray-600 font-medium mb-2">Color</span>
                <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                        <button
                            key={color}
                            name="color"
                            value={color}
                            onClick={handleFilterChange}
                            className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${
                                filters.color === color ? "ring-2 ring-blue-500" : ""
                            }`}
                            style={{ backgroundColor: color.toLocaleLowerCase() }}
                        ></button>
                    ))}
                </div>
            </div>

            {/* //? sizes filter */}
            <div className="mb-6">
                <span className="block text-gray-600 font-medium mb-2 uppercase">Size</span>
                {sizes.map((size, idx) => (
                    <div key={size} className="flex items-center mb-1">
                        <input
                            type="checkbox"
                            id={`size-${idx}`}
                            name="size"
                            value={size}
                            onChange={handleFilterChange}
                            checked={filters.size.includes(size)}
                            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border border-gray-300"
                        />
                        <label htmlFor={`size-${idx}`} className="text-gray-700 cursor-pointer">
                            {size}
                        </label>
                    </div>
                ))}
            </div>

            {/* //? materials filter */}
            <div className="mb-6">
                <span className="block text-gray-600 font-medium mb-2 uppercase">Materials</span>
                {materials.map((material, idx) => (
                    <div key={material} className="flex items-center mb-1">
                        <input
                            type="checkbox"
                            id={`material-${idx}`}
                            name="material"
                            value={material}
                            onChange={handleFilterChange}
                            checked={filters.material.includes(material)}
                            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border border-gray-300"
                        />
                        <label htmlFor={`material-${idx}`} className="text-gray-700 cursor-pointer">
                            {material}
                        </label>
                    </div>
                ))}
            </div>

            {/* //? brands filter */}
            <div className="mb-6">
                <span className="block text-gray-600 font-medium mb-2 uppercase">Brands</span>
                {brands.map((brand, idx) => (
                    <div key={brand} className="flex items-center mb-1">
                        <input
                            type="checkbox"
                            id={`brand-${idx}`}
                            name="brand"
                            value={brand}
                            onChange={handleFilterChange}
                            checked={filters.brand.includes(brand)}
                            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border border-gray-300"
                        />
                        <label htmlFor={`brand-${idx}`} className="text-gray-700 cursor-pointer">
                            {brand}
                        </label>
                    </div>
                ))}
            </div>

            {/* //? price range filter */}
            <div className="mb-8">
                <span className="block text-gray-600 font-medium mb-2 uppercase">Price Range</span>
                <input
                    type="range"
                    name="priceRange"
                    min={0}
                    max={100}
                    value={priceRange[1]}
                    onChange={handlePriceRangeChange}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-gray-600 mt-2">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>
        </div>
    );
}

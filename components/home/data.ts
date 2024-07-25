

export interface ProductData {
    image: string;
    title: string;
    stock: string;
    price: number;
    feature: string;
    latest: boolean;
    review: number;
    totalReviewer: number;
    color: string[];
    size: string[];
}

export const productData: ProductData[] =[
    {
        image: "/assets/product-1.png",
        title: 'Classic Monochrome Tees',
        stock: 'In Stock',
        price: 34.00,
        feature: "abc",
        latest: true,
        review: 4.2,
        totalReviewer: 34,
        color: ['#A3BEF8','#FFD58A','#83B18B'],
        size: ['S','M','L','XL','XXL'],
    },
    {
        image: "/assets/product-2.png",
        title: 'Monochromatic Wardrobe',
        stock: 'In Stock',
        price: 24.00,
        feature: "xyz",
        latest: false,
        review: 4.2,
        totalReviewer: 34,
        color: ['#A3BEF8','#FFD58A','#83B18B'],
        size: ['S','M','L','XL','XXL'],
    },
    {
        image: "/assets/product-3.png",
        title: 'Essential Neutrals',
        stock: 'In Stock',
        price: 30.00,
        feature: "xyz",
        latest: false,
        review: 4.2,
        totalReviewer: 34,
        color: ['#A3BEF8','#FFD58A','#83B18B'],
        size: ['S','M','L','XL','XXL'],
    },
    {
        image: "/assets/product-4.png",
        title: 'Athletic',
        stock: 'In Stock',
        price: 32.00,
        feature: "abc",
        latest: true,
        review: 4.2,
        totalReviewer: 34,
        color: ['#A3BEF8','#FFD58A','#83B18B'],
        size: ['S','M','L','XL','XXL'],
    },
    {
        image: "/assets/product-5.png",
        title: 'UTRAANET',
        stock: 'In Stock',
        price: 14.00,
        feature: "abc",
        latest: true,
        review: 4.2,
        totalReviewer: 34,
        color: ['#A3BEF8','#FFD58A','#83B18B'],
        size: ['S','M','L','XL','XXL'],
    },
    {
        image: "/assets/product-6.png",
        title: 'Elegant Ebony Sweatshirts',
        stock: 'In Stock',
        price: 54.00,
        feature: "acd",
        latest: false,
        review: 4.2,
        totalReviewer: 34,
        color: ['#A3BEF8','#FFD58A','#83B18B'],
        size: ['S','M','L','XL','XXL'],
    },
    {
        image: "/assets/product-7.png",
        title: 'Sleek and Cozy',
        stock: 'In Stock',
        price: 74.00,
        feature: "acd",
        latest: true,
        review: 4.2,
        totalReviewer: 34,
        color: ['#A3BEF8','#FFD58A','#83B18B'],
        size: ['S','M','L','XL','XXL'],
    },
    {
        image: "/assets/product-8.png",
        title: 'Raw Black Tees',
        stock: 'In Stock',
        price: 44.00,
        feature: "zxy",
        latest: false,
        review: 4.2,
        totalReviewer: 34,
        color: ['#A3BEF8','#FFD58A','#83B18B'],
        size: ['S','M','L','XL','XXL'],
    },
    {
        image: "/assets/product-9.png",
        title: 'MOCKUP Black',
        stock: 'In Stock',
        price: 34.00,
        feature: "zxy",
        latest: false,
        review: 4.2,
        totalReviewer: 34,
        color: ['#A3BEF8','#FFD58A','#83B18B'],
        size: ['S','M','L','XL','XXL'],
    },
    
]
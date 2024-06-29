
export const navigation = {
   categories: [
      {
         id: 'shop',
         name: 'Shop',
         featured: [
            {
               name: 'New Arrivals',
               id: '#',
               imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
               imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
            },
            {
               name: 'Artwork Tees',
               id: '#',
               imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
               imageAlt:
                  'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
            },
         ],
         sections: [
            {
               id: 'clothing',
               name: 'Clothing',
               items: [
                  { name: 'Mens Kurtas', id: 'mens_kurta' },
                  { name: 'Shirt', id: 'shirt' },
                  { name: 'Men Jeans', id: 'men_jeans' },
                  { name: 'Sweaters', id: '#' },
                  { name: 'T-Shirts', id: 't-shirt' },
                  { name: 'Jackets', id: '#' },
                  { name: 'Activewear', id: '#' },

               ],
            },
            {
               id: 'accessories',
               name: 'Accessories',
               items: [
                  { name: 'Watches', id: '#' },
                  { name: 'Wallets', id: '#' },
                  { name: 'Bags', id: '#' },
                  { name: 'Sunglasses', id: '#' },
                  { name: 'Hats', id: '#' },
                  { name: 'Belts', id: '#' },
               ],
            },
            {
               id: 'brands',
               name: 'Brands',
               items: [
                  { name: 'Re-Arranged', id: '#' },
                  { name: 'Counterfeit', id: '#' },
                  { name: 'Full Nelson', id: '#' },
                  { name: 'My Way', id: '#' },
               ],
            },
         ],
      },
   ],
   pages: [
      { key: 'Home', childrens: null, href: '/' },
      {
         key: 'Shop',
         href: null,
         childrens: [
            { label: 'Trang phục Ấn Độ', href: '/shop/clothing/trang_phuc_an_do' },     
            { label: 'Áo', href: '/shop/clothing/ao' }, 
            { label: 'Quần', href: '/shop/clothing/quan' },
            { label: 'Thời trang trẻ', href: '/shop/clothing/thoi_trang_tre'},
         ]
      },
      { key: 'Blog', childrens: null, href: '/blog' },
      { key: 'About', childrens: null, href: '/about' },
      { key: 'Contact us', childrens: null, href: '/contact-us' },
      { key: 'FAQS', childrens: null, href: '/faqs' },
   ],
}  
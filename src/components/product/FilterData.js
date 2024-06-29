export const color = [
   "white",
   "Black",
   "Red",
   "Marun",
   "Being",
   "Pink",
   "Green",
   "Yellow"
];
export const filters = [
   {
      id: "color",
      name: "Màu sắc",
      option: [
         { value: "white", label: "Trắng" },
         { value: "beige", label: "Be" },
         { value: "blue", label: "Xanh" },
         { value: "brown", label: "Nâu" },
         { value: "green", label: "Xanh lá" },
         { value: "purple", label: "Tím" },
         { value: "yellow", label: "Vàng" },
      ],
   },
   {
      id: "size",
      name: "Size",
      option: [
         { value: "S", label: "S" },
         { value: "M", label: "M" },
         { value: "L", label: "L" },
      ],
   },
   {
      id: "price",
      name: "Giá",
      option: [
         { value: "159-399", label: "159.000VND -> 399.000VND" },
         { value: "399-999", label: "399.000VND -> 999.000VND" },
         { value: "999-1500", label: "999.000VND -> 1500.000VND" },
      ]
   },
   {
      id: "discount",
      name: "Giảm giá",
      option: [
         { value: "10", label: "Trên 10%" },
         { value: "20", label: "Trên 20%" },
         { value: "30", label: "Trên 30%" },
         { value: "40", label: "Trên 40%" },
         { value: "50", label: "Trên 50%" },
         { value: "60", label: "Trên 60%" },
         { value: "70", label: "Trên 70%" },
         { value: "80", label: "Trên 80%" },
      ]
   },
   {
      id: "availability",
      name: "Số lượng",
      option: [
         { value: "in_stock", label: "Còn hàng" },
         { value: "out_stock", label: "Hết hàng" },
      ]
   }
]

export const singleFilter = [
   {
      id: "price",
      name: "Price",
      option: [
         { value: "159-399", label: "$159 To $399" },
         { value: "399-999", label: "$399 To $999" },
         { value: "999-1500", label: "$999 To $1500" },
      ]
   },
   {
      id: "discount",
      name: "Discount Range",
      option: [
         { value: "10", label: "10% And Above" },
         { value: "20", label: "20% And Above" },
         { value: "30", label: "30% And Above" },
         { value: "40", label: "40% And Above" },
         { value: "50", label: "50% And Above" },
         { value: "60", label: "60% And Above" },
         { value: "70", label: "70% And Above" },
         { value: "80", label: "80% And Above" },
      ]
   },
   {
      id: "availability",
      name: "Availability",
      option: [
         { value: "in_stock", label: "In Stock" },
         { value: "out_stock", label: "Out Stock" },
      ]
   }
]
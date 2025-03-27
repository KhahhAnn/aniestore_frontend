import { RadioGroup } from '@headlessui/react'
import { Box, Button, Grid, LinearProgress, Rating } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addItemToCart } from '../../state/cart/Action'
import { findProductById } from '../../state/product/Action'
import ProductReviewCard from './ProductReviewCard'
import { message } from 'antd'

const product = {
   name: 'Basic Tee 6-Pack',
   price: '$192',
   href: '#',
   breadcrumbs: [
      { id: 1, name: 'Men', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
   ],
   images: [
      {
         src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
         alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
         src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
         alt: 'Model wearing plain black basic tee.',
      },
      {
         src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
         alt: 'Model wearing plain gray basic tee.',
      },
      {
         src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
         alt: 'Model wearing plain white basic tee.',
      },
   ],
   colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
   ],
   sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
   ],
   description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
   highlights: [
      'Cắt và may thủ công tại địa phương',
      'Nhuộm bằng màu sắc độc quyền của chúng tôi',
      'Được giặt và co trước',
      'Vải cotton 100% siêu mềm mại',
   ],
   details:
      'Bộ 6 chiếc bao gồm hai áo phông màu đen, hai áo phông màu trắng và hai áo phông màu xám nhạt. Đăng ký dịch vụ thuê bao của chúng tôi và là người đầu tiên sở hữu những màu sắc mới thú vị, như phiên bản giới hạn "Xám Than" sắp ra mắt.',
}

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

export default function ProductDeatil() {
   const [selectedSize, setSelectedSize] = useState("")
   const dispatch = useDispatch();
   const params = useParams();
   const { productStore } = useSelector(Store => Store)
   const handleAddToCart = () => {
      // Kiểm tra xem người dùng đã chọn size chưa
      if (!selectedSize || !selectedSize.name) {
         message.error("Vui lòng chọn size trước khi thêm vào giỏ hàng");
         return;
      }
   
      // Kiểm tra xem người dùng đã đăng nhập chưa
      const token = localStorage.getItem('jwt');
      if (!token) {
         message.error("Vui lòng đăng nhập để thêm sản phẩm");
         return;
      }
   
      try {
         const data = { productId: params.productId, size: selectedSize.name };
         console.log("data: ", data);
         dispatch(addItemToCart(data));
         window.location.reload();  // Nếu bạn muốn reload lại trang sau khi thêm vào giỏ hàng
         localStorage.setItem('addToCartMessage', "Thêm sản phẩm thành công");
      } catch (error) {
         message.error("Thêm sản phẩm thất bại");
      }
   }
   

   useEffect(() => {
      const data = { productId: params.productId }
      dispatch(findProductById(data));
   }, [params.productId])

   useEffect(() => {
      const storedMessage = localStorage.getItem('addToCartMessage');
      if (storedMessage) {
         message.success(storedMessage);
         localStorage.removeItem('addToCartMessage');
      }
   }, []);
   const formatCurrency = (value) => {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
   }

   console.log(productStore);
   
   return (
      <div className="bg-white lg:px-20">
         <div className="pt-6">
            <nav aria-label="Breadcrumb">
               <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                  {product.breadcrumbs.map((breadcrumb) => (
                     <li key={breadcrumb.id}>
                        <div className="flex items-center">
                           <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                              {breadcrumb.name}
                           </a>
                           <svg
                              width={16}
                              height={20}
                              viewBox="0 0 16 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-5 w-4 text-gray-300"
                           >
                              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                           </svg>
                        </div>
                     </li>
                  ))}
                  <li className="text-sm">
                     <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                        {product.name}
                     </a>
                  </li>
               </ol>
            </nav>
            <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
               {/* Image gallery */}
               <div className="flex flex-col items-center">
                  <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                     <img
                        src={productStore.product?.imageUrl}
                        alt={product.images[0].alt}
                        className="h-full w-full object-cover object-center"
                     />
                  </div>
               </div>
               <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-6 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
                  <div className="lg:col-span-2">
                     <h1 className='text-lg lg:text-xl text-black pt-1'>{productStore.product?.title}</h1>
                     <p className="text-base italic lg:text-xl font-semibold text-gray-600">{productStore.product?.brand}</p>
                  </div>

                  {/* Options */}
                  <div className="mt-4 lg:row-span-3 lg:mt-0">
                     <h2 className="sr-only">Product information</h2>
                     <div className=" flex space-x-5 items-center text-lg lg:text-xl text-gray-900">
                        <p className="font-semibold">{formatCurrency(productStore.product?.price)}</p>
                     </div>
                     <div className="m-0">
                        {/* Sizes */}
                        <div className="mt-4">
                           <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium text-gray-900">Size</h3>
                           </div>
                           <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                              <RadioGroup.Label className="sr-only">Chọn size</RadioGroup.Label>
                              <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                 {product.sizes.map((size) => (
                                    <RadioGroup.Option
                                       key={size.name}
                                       value={size}
                                       disabled={!size.inStock}
                                       className={({ active }) =>
                                          classNames(
                                             size.inStock
                                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                             active ? 'ring-2 ring-indigo-500' : '',
                                             'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                          )
                                       }
                                    >
                                       {({ active, checked }) => (
                                          <>
                                             <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                             {size.inStock ? (
                                                <span
                                                   className={classNames(
                                                      active ? 'border' : 'border-2',
                                                      checked ? 'border-[#2ebb77]' : 'border-transparent',
                                                      'pointer-events-none absolute -inset-px rounded-md'
                                                   )}
                                                   aria-hidden="true"
                                                />
                                             ) : (
                                                <span
                                                   aria-hidden="true"
                                                   className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                >
                                                   <svg
                                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                      viewBox="0 0 100 100"
                                                      preserveAspectRatio="none"
                                                      stroke="currentColor"
                                                   >
                                                      <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                   </svg>
                                                </span>
                                             )}
                                          </>
                                       )}
                                    </RadioGroup.Option>
                                 ))}
                              </div>
                           </RadioGroup>
                        </div>
                        <Button onClick={handleAddToCart} variant='contained' sx={{ px: "1rem", py: "1rem", bgcolor: "#2ebb77", marginTop: 3, borderRadius: "12px" }} disabled={!selectedSize || !selectedSize.name} >
                           Thêm vào giỏ hàng
                        </Button>
                     </div>
                  </div>

                  <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                     {/* Description and details */}
                     <div>
                        <h3 className="sr-only">Mô tả</h3>

                        <div className="space-y-6">
                           <p className="text-base text-gray-900">{productStore?.product?.description}</p>
                        </div>
                     </div>

                     <div className="mt-10">
                        <h3 className="text-sm font-medium text-gray-900">Đáng chú ý</h3>
                        <div className="mt-4">
                           <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                              {product.highlights.map((highlight) => (
                                 <li key={highlight} className="text-gray-400">
                                    <span className="text-gray-600">{highlight}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>

                     <div className="mt-10">
                        <h2 className="text-sm font-medium text-gray-900">Chi tiết</h2>

                        <div className="mt-4 space-y-6">
                           <p className="text-sm text-gray-600">{product.details}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section>
               <h1 className='font-semibold text-lg pb-4'>Review và đánh giá sản phẩm</h1>
               <div className='border p-5 max-h-[500px]'>
                  <Grid container spacing={7}>
                     <Grid item xs={7}>
                        <div className='space-y-5'>
                           <ProductReviewCard productId={params.productId} />
                        </div>
                     </Grid>
                     <Grid item xs={5}>
                        <h1 className='text-xl font-semibold pb-1'>Đánh giá sản phẩm</h1>
                        <div className='flex items-center space-x-3'>
                           <Rating name='read-only' value={4.6} precision={0.5} readOnly />
                           <p className='opacity-60'>5 đánh giá</p>
                        </div>
                        <Box className="mt-5">
                           <Grid container alignItems="center" gap={2}>
                              <Grid item xs={2}>
                                 <p>Tuyệt vời</p>
                              </Grid>
                              <Grid item xs={7}>
                                 <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant='determinate' value={40} color='success' />
                              </Grid>
                           </Grid>
                           <Grid container alignItems="center" gap={2}>
                              <Grid item xs={2}>
                                 <p>Rất tốt</p>
                              </Grid>
                              <Grid item xs={7}>
                                 <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant='determinate' value={30} color='secondary' />
                              </Grid>
                           </Grid>
                           <Grid container alignItems="center" gap={2}>
                              <Grid item xs={2}>
                                 <p>Tốt</p>
                              </Grid>
                              <Grid item xs={7}>
                                 <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant='determinate' value={25} color='primary' />
                              </Grid>
                           </Grid>
                           <Grid container alignItems="center" gap={2}>
                              <Grid item xs={2}>
                                 <p>Trung bình</p>
                              </Grid>
                              <Grid item xs={7}>
                                 <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant='determinate' value={20} color='warning' />
                              </Grid>
                           </Grid>
                           <Grid container alignItems="center" gap={2}>
                              <Grid item xs={2}>
                                 <p>Chưa tốt</p>
                              </Grid>
                              <Grid item xs={7}>
                                 <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant='determinate' value={1} color='error' />
                              </Grid>
                           </Grid>
                        </Box>
                     </Grid>
                  </Grid>
               </div>
            </section>
         </div>
      </div>
   )
}

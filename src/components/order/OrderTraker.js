import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = [
   "Đã đặt",
   "Đã xác nhận đặt hàng",
   "Đã vận chuyển",
   "Đã giao hàng",
   "Vận chuyển"
]

const OrderTraker = ({ activeStep }) => {
   return (
      <div className='w-full'>
         <Stepper activeStep={activeStep} alternativeLabel>
            {
               steps.map((label) => <Step>
                  <StepLabel sx={{ color: "#9155fd", fontSize: "44px" }}>{label}</StepLabel>
               </Step>)
            }
         </Stepper>
      </div>
   )
}

export default OrderTraker
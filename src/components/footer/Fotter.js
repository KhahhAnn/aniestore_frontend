import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Fotter = () => {
   return (
      <div>
         <Grid className='bg-black text-white text-center mt-10' container sx={{ bgcolor: "black", color: "white", py: 3 }}>
            <Grid item xs={12} sm={6} md={3} >
               <Typography className='pb-5' variant='h6'> Company </Typography>
               <div>
                  <div>
                     <Button className='pb-5' variant='h6' gutterBottom> About </Button>
                  </div>
                  <div>
                     <Button className='pb-5' variant='h6' gutterBottom> Blog </Button>
                  </div>
                  <div>
                     <Button className='pb-5' variant='h6' gutterBottom> press </Button>
                  </div>
                  <div>
                     <Button className='pb-5' variant='h6' gutterBottom> Jobs </Button>
                  </div>
                  <div>
                     <Button className='pb-5' variant='h6' gutterBottom> Partners </Button>
                  </div>
               </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
               <Typography className='pb-5' variant='h6'> Solutions </Typography>
               <div>
                  <div>
                     <Button className='pb-5' variant='h6' gutterBottom> Marketing </Button>
                  </div>
                  <div>
                     <Button className='pb-5' variant='h6' gutterBottom> Analytics </Button>
                  </div>
                  <div>
                     <Button className='pb-5' variant='h6' gutterBottom> Commerce </Button>
                  </div>
                  <div>
                     <Button className='pb-5' variant='h6' gutterBottom> Insights </Button>
                  </div>
                  <div>
                     <Button className='pb-5' variant='h6' gutterBottom> Supports </Button>
                  </div>
               </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
               <Typography className='pb-5' variant='h6'> Documentation </Typography>
               <div>
                  <div>
                     <Button className='pb-5' variant='h6' gutterBottom> Guides </Button>
                  </div>
                  <div>
                     <Button className='pb-5' variant='h6' gutterBottom> API Status </Button>
                  </div>
               </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
               <Typography className='pb-5' variant='h6'> Legal </Typography>
               <div>
                  <div>
                     <Button className='pb-5' variant='h6' gutterBottom> Claim </Button>
                  </div>
                  <div>
                     <Button className='pb-5' variant='h6' gutterBottom> Private </Button>
                  </div>
                  <div>
                     <Button className='pb-5' variant='h6' gutterBottom> Term </Button>
                  </div>
               </div>
            </Grid>
            <Grid className='pt-20' item xs={12}>
               <Typography variant='body2' component="p" align='center'> &copy; 2024 KhahhAnn 10-10-2003</Typography>
               <Typography variant='body2' component="p" align='center'> Made by me</Typography>
               <Typography variant='body2' component="p" align='center'>
                  Icons made by {' '}
                  <Link href="https://mui.com/material-ui/material-icons/" color="inherit" underline='always'>
                     MUI ICONS
                  </Link> {' '}
                  from {' '}
                  <Link href="https://www.facebook.com/khanhhann1003/" color="inherit" underline='always'>
                     Facebook
                  </Link>
               </Typography>

            </Grid>
         </Grid>
      </div>
   )
}

export default Fotter
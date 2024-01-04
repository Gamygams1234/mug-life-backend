require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors')
const bodyParser = require('body-parser');
<<<<<<< HEAD
const productRoutes = require('./routes/products.js');
=======


const productRoutes = require('./routes/products.js');
const userRoutes = require('./routes/user.js');
const productCtrl = require('./controllers/productController');

>>>>>>> 831a2920f21b8ce17e8e36660bbd0b13315d81ac
const orderRoutes = require('./routes/orderRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const methodOverride = require('method-override');




// Create an Express application
const PORT = process.env.PORT || 4000;
// Middleware to parse JSON requests


app.use(bodyParser.json());
// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.once('open', ()=> {
  console.log('connected to mongo')
})
// MIDDLEWARE
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))






  // Use product and order routes
<<<<<<< HEAD
          app.use('/products', productRoutes);
          app.use('/orders', orderRoutes);
=======
          app.use('/', productRoutes);
>>>>>>> 831a2920f21b8ce17e8e36660bbd0b13315d81ac
          app.use('/', userRoutes);
          app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
          });

import express from 'express'
const productroute=express.Router()

import {add,review,update,dele} from "../Controller/productcontroller.js"


productroute.post('/acatalogue',add)
productroute.get('/vcatalogue',review)
productroute.put('/ucatalogue/:id',update)
productroute.delete('/trash/:id',dele)

export default productroute
const mongoose = require('mongoose')

const dblnk = `mongodb+srv://shyam_metalics:sm_051@bddydb.xzeskt3.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(dblnk).then(() => {
    console.log(`Connection Successful...`);
}).catch((err) => {
    console.error(`DB Connection Error.!!!`)
})
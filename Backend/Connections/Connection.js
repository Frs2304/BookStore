const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://frs23:<Yash2304>@firstcluster.ign9lps.mongodb.net/BookStore?retryWrites=true&w=majority'
).then(()=> 
console.log("Connected"))
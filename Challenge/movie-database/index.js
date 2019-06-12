var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send('ok')

});

app.get('/test', (req, res) => {
    res.send({status:200, message:"ok"})

});

app.get('/time', (req, res) => {
    var today = new Date();
    var time = today.getHours() + ":" + today.getSeconds();
    res.send({status:200, message:time})

});

app.get('/hello/:ID', (req, res) => {
    res.send({status:200, message:`hello ${req.params.ID}`})
    });

    app.get('/search',(req,res) => {
         if(req.query.s !== "")
         { 
             res.send({status:200, message:"ok", data:req.query.s}) 
            } 
            else { 
                res.send({status:500, error:true, message:"you have to provide a search"}) 
            } })    

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

app.get('/movies/read/',(req,res) => {
    res.send({status:200, data:movies})
})

app.get('/movies/read/by-date',(req,res) => {
    byYear = movies.sort(function(a,b) {
        return a.year - b.year
    })
    
    res.send({status:200, data:byYear})
})

app.get('/movies/read/by-rating',(req,res) => {
    byYear = movies.sort(function(a,b) {
        return a.rating - b.rating
    })
    
    res.send({status:200, data:byYear})
})

app.get('/movies/read/by-title',(req,res) => {
    function compare( a, b ) {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.last_nom > b.last_nom ){
          return 1;
        }
        return 0;
      }
    
    res.send({status:200, data:movies.sort(compare)})
})

app.get('/movies/read/id/:ID',(req,res) => {
    var e = req.params.ID
    if(e <= movies.length)
    { 
        res.send({status:200, data:movies[e-1]})
       } 
       else { 
           res.send({status:500, error:true, message:"you have to provide a search"}) 
       } 
    })

app.listen(3000, () => console.log('listinig on port 3000'))


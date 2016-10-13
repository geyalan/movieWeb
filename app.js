var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var port = process.env.PORT || 4000
var app = express()

app.set('views','./views/pages')
app.set('view engine','jade')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port)

console.log('imooc started on port '+port)

//index page
app.get('/',function(req,res){
  res.render('index',{
    title:'movie  首页',
    movies: [{
      title:'机械战警',
      _id:1,
      poster:'http://vod.kankan.com/v/74/74103.shtml?id=751033'
    },{
      title:'机械战警',
      _id:2,
      poster:'http://vod.kankan.com/v/74/74103.shtml?id=751033'
    },{
      title:'机械战警',
      _id:3,
      poster:'http://vod.kankan.com/v/74/74103.shtml?id=751033'
    },{
      title:'机械战警',
      _id:4,
      poster:'http://vod.kankan.com/v/74/74103.shtml?id=751033'
    },{
      title:'机械战警',
      _id:5,
      poster:'http://vod.kankan.com/v/74/74103.shtml?id=751033'
    },{
      title:'机械战警',
      _id:6,
      poster:'http://vod.kankan.com/v/74/74103.shtml?id=751033'
    }]
  })
})


//list page
app.get('/admin/list',function(req,res){
  res.render('list',{
    title:'movie 列表页 ',
    movies:[{
      doctor:'何塞.帕迪里亚',
      country:'美国',
      title:'机械战警',
      year:2014,
      poster:'http://vod.kankan.com/v/74/74103.shtml?id=751033',
      language:'英语',
      flash:'http://vod.kankan.com/v/74/74103.shtml?id=751033',
      summary:'11111111'
    }]
  })
})

//detail page
app.get('/movie/:id',function(req,res){
  res.render('detail',{
    title:'movie  详情页',
    movie:{
      doctor:'何塞.帕迪里亚',
      country:'美国',
      title:'机械战警',
      year:2014,
      poster:'http://vod.kankan.com/v/74/74103.shtml?id=751033',
      language:'英语',
      flash:'http://vod.kankan.com/v/74/74103.shtml?id=751033',
      summary:'111111'
    }
  })
})

//admin page
app.get('/admin/movie',function(req,res){
  res.render('admin',{
    title:'movie  后台',
    movie:{
      title:'',
      doctor:'',
      country:'',
      year:'',
      poster:'',
      flash:'',
      summary:'',
      language:''
    }
  })
})
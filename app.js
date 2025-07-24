const ex = require('express');
const ap = ex();

ap.set('view engine', 'ejs')
//ap.set('views', './plains')//this is necessary for ejs rendering if the folder name is not 'views'

//listen to request
ap.listen(3005);
console.log('Server running on port 3005')

ap.get('/', (req, res) => {
  // res.send('<h1>home page</h1>');

  // res.sendFile('./plain/index.html',{root:__dirname})
  res.render("index");
  console.log('home page loaded');
})

ap.get('/about', (req, res) => {
  //res.send('<h1>about page</h1>');
  const party = [
    { title: 'Theme', snippet: 'the theme for this party is animals' },
    { title: 'Songs', snippet: 'the song playlist for this party will be made by sahil' }
  ];

  // res.sendFile('./plain/about.html',{root:__dirname})
  res.render('about', { title: 'About', party })
  console.log('about page loaded');
})

//redirect
ap.get('/about-me', (req, res) => {
    
  //res.render('about', { title: 'About',party })
  res.redirect('/about');
  console.log('about-me page has been removed');
})

//404 page
//.use does not have hoistiing property so should be at bottom
ap.use((req, res) => {
  // res.status(404).sendFile('./plain/404.html',{root:__dirname})

  res.status(404).render('404')
  console.log('page not found');

})


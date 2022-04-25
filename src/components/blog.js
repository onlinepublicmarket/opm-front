import React from 'react'
import sub1 from '../assets/images/blog-1.jpg'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
const blog = () => {
  return (
    <div style={{fontFamily:"Montserrat"}}>
        <br />
        <div style={{textAlign:"center"}}>
        <h1>Filipino Chicken Adobo</h1>
        <br/>
        <div>
          <img  src={sub1} style={{width:"600px"}}/>
        </div>
        <br />
        <h2>Ingredients</h2>
        <p>
        <ol>2 tablespoons canola oil</ol>

        <ol>5 chicken drumsticks (about 1 3/4 pounds)</ol>

        <ol>5 bone-in chicken thighs (about 1 3/4 pounds)</ol>

        <ol>1 large yellow onion, quartered and sliced 1/4 inch thick</ol>

        <ol>8 cloves garlic, smashed</ol>
        <ol>
        5 bay leaves</ol>

        <ol>¼ teaspoon whole black peppercorns</ol>

        <ol>1 cup cane vinegar (see Tips) or unseasoned rice vinegar</ol>

        <ol>1 cup cane vinegar (see Tips) or unseasoned rice vinegar</ol>
        </p>
        </div>
        <hr></hr>
        <br />
        <div style={{textAlign:"center"}}><h2>Directions</h2>

        <p><b>Step 1</b> <br/> Heat oil in a large pot over medium heat until it starts to shimmer.<br/> Add drumsticks and cook until brown on all sides, 4 to 6 minutes.<br/>  Transfer to a plate. Add thighs to the pot and cook until browned,<br/>  about 3 minutes per side. Transfer to the plate with the drumsticks.</p>
        <br/> 
        <p><b>Step 2</b> <br/>  Add onion, garlic, bay leaves and peppercorns to the pot;<br/>  cook, stirring occasionally, until the garlic just begins to brown, <br/> about 3 minutes. Add vinegar and soy sauce and bring to a simmer, <br/> scraping up any browned bits. Return the chicken to the pot and turn to coat with the sauce.<br/>  Reduce heat to maintain a gentle simmer, cover and cook, stirring occasionally,<br/>  until the chicken is very tender, about 1 hour.</p>
        <br/> 
        <p><b>Step 3</b> <br/> Transfer the chicken to a clean plate and cover loosely with foil to keep warm.<br/>  Bring the sauce to a boil and cook, stirring often,<br/>  until reduced by about one-third, 3 to 5 minutes. <br/> Serve the chicken with the sauce.</p></div>
        <div style={{textAlign:"center"}}>
        <p><b>Tips </b><br/> Tips: Although cane vinegar is made from fermented sugarcane syrup,<br/> it's not sweet.  
It is fresh, light and less sharp than other vinegars.<br/> Find it at Asian markets or online.</p>
        </div>
        <br />
  <h5 style={{textAlign:"center"}}>The Link below has all the products that you can buy, one click all added to cart</h5><br/>
  <Link to="seller/marites-store"  className='btn btn-block btn-success' style={{backgroundColor:"#9CCC65"}}><h6 style={{textAlign:"center"}}>link to shop</h6></Link>
    </div>
  )
}

export default blog
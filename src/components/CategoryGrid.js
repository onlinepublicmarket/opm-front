import React from 'react'
import { Card } from 'antd';
import image1 from './../assets/images/MEATS.png';
import image2 from './../assets/images/SEAFOODS.png';
import image3 from './../assets/images/VEGETABLE.png';
import image4 from './../assets/images/FRUITS.png';
import image5 from './../assets/images/DAIRY.png';
import image6 from './../assets/images/SEASONINGS.png';
import { NodeExpandOutlined } from '@ant-design/icons';
const CategoryGrid = () => {
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
        border:'none',
      };
  return (
    <Card title="Featured Categories" style={{marginRight: "20px",
    marginLeft: "20px"}}>
        <Card.Grid style={gridStyle}>SEAFOODS<img  src={image2} style={{width:"50px"}} /></Card.Grid>
        <Card.Grid  style={gridStyle}>
      MEATS <img  src={image1} style={{width:"50px"}} />
    </Card.Grid>
    <Card.Grid style={gridStyle}>FRUITS<img  src={image4} style={{width:"50px"}} /></Card.Grid>
    <Card.Grid style={gridStyle}>DAIRY<img  src={image5} style={{width:"50px"}} /></Card.Grid>

    
    
    <Card.Grid style={gridStyle}>VEGETABLE<img  src={image3} style={{width:"50px"}} /></Card.Grid>
    
    <Card.Grid style={gridStyle}>INGREDIENTS<img  src={image6} style={{width:"50px"}} /></Card.Grid>
  </Card>
  )
}

export default CategoryGrid
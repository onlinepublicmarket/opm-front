import React from 'react'
import sub1 from '../assets/images/waj.png'
import sub2 from '../assets/images/pat.png'
import sub3 from '../assets/images/sher.png'
import { Menu, Badge } from "antd";
const AboutUs = () => {
  return (
    <div>
       <div class="wrapper">
  <h1>About Us</h1>
  <div class="team">
    <div class="team_member">
      <div class="team_img">
        <img src={sub2} />
      </div>
      <h3>Patrick G. Alpay</h3>
      <p class="role">Tester</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
    </div>
    <div class="team_member">
      <div class="team_img">
        <img src={sub1} />
      </div>
      <h3>Wajieha Z. Alih</h3>
      <p class="role">Programmer</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p></div>
    <div class="team_member">
      <div class="team_img">
        <img src={sub3} />
      </div>
      <h3>Sherwin P. Muloc</h3>
      <p class="role">UI Developer</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
    </div>
  </div>
</div>	

    </div>
  )
}

export default AboutUs
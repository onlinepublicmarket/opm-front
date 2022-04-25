import React from 'react'
import fq from './fq.css'
const faq = () => {
  return (
    <div>
         <section class="wrapper">
        <section class="container1">
            <div class="faq-descritpion">
                <h2 class="faq-header">Frequently Asked Question</h2>
                <p>These are the questions that are commonly asked with regards to our busines, hoping that would clear your doubts</p>
            </div>
        </section>
        <section class="container2">
            <div class="container-content2">
                <div class="accordion">
                    <div class="accordion-item" id="question1">
                        <a class="accordion-link" href="#question1">
                            What are the requirements to become a seller of OPM?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>Only legitimate businesses are allowed to be on the platform – tax-paying businesses. Food Panda will only require a scanned copy of the following documents uploaded to their website upon your registration:</p>
                            <ul class="list-req">
                                <li>Business Permit</li>
                                <li>DTI Certification</li>
                                <li>Valid Id of the Store</li>
                                <li>Halal Certificate</li>


                            </ul>
                        </div>
                    </div>
                    <div class="accordion-item" id="question2">
                        <a class="accordion-link" href="#question2">
                            Can I apply for a driver?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>Yes, everyone can apply as long as you have valid license, just follow the link how I become rider</p>
                        </div>
                    </div>
                    <div class="accordion-item" id="question3">
                        <a class="accordion-link" href="#question3">
                           I am just a partime seller, only few products I sell, and I don't have permits can I still apply?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>Yes, business permit are for the required seller, seller that needs to pay taxes. Part time seller are invited</p>
                        </div>
                    </div>
                    <div class="accordion-item" id="question4">
                        <a class="accordion-link" href="#question4">
                           Do I need to pay for something to become a seller?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>It will depend on what type of package you prefer, If you want free then  we have typical layout but limited storage. But if you want to have unlmited storage and customize shop then you need to pay</p>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    </section>
    </div>
  )
}

export default faq
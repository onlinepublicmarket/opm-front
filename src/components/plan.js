import React from 'react'
import p from './p.css'
import { Link } from 'react-router-dom'
const plan = () => {
  return (
    <div><div class="pricing-plan__container">
    <section class="pricing-plan">
        <div class="pricing-plan__header">
            <h1 class="pricing-plan__title">Basic</h1>
            <h2 class="pricing-plan__summary">For those Getting Started</h2>
        </div>
        <div class="pricing-plan__description">
            <ul class="pricing-plan__list">
                <li class="pricing-plan__feature">Shop</li>
                <li class="pricing-plan__feature">Seller Panel</li>
                <li class="pricing-plan__feature">Limited Storage</li>
            </ul>
        </div>
        <div class="pricing-plan__actions">
            <p class="pricing-plan__cost">&#8369; 0.00</p>
            <p class="pricing-plan__text">per month</p>
            <a  class="pricing-plan__button"><Link to="/thank-you">Purchase</Link></a>
            <p class="pricing-plan_text">This the free version, no payment needed</p>
        </div>
    </section>
    <section class="pricing-plan pricing-plan--highlighted">
        <div class="pricing-plan-special-text">Recommended</div>
        <div class="pricing-plan__header">
            <h1 class="pricing-plan__title">Standard</h1>
            <h2 class="pricing-plan__summary">For those who want upgrade</h2>
        </div>
        <div class="pricing-plan__description">
            <ul class="pricing-plan__list">
                <li class="pricing-plan__feature">Unlimited Storage</li>
                <li class="pricing-plan__feature">Customize Shop Design</li>
                <li class="pricing-plan__feature">Advertisement</li>
            </ul>
        </div>
        <div class="pricing-plan__actions">
            <p class="pricing-plan__cost">&#8369; 1500.00</p>
            <p class="pricing-plan__text">per month</p>
            <a  class="pricing-plan__button"><Link to="/thank-you">Purchase</Link></a>
            <p class="pricing-plan_text">Minimum spend &#8369; 1500.00 every month</p>
        </div>
    </section>
    <section class="pricing-plan">
        <div class="pricing-plan__header">
            <h1 class="pricing-plan__title">Premium</h1>
            <h2 class="pricing-plan__summary">For those who have big shop</h2>
        </div>
        <div class="pricing-plan__description">
            <ul class="pricing-plan__list">
                <li class="pricing-plan__feature">Unlimited Storage</li>
                <li class="pricing-plan__feature">Customize Shop Design</li>
                <li class="pricing-plan__feature">Advance Seller Panel</li>
                <li class="pricing-plan__feature">Regular Shop Advertisement</li>
                <li class="pricing-plan__feature">Shop Maintenace Support</li>
            </ul>
        </div>
        <div class="pricing-plan__actions">
            <p class="pricing-plan__cost">&#8369; 2500.00</p>
            <p class="pricing-plan__text">per month</p>
            <a class="pricing-plan__button"><Link to="/thank-you">Purchase</Link></a>
            <p class="pricing-plan_text">Minimum spend &#8369; 2500.00 every month</p>
        </div>
    </section>
</div></div>
  )
}

export default plan
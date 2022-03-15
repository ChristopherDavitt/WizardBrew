import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Background from '../assets/images/AlchemyHome.jpg'

export default class Home extends Component {
    

    
  
  
    render() {
    return (
      <div className='homePage' style={{
        backgroundImage: `url( ${Background} )`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '3rem'
      }}>
          <div className='leftSide' style={{
                color: 'yellow',
                maxWidth: '400px'
          }}>
                <h1>Welcome to Wizards Brew</h1>
                <h2>A FREE play-2-earn game</h2>
                <h4 style={{
                    maxWidth: '400px'
                }}>Take your wizard on quests to collect materials</h4>
                <h4>to brew an assortment of collectible potions</h4>
                <h3>PvP potion game Coming Soon!</h3>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <h3>Learn More</h3>
                    <button style={{
                        maxHeight: '30px'
                    }}>About</button>
                </div>
          </div>
          <div className='rightSide' style={{
                color: 'yellow',
                maxWidth: '400px'
          }}>
                <h1>Are you Ready!?</h1>
                <button style={{
                    minHeight: '40px',
                    maxHeight: '60px',
                    maxWidth: '400px',
                    backgroundColor: ''

                }}>Enter the Wizard World</button>
          </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

class MainPageBody extends Component {
  render() {
    return (
      <div className="body">
          <div className="bg"></div>
          <div className="bodyLeft">
      		  <div className="bodyLeftTextUp"> New Year Offer</div>
      		  <div className="bodyLeftTextDown"> 82% OFF <span className="bodyLeftTextDownNoColor">Web Hosting</span></div>
            <div className="counterBlock">
              <span className="arrowLeft"/>
              <span className="counter"><Countdown  date={Date.now() + 5000000000 } /></span>
              <span className="arrowRight"/>
             </div>
            <div>
      		  <a className="buttonGetStarted" href="#">GET STARTED NOW</a>
            </div>
      		</div>
          <div className="bodyRight">
          <div className="percentageRectangle">
            <div className="leftPercent">SAVE 82%</div>
            <div className="rectangle"></div>
          </div>
            <div className="leftOfRight">
      		    <div className="currency">$</div>
              <div className="numberBig">1</div>
            </div>
              <div className="rightOfRight">
                <div className="numberSmall">45</div>
                <div className="perMonth">/mo</div>
              </div>
          </div>
        
        <footer>
          <ul>
            <li><i class="fas fa-check"></i>
            Guaranteed 99.9% Uptime</li>
            <li><i class="fas fa-check"></i>
            Superior Speed Performance</li>
            <li><i class="fas fa-check"></i>
            24/7 Support Chat</li>
            <li><i class="fas fa-check"></i>
            30-Day Money-Back Guarantee</li>
          </ul> 
       
        </footer>  
      </div>
    );
  }
}

export default MainPageBody;

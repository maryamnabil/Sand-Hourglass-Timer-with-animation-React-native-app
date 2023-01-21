import React, { Component } from 'react';
import {WebView} from 'react-native-webview';

function Timerc({flag}) {
  let htmlViewed;
  const DURATION=50
  const htmlfixed=`
  <!DOCTYPE html>
  <html>
    <head>
    <style>

    .hourglass {
// animation: flip `+DURATION+`s ease-in-out infinite;
      border-bottom: solid 1vmin #630;
      border-top: solid 1vmin #630;
      left: 18%;
      margin-top: -60vmin;
      padding: 0 1vmin;
      position: fixed;
      top: 50%;
   }
    .hourglass .top, .hourglass .bottom {
      background: white;
      box-shadow: 0 0 1vmin 1vmin #bcd inset;
      height: 60vmin;
      overflow: hidden;
      position: relative;
      width: 60vmin;
   }
    .hourglass .top {
      border-radius: 0 0 50% 50%;
   }
    .hourglass .top:before {
      // animation: top `+DURATION+`s linear infinite;
      background-color: #fc6;
      border-radius: 50%;
      content: "";
      display: block;
      // height: 60vmin;
      left: 0;
      position: absolute;
      top: 0;
      transform: translateY(50%);
      width: 60vmin;
   }
    .hourglass .top:after {
      // animation: top-drip `+DURATION+`s linear infinite;
      background-color: #fc6;
      content: "";
      display: block;
      height: 100%;
      left: 45%;
      position: absolute;
      top: 0;
      transform: translateY(100%);
      width: 10%;
   }
    .hourglass .bottom {
      border-radius: 50% 50% 0 0;
   }
    .hourglass .bottom:before {
      // animation: bottom `+DURATION+`s linear infinite;
      background-color: #fc6;
      border-radius: 50%;
      content: "";
      display: block;
      height: 60vmin;
      left: 0;
      position: absolute;
      top: 0;
      transform: translateY(60%);
      width: 60vmin;
   }
    .hourglass .bottom:after {
      // animation: bottom-drip `+DURATION+`s linear infinite;
      background-color: #fc6;
      content: "";
      display: block;
      height: 100%;
      left: 45%;
      position: absolute;
      top: 0;
      // width: 10%;
   }
    @keyframes flip {
      0%, 45% {
        transform: rotate(0);
     }
      50%, 95% {
        transform: rotate(180deg);
     }
      100% {
        transform: rotate(360deg);
     }
   }
    @keyframes bottom {
      0% {
        transform: translateY(100%);
     }
      50% {
        transform: translateY(50%);
     }
      51% {
        transform: translateY(-50%);
     }
      100% {
        transform: translateY(-100%);
     }
   }
    @keyframes top {
      0% {
        transform: translateY(50%);
     }
      50% {
        transform: translateY(100%);
     }
      51% {
        transform: translateY(-100%);
     }
      100% {
        transform: translateY(-50%);
     }
   }
    @keyframes bottom-drip {
      0% {
        left: 45%;
        transform: translateY(-100%);
        width: 10%;
     }
      5% {
        transform: translateY(0);
     }
      45%, 100% {
        left: 50%;
        transform: translateY(0);
        width: 0;
     }
   }
    @keyframes top-drip {
      0%, 50% {
        left: 45%;
        transform: translateY(100%);
        width: 10%;
     }
      55% {
        left: 45%;
        transform: translateY(0);
        width: 10%;
     }
      100% {
        left: 50%;
        transform: translateY(0);
        width: 0;
     }
   }
    
    </style>
    </head>
    <body>
    <div class="hourglass">
    <div class="top"></div>
    <div class="bottom"></div>
  </div>
  </body>
  </html>
  `
  const htmlMoving=`
  <!DOCTYPE html>
  <html>
    <head>
    <style>

    .hourglass {
      animation: flip `+DURATION+`s ease-in-out 0.5;
      border-bottom: solid 1vmin #630;
      border-top: solid 1vmin #630;
      left: 18%;
      margin-top: -60vmin;
      padding: 0 1vmin;
      position: fixed;
      top: 50%;
   }
    .hourglass .top, .hourglass .bottom {
      // background: conic-gradient(
      //   from -45deg, 
      //   white 0deg, 
      //   #eaeaea 45deg,
      //   transparent 180deg,
      //   white 245deg
      // );
      background:white;  
      box-shadow: 0 0 1vmin 1vmin #bcd inset;
      height: 60vmin;
      overflow: hidden;
      position: relative;
      width: 62vmin;
   }
    .hourglass .top {
      border-radius: 0 0 50% 50%;
   }
    .hourglass .top:before {
      animation: top `+DURATION+`s linear 0.5;
      background-color: #fc6;
      border-radius: 35%;
      content: "";
      display: block;
      height: 60vmin;
      left: 1vmin;
      right:1vmin;
      position: absolute;
      top: 0;
      transform: translateY(100%);
      width: 60vmin;
   }
    .hourglass .top:after {
      animation: top-drip `+DURATION+`s linear 0.5;
      background-color: #fc6;
      content: "";
      display: block;
      height: 100%;
      left: 35%;
      position: absolute;
      top: 0;
      transform: translateY(100%);
      width: 10%;
   }
    .hourglass .bottom {
      border-radius: 50% 50% 0 0;
   }
    .hourglass .bottom:before {
      animation: bottom `+DURATION+`s linear 0.5;
      background-color: #fc6;
      border-radius: 35%;
      content: "";
      display: block;
      height: 60vmin;
      left: 1vmin;
      right:1vmin;
      position: absolute;
      top: 0;
      transform: translateY(50%);
      width: 60vmin;
   }
    .hourglass .bottom:after {
      animation: bottom-drip `+DURATION+`s linear 0.5;
      background-color: #fc6;
      content: "";
      display: block;
      height: 100%;
      left: 45%;
      position: absolute;
      top: 0;
      
   }
    @keyframes flip {
    //   0%, 45% {
    //     transform: rotate(0);
    //  }
    //   50%, 95% {
    //     transform: rotate(180deg);
    //  }
    //   100% {
    //     transform: rotate(360deg);
    //  }
   }
    @keyframes bottom {
      0% {
        transform: translateY(100%);
     }
      50% {
        transform: translateY(50%);
     }
      51% {
        transform: translateY(-50%);
     }
      100% {
        transform: translateY(-100%);
     }
   }
    @keyframes top {
      0% {
        transform: translateY(50%);
     }
      50% {
        transform: translateY(100%);
     }
      51% {
        transform: translateY(-100%);
     }
      100% {
        transform: translateY(-50%);
     }
   }
    @keyframes bottom-drip {
      0%,1.5% {
        left: 50%;
        transform: translateY(-100%);
        width: 2%;
     }
      1.5%,80%{
        transform: translateY(0);
        width: 2%;

     }
      95%, 100% {
        left: 50%;
        transform: translateY(-50%);
        width: 0;
     }
   }
    @keyframes top-drip {
    //   0%, 50% {
    //     left: 45%;
    //     transform: translateY(100%);
    //     width: 5%;
    //  }
    //   55% {
    //     left: 45%;
    //     transform: translateY(0);
    //     width: 5%;
    //  }
    //   100% {
    //     left: 50%;
    //     transform: translateY(0);
    //     width: 0;
    //  }
   }
    
    </style>
    </head>
    <body>
    <div class="hourglass">
    <div class="top"></div>
    <div class="bottom"></div>
  </div>
  </body>
  </html>
  `
  if(flag==false){
    htmlViewed=htmlfixed;
  } else {
    htmlViewed=htmlMoving
  }
    return (
    <WebView
        source={{html:htmlViewed}}
      />
  );
}

export default Timerc;

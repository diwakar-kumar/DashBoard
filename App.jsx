import React from 'react';

class App extends React.Component {
   render() {
      return (
      <div>
         <Header/>
         <div id="chart_div"></div>
         <div id="mySidenav" className="dashbord-sidenav">
            <div>
               <img src="resources/Notification.svg"></img>
               <span>About</span>
            </div>
              <div>
               <img src="resources/Notification.svg"></img>
               <span>About</span>
            </div>
            <div>
               <img src="resources/Notification.svg"></img>
               <span>About</span>
            </div>
         </div>
      </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div className = "dashbord-header">
            <SideBar/>
            <Button/>
            <Button/>
         </div>
      )
   }
}

class Button extends React.Component {
   render() {
      return (
         <button className = "btn-primary dashbord-button">
            <img src="resources/Notification.svg"></img>
         </button>
      )
   }
}

class SideBar extends React.Component {
  openNav() {
     var obj = document.getElementById("mySidenav");
     if(obj)
     {
         obj.style.display = 'block';
     }
  }

  closeNav() {
     var obj = document.getElementById("mySidenav");
     if(obj)
     {
         obj.style.display = 'none';
     }
  }

  toggleNav() {
     var obj = document.getElementById("mySidenav");
     if(obj.style.display === 'none') {
         obj.style.display = 'block';
     } else {
         obj.style.display = 'none';
     }
  }

   render() {
      return (
         <button className = "btn-primary dashbord-button" onClick={this.toggleNav}>
            <div className = "dashbord-sidebar">&#9776;</div>
         </button>
      )
   }
}
export default App;
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
               <div className="dashbord-nav-name">
                  <span>About</span>
               </div>
            </div>
              <div>
               <img src="resources/Notification.svg"></img>
               <div className="dashbord-nav-name">
                  <span>About</span>
               </div>
            </div>
            <div>
               <img src="resources/Notification.svg"></img>
               <div className="dashbord-nav-name">
                  <span>About</span>
               </div>
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
         <button className = "btn-primary dashbord-button right">
            <div>
              <img src="resources/msg.svg"></img>
              <div className="dashbord-button-notification">2</div>
            </div>
         </button>
      )
   }
}

class SideBar extends React.Component {
  openNav() {
      var obj = $("#mySidenav");
     if(obj)
     {
         obj.show("slow");
     }
  }

  closeNav() {
     var obj = $("#mySidenav");
     if(obj)
     {
         obj.hide("slow");
     }
  }

  toggleNav() {
     var obj = $("#mySidenav .dashbord-nav-name");
     if(obj)
     {
         obj.toggle("slow");;
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
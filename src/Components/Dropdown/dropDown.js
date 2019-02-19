import React from 'react';
class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown">
          <div className="menuBar1" onClick={this.showDropdownMenu}/>
          <div className="menuBar2" onClick={this.showDropdownMenu}/>
          <div className="menuBar3" onClick={this.showDropdownMenu}/>
         <div className="button" onClick={this.showDropdownMenu}></div>

          { this.state.displayMenu ? (
          <ul>
             <li><a href="#">WEB HOSTING</a></li>
             <li><a href="#">CLOUDHOSTING</a></li>
             <li><a href="#">VPS HOSTING</a></li>
             <li><a href="#">DOMAIN CHECKER</a></li>
             <li><a href="#">WEBSITE BUILDER</a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;
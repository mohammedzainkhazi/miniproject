import React, { Component } from "react";


class NavbarComp extends Component {

  render() {
    let isLogged = this.props.isLogged ? true : false;

    return (

      // <div bg="dark">

      // <div bg="primary" variant="light">
      //   <h3 href="#home" style={{ color: "black" }}>EHR Hospitals</h3>
      //     <div className="mr-auto">
      //       {}
      //     </div>
      //     <div inline>
      //       {}
      //       {isLogged?
      //       <button variant="outline-light" onClick={()=>this.props.onlogout()}>Logout</button>:<div></div>}
      //     </div>
      //   </div>
      // </div>

      <div bg="dark">

        <div bg="primary" variant="light" className="pt-3 pb-2 bg-indigo-600 flex justify-around items-center">
          <h4 href="#home" className="text-white">EHR Hospitals</h4><br />
          <div>
            {isLogged ?
              <button class="py-2 px-4  text-pink-100 transition-colors duration-150 bg-pink-600 rounded-full hover:bg-blue-700" variant="outline-light" onClick={() => this.props.onlogout()}>Logout</button> : <div></div>
            }
          </div>
        </div>
      </div>


    );
  }
}


export default NavbarComp;
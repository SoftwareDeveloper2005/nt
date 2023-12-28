import React, {useState} from 'react';
function Navbar(){
const [isDropdownOpen, setIsDropdownOpen] = useState({
    generalMenu: false,
    infoMenu: false,
    plansMenu: false,
    loginMenu: false
});
function handleDoubleClick(event) {
    const menuCategory = event.target.name;
    //identify which menu item was clicked
    //redirect to the appropriate page for double click (first in the submenu)
    //will enable this when pages created
    if(menuCategory === 'generalMenu'){
        setIsDropdownOpen({generalMenu: true});
        //window.location.href = '/index.html';
    }
    if (menuCategory === 'plansMenu'){
        setIsDropdownOpen({plansMenu: true});
        //window.location.href = '/plans/generate-a-plan';
    }
    if (menuCategory === 'loginMenu'){
        setIsDropdownOpen({loginMenu: true});
        //window.location.href = '/login';
    }
}
function handleMouseOver(event) {
    const menuCategory = event.target.name;
    //identify which menu item was clicked
    //show dropdown menu for that category
    if(menuCategory === 'generalMenu'){
        setIsDropdownOpen({generalMenu: true});
    } 
    if (menuCategory === 'infoBlog'){
        setIsDropdownOpen({infoMenu: true});
    }
    if (menuCategory === 'plansMenu'){
        setIsDropdownOpen({plansMenu: true});
    }
    if (menuCategory === 'loginMenu'){
        setIsDropdownOpen({loginMenu: true});
}    

    return(
    <nav>
        <div className="navWrapper"> 
        <div onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick} name="generalMenu" className="mainNavItem">
         <span className="leftNavItems">General</span>
         {
            isDropdownOpen.generalMenu && 
            <div className="dropdownMenu">
            <div name="about" className="dropdownItem">About</div>
            <div name="contact" className="dropdownItem">Contact</div>
            <div name="faq" className="dropdownItem">FAQ</div>
            <div name="infoBlog" onMouseOver={handleMouserOver} className="dropdownItem">Information & Blog</div>
            {isDropdownOpen.infoMenu ?
            <div className="dropdownMenu">
            <div name="mission" className="dropdownItem">Mission</div>
            <div name="vision" className="dropdownItem">Vision</div>
            <div name="policies" className="dropdownItem">Policies</div>
            <div name="vacancies" className="dropdownItem">Vacancies</div>
            <div name="testimonials" className="dropdownItem">Testimonials</div>
                </div> : null}
            <div name="store" className="dropdownItem">Our Store</div>
</div>
         }
        </div>
        <div onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick} name="plansMenu" className="mainNavItem">
           <span className="leftNavItems">Plans and Treatments</span> 
           {isDropdownOpen.plansMenu &&
           <div className="dropdownMenu">
            <div name="planGenerator" className="dropdownMenu"> Generate a plan</div>
           <div name="viewPlans" className="dropdownMenu">View Plans</div>
           <div name="furtherDetails" className="dropdownMenu">Further Details</div>
           <div name="apptScheduling" className="dropdownMenu">Appointment Scheduling</div>
            </div>
           }
        </div>
        <div onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick} name="loginMenu" className="mainNavItem">
        <span className="rightNavItems">Login/Signup</span>
            </div>
        </div>
    </nav>
    );
}
export default Navbar;

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
    }
    function handleClick(event){
        const name = event.target.name;
        //identify menu item was clicked
        //redirecting to that page but using filler text until pages created
        if (name === 'about'){
            window.location.href = '/about.html';
        }
    }
    //when these pages are created, will need to add the appropriate links
    return(
    <nav>
        <div className="navWrapper"> 
        <div onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick} name="generalMenu" className="mainNavItem">
         <span className="leftNavItems">General</span>
         {
            isDropdownOpen.generalMenu && 
            <div className="dropdownMenu">
            <div onClick={handleClick} name="about" className="dropdownItem">About</div>
            <div onClick={handleClick} name="contact" className="dropdownItem">Contact</div>
            <div onClick={handleClick} name="faq" className="dropdownItem">FAQ</div>
            <div onClick={handleClick} name="infoBlog" onMouseOver={handleMouserOver} className="dropdownItem">Information & Blog</div>
            {isDropdownOpen.infoMenu ?
            <div className="dropdownMenu">
            <div onClick={handleClick} name="mission" className="dropdownItem">Mission</div>
            <div onClick={handleClick} name="vision" className="dropdownItem">Vision</div>
            <div onClick={handleClick} name="policies" className="dropdownItem">Policies</div>
            <div onClick={handleClick} name="vacancies" className="dropdownItem">Vacancies</div>
            <div onClick={handleClick} name="testimonials" className="dropdownItem">Testimonials</div>
                </div> : null}
            <div name="store" className="dropdownItem">Our Store</div>
            </div>
         }
        </div>
        <div onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick} name="plansMenu" className="mainNavItem">
           <span className="leftNavItems">Plans and Treatments</span> 
           {isDropdownOpen.plansMenu &&
           <div className="dropdownMenu">
            <div onClick={handleClick}  name="planGenerator" className="dropdownMenu"> Generate a plan</div>
           <div onClick={handleClick} name="viewPlans" className="dropdownMenu">View Plans</div>
           <div onClick={handleClick} name="furtherDetails" className="dropdownMenu">Further Details</div>
           <div onClick={handleClick} name="apptScheduling" className="dropdownMenu">Appointment Scheduling</div>
            </div>
           }
        </div>
        <div onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick} name="loginMenu" className="mainNavItem">
        <span className="rightNavItems">Login/Signup</span>
        {isDropdownOpen.loginMenu &&
        <div className="dropdownMenu">
            <div onClick={handleClick} name="login" className="dropdownItem">Login</div>
            <div onClick={handleClick} name="signup" className="dropdownItem">Signup</div>
            <div onClick={handleClick} name="account" className="dropdownItem">My Account</div>
            </div>
        }
        </div>
        </div>
    </nav>
    );
}
export default Navbar;

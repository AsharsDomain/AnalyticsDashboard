import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
        <div className="main-title">
    <h3 className="heading-animation">AnalyticsDash</h3>
</div>

            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                     Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     Overview
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     Posts
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     Engagement
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     Audience 
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     Settings
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
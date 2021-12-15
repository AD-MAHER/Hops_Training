import React from 'react'

export default function Header() {
    return (
        <header  className="row">
     
        <div className="col-12 col-sm-12 col-md-6 header_left d-flex justify-content-center justify-content-md-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 450 75" width="160"
                height="27">
                <path fill="#fff" d="M.3.6H31.8v9.9H10.9V32.9H29.1v9.9H10.9V74.3H.3Z"></path>
                <path fill="#fff"
                    d="M46.6,18c0-12,9.1-18,17.7-18S82,6,82,18V57c0,12-9.1,18-17.7,18S46.6,69,46.6,57ZM57.2,57c0,5.1,3.3,7.5,7.1,7.5s7.2-2.4,7.2-7.5V18c0-5.1-3.3-7.5-7.2-7.5s-7.1,2.4-7.1,7.5Z">
                </path>
                <path fill="#fff"
                    d="M99,.6h17c12.5,0,18.6,7.4,18.6,21.7,0,8.5-2.4,14.7-9.1,18.4l11.4,33.7H125.7l-9.8-31.5h-6.3V74.4H99Zm10.6,33h6c7.4,0,8.5-4.1,8.5-11.5s-1.2-11.5-9-11.5h-5.5Z">
                </path>
                <path fill="#fff" d="M151.7.6h31.5v9.9H162.3V32.2h18.2v9.9H162.3V63.8h20.9V74.4H151.7Z"></path>
                <path fill="#fff" d="M221.1,74.4h-9.3L196.8.6H208l8.4,51.5h.2L225.1.6h11.2Z"></path>
                <path fill="#fff" d="M252,.6h31.5v9.9H262.6V32.2h18.2v9.9H262.6V63.8h20.9V74.4H252Z"></path>
                <path fill="#fff"
                    d="M299.8.6h17c12.5,0,18.6,7.4,18.6,21.7,0,8.5-2.4,14.7-9.1,18.4l11.4,33.7H326.5l-9.8-31.5h-6.3V74.4H299.8Zm10.6,33h6c7.4,0,8.5-4.1,8.5-11.5s-1.2-11.5-9-11.5h-5.5Z">
                </path>
                <path fill="#fff"
                    d="M384.3,64.4l19.1-35.9c1.9-3.6,1.9-5.7,1.9-9.7,0-3.7,0-8.2-5.2-8.2-3.1,0-5.2,1.9-5.2,5.3v6H384.3V16.1A16,16,0,0,1,400.2,0c11,0,15.6,8.7,15.6,18.5,0,7.2-.2,9-3.5,15.3L396.8,63.7h19.1V74.3H384.4V64.4Z">
                </path>
                <path fill="#fff" d="M439.4,11.8H428.8V.6H450V74.4H439.4Z"></path>
            </svg>
        </div>

        <div className="col-12 col-sm-12 col-md-6 header_right d-flex flex-row justify-content-center align-items-center">


            <ul className="d-flex flex-row">
                <li>
                    <div className="searchOnMenuWrapper" >

                        <input type="text" className="headerSearchInput" id="header_searchbar" placeholder="Search Products"/>
                        <div>
                            <img src="https://forever21.imgix.net/img/app/brands/forever21/homepage/mobile/searchIcon.svg"
                                 className="header_search_img"/>
                        </div>
                    </div>
                </li>
                <li> 
                     <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="25px"
                        height="25px" viewBox="0 0 28 28" version="1.1">
                        <defs></defs>
                        <g id="Artboard-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(3.000000, 3.000000)">
                                <ellipse class="fillColor" fill="#FFFFFF" cx="11" cy="7.98487713" rx="4"
                                    ry="3.99243856"></ellipse>
                                <path class="fillColor"
                                    d="M17.9941283,18.484765 C17.9941283,18.484765 18.4638832,22.2911153 11,22.2911153 C3.53611682,22.2911153 4.00587171,18.484765 4.00587171,18.484765 C4.00587171,15.6426901 7.13757094,13.3081285 11,13.3081285 C14.8624291,13.3081285 17.9941283,15.6426901 17.9941283,18.484765 Z"
                                    fill="white" fill-rule="nonzero"></path>
                                <ellipse class="fillStroke" stroke="#FFFFFF" stroke-width="1.5" cx="11" cy="11.3119093"
                                    rx="11" ry="10.979206"></ellipse>
                            </g>
                        </g>
                    </svg>
                    </li>
                <li>
                    <img src="https://forever21.imgix.net/img/app/brands/forever21/customersupport_mail.svg"
                        title="Contact us"
                        className=" b-error" alt="Mail" />
                </li>
                <li>
                   <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="25px"
                        height="25px" viewBox="0 0 28 28" version="1.1">
                        <defs></defs>
                        <g id="Artboard-3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path
                                d="M21.8072562,4.86440678 C20.9092971,4.30508475 19.9115646,4 18.814059,4 C16.8684807,4 15.1723356,4.96610169 14.0249433,6.49152542 C12.877551,4.96610169 11.1315193,4 9.23582766,4 C8.138322,4 7.14058957,4.30508475 6.24263039,4.86440678 C4.29705215,6.03389831 3,8.27118644 3,10.8644068 C3,11.6271186 3.09977324,12.3389831 3.29931973,13 C4.29705215,18.2881356 13.9750567,25 13.9750567,25 C13.9750567,25 23.6530612,18.3389831 24.7006803,13 C24.9002268,12.3389831 25,11.6271186 25,10.8644068 C25,8.27118644 23.7029478,6.03389831 21.8072562,4.86440678 Z"
                                id="Wishlist" stroke="#FFFFFF" stroke-width="1.6"></path>
                        </g>
                    </svg>


                </li>
                <li>
                     <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="25px"
                        height="25px" viewBox="0 0 28 28" version="1.1">
                        <g id="Artboard-6" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(3.000000, 3.000000)" fill-rule="nonzero">
                                <circle fill="#F0F0F0" cx="11.5" cy="11.5" r="11.5"></circle>
                                <path
                                    d="M11.5,0 C6.94069922,0 3.00123047,2.65331055 1.14110547,6.50001562 L21.8588496,6.50001562 C19.9987695,2.65331055 16.0592559,0 11.5,0 Z"
                                    fill="#FF9811"></path>
                                <path
                                    d="M11.5,23 C16.0592559,23 19.9987695,20.3466895 21.8588945,16.4999844 L1.14110547,16.4999844 C3.00123047,20.3466895 6.94069922,23 11.5,23 Z"
                                    fill="#6DA544"></path>
                                <circle fill="#0052B4" cx="11.5" cy="11.5" r="3.99997852"></circle>
                                <circle fill="#F0F0F0" cx="11.5" cy="11.5" r="2.49999219"></circle>
                                <polygon fill="#0052B4"
                                    points="11.5 8.41503516 12.2712637 10.1642031 14.1716387 9.95751758 13.0424824 11.5 14.1716387 13.0424824 12.2712637 12.8357969 11.5 14.5849648 10.7287363 12.8357969 8.82836133 13.0424375 9.95751758 11.5 8.82836133 9.95751758 10.7287363 10.1642031">
                                </polygon>
                            </g>
                        </g>
                    </svg> 
                </li>
            </ul>

        </div>
    

        
        </header>
    )
}

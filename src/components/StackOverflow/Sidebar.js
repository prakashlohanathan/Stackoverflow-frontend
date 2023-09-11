import React from "react";
import "./css/Sidebar.css";
 import { Link } from 'react-router-dom';


function Sidebar() {
  return (

    <div id="left-sidebar" data-is-here-when="md lg" className="left-sidebar js-pinned-left-sidebar ps-relative">
      <div className="left-sidebar--sticky-container js-sticky-leftnav">
        <nav role="navigation">
          <ol className="nav-links">
            <li className="ps-relative" aria-current="false">
              <Link to="/stackoverflow" className="pl8 js-gps-track nav-links--link" data-gps-track="top_nav.click({is_current: false, location:3, destination:8})" aria-controls="" data-controller="" data-s-popover-placement="right" aria-current="false" data-s-popover-auto-show="true" data-s-popover-hide-on-outside-click="never">
                <div className="d-flex ai-center">
                  <div className="flex--item truncate">
                    Home
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <ol className="nav-links">
                <li className="fs-fine tt-uppercase ml8 mt16 mb4 fc-light">Public</li>
                <li className="ps-relative  youarehere" aria-current="true">
                  <Link id="nav-questions" to="/stackoverflow" className="pl8 js-gps-track nav-links--link -link__with-icon" data-gps-track="top_nav.click({is_current: true, location:3, destination:1})" aria-controls="" data-controller="" data-s-popover-placement="right" aria-current="page" data-s-popover-auto-show="true" data-s-popover-hide-on-outside-click="never">
                    <svg aria-hidden="true" className="svg-icon iconGlobe" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path></svg>
                    <span className="-link--channel-name">Questions</span>
                  </Link>
                </li>
                <li className="ps-relative" aria-current="false">
                  <Link id="nav-tags" to="/stackoverflow" className=" js-gps-track nav-links--link" data-gps-track="top_nav.click({is_current: false, location:3, destination:2})" aria-controls="" data-controller="" data-s-popover-placement="right" aria-current="false" data-s-popover-auto-show="true" data-s-popover-hide-on-outside-click="never">
                    <div className="d-flex ai-center">
                      <div className="flex--item truncate">
                        Tags
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="ps-relative" aria-current="false">
                  <Link id="nav-users" to="/stackoverflow" className=" js-gps-track nav-links--link" data-gps-track="top_nav.click({is_current: false, location:3, destination:3})" aria-controls="" data-controller="" data-s-popover-placement="right" aria-current="false" data-s-popover-auto-show="true" data-s-popover-hide-on-outside-click="never">
                    <div className="d-flex ai-center">
                      <div className="flex--item truncate">
                        Users
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="ps-relative" aria-current="false">
                  <Link id="nav-companies" to="/stackoverflow" className=" js-gps-track nav-links--link" data-gps-track="top_nav.click({is_current: false, location:3, destination:12})" aria-controls="" data-controller="" data-s-popover-placement="right" aria-current="false" data-s-popover-auto-show="true" data-s-popover-hide-on-outside-click="never">
                    <div className="d-flex ai-center">
                      <div className="flex--item truncate">
                        Companies
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="ml8 mt16">
                  <div className="d-flex jc-space-between fl-grow1">
                    <div className="flex--item tt-uppercase tt-uppercase fs-fine fc-light">Collectives</div>
                    <div className="flex--item fs-fine fc-light">

                    </div>
                  </div>
                </li>
                <li className="ps-relative" aria-current="false">
                  <Link id="nav-collective-discover" to="/stackoverflow" className="pl8 ai-center js-collectives-navcta-toggle js-gps-track nav-links--link -link__with-icon" data-gps-track="top_nav.click({is_current: false, location:3, destination:18})" aria-controls="" data-controller="" data-s-popover-placement="right" aria-current="false" data-s-popover-auto-show="true" data-s-popover-hide-on-outside-click="never">
                    <svg aria-hidden="true" className="mt-auto fc-orange-400 svg-icon iconStarVerified" width="18" height="18" viewBox="0 0 18 18"><path d="M9.86.89a1.14 1.14 0 0 0-1.72 0l-.5.58c-.3.35-.79.48-1.23.33l-.72-.25a1.14 1.14 0 0 0-1.49.85l-.14.76c-.1.45-.45.8-.9.9l-.76.14c-.67.14-1.08.83-.85 1.49l.25.72c.15.44.02.92-.33 1.23l-.58.5a1.14 1.14 0 0 0 0 1.72l.58.5c.35.3.48.79.33 1.23l-.25.72c-.23.66.18 1.35.85 1.49l.76.14c.45.1.8.45.9.9l.14.76c.14.67.83 1.08 1.49.85l.72-.25c.44-.15.92-.02 1.23.33l.5.58c.46.52 1.26.52 1.72 0l.5-.58c.3-.35.79-.48 1.23-.33l.72.25c.66.23 1.35-.18 1.49-.85l.14-.76c.1-.45.45-.8.9-.9l.76-.14c.67-.14 1.08-.83.85-1.49l-.25-.72c-.15-.44-.02-.92.33-1.23l.58-.5c.52-.46.52-1.26 0-1.72l-.58-.5c-.35-.3-.48-.79-.33-1.23l.25-.72a1.14 1.14 0 0 0-.85-1.49l-.76-.14c-.45-.1-.8-.45-.9-.9l-.14-.76a1.14 1.14 0 0 0-1.49-.85l-.72.25c-.44.15-.92.02-1.23-.33l-.5-.58Zm-.49 2.67L10.6 6.6c.05.15.19.24.34.25l3.26.22c.36.03.5.48.23.71l-2.5 2.1a.4.4 0 0 0-.14.4l.8 3.16a.4.4 0 0 1-.6.44L9.2 12.13a.4.4 0 0 0-.42 0l-2.77 1.74a.4.4 0 0 1-.6-.44l.8-3.16a.4.4 0 0 0-.13-.4l-2.5-2.1a.4.4 0 0 1 .22-.7l3.26-.23a.4.4 0 0 0 .34-.25l1.22-3.03a.4.4 0 0 1 .74 0Z"></path></svg>            <span className="-link--channel-name">Explore Collectives</span>
                  </Link>
                </li>
              </ol>
            </li>
            <li className="js-freemium-cta ps-relative">
              <div className="fs-fine tt-uppercase ml8 mt16 mb8 fc-light">Teams</div>
              <div className="bt bl bb bc-black-075 p12 pb6 fc-black-600 blr-sm overflow-hidden">
                <strong className="fc-black-750 mb6">Stack Overflow for Teams</strong>
                &ndash; Start collaborating and sharing organizational knowledge.
                <img className="wmx100 mx-auto my8 h-auto d-block" width="139" height="114" src="images/teams-teams-illo-free-sidebar-promo.svg" alt="" />
                <Link to="/stackoverflow" className="w100 s-btn s-btn__primary s-btn__xs bg-orange-400 js-gps-track" data-gps-track="teams.create.left-sidenav.click({ Action: 6 })" data-ga='["teams left navigation - anonymous","left nav free cta","stackoverflow.com/teams/create/free",null,null]'>Create a free Team</Link>
                <Link to="/stackoverflow" className="w100 s-btn s-btn__muted s-btn__xs js-gps-track" data-gps-track="teams.create.left-sidenav.click({ Action: 5 })" data-ga='["teams left navigation - anonymous","left nav free cta","stackoverflow.com/teams",null,null]'>Why Teams?</Link>
              </div>
            </li>
            <li className="d-flex ai-center jc-space-between ml8 mt24 mb4 js-create-team-cta d-none">
              <div className="flex--item tt-uppercase fs-fine fc-light">Teams</div>
              <div className="flex--item">
              </div>
            </li>
            <li className="ps-relative js-create-team-cta d-none">
              <Link to="/stackoverflow" className="pl8 js-gps-track nav-links--link" title="Stack Overflow for Teams is a private, secure spot for your organization's questions and answers." data-gps-track="teams.create.left-sidenav.click({ Action: FreemiumTeamsCreateClick })" data-ga='["teams left navigation - anonymous","left nav team click","stackoverflow.com/teams/create/free",null,null]'>
                <div className="d-flex ai-center">
                  <div className="flex--item s-avatar va-middle bg-orange-400">
                    <div className="s-avatar--letter mtn1">
                      <svg aria-hidden="true" className="svg-icon iconBriefcaseSm" width="14" height="14" viewBox="0 0 14 14"><path d="M4 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 2 10.5v-5C2 4.67 2.67 4 3.5 4H4V3Zm5 1V3H5v1h4Z"></path></svg>
                    </div>
                    <svg aria-hidden="true" className="native s-avatar--badge svg-icon iconShieldXSm" width="9" height="10" viewBox="0 0 9 10"><path fill="var(--white)" d="M0 1.84 4.5 0 9 1.84v3.17C9 7.53 6.3 10 4.5 10 2.7 10 0 7.53 0 5.01V1.84Z"></path><path fill="var(--black-500)" d="M1 2.5 4.5 1 8 2.5v2.51C8 7.34 5.34 9 4.5 9 3.65 9 1 7.34 1 5.01V2.5Zm2.98 3.02L3.2 7h2.6l-.78-1.48a.4.4 0 0 1 .15-.38c.34-.24.73-.7.73-1.14 0-.71-.5-1.23-1.41-1.23-.92 0-1.39.52-1.39 1.23 0 .44.4.9.73 1.14.12.08.18.23.15.38Z"></path></svg>
                  </div>
                  <div className="flex--item pl6">
                    Create free Team
                  </div>
                </div>
              </Link>
            </li>
          </ol>
        </nav>
      </div>
     <div className="s-popover ws2" id="popover-discover-collectives" role="menu">
        <div className="s-popover--arrow"></div>
        <div>
          <svg aria-hidden="true" className="fc-orange-500 float-right ml24 svg-spot spotCollective" width="48" height="48" viewBox="0 0 48 48"><path d="M25.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM14 18.25c0-.69.56-1.25 1.25-1.25h22.5c.69 0 1.25.56 1.25 1.25V37.5a1 1 0 0 1-1.6.8l-4.07-3.05a1.25 1.25 0 0 0-.75-.25H15.25c-.69 0-1.25-.56-1.25-1.25v-15.5ZM7 24.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM25.5 48a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM48 24.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" opacity=".2"></path><path d="M21 3.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM24.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM0 23.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM3.5 22a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM21 44.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm3.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm20-23a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM43 23.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm-23.23-3.14a1 1 0 0 1-.13 1.4l-2.08 1.74 2.08 1.73a1 1 0 1 1-1.28 1.54l-2.42-2.02a1.63 1.63 0 0 1 0-2.5l2.42-2.02a1 1 0 0 1 1.4.13Zm7.59 1.41a1 1 0 1 1 1.28-1.54l2.42 2.02c.78.65.78 1.85 0 2.5l-2.42 2.02a1 1 0 1 1-1.28-1.54l2.08-1.73-2.08-1.73ZM24.12 18a1 1 0 0 1 .87 1.12l-1 8a1 1 0 1 1-1.98-.24l1-8a1 1 0 0 1 1.11-.87Zm-11.87-5C11.01 13 10 14 10 15.25v15.5c0 1.24 1 2.25 2.25 2.25h17.33c.06 0 .11.02.15.05l4.07 3.05a2 2 0 0 0 3.2-1.6V15.25c0-1.24-1-2.25-2.25-2.25h-22.5ZM12 15.25c0-.14.11-.25.25-.25h22.5c.14 0 .25.11.25.25V34.5l-4.07-3.05a2.2 2.2 0 0 0-1.35-.45H12.25a.25.25 0 0 1-.25-.25v-15.5Zm7.24-10.68a1 1 0 1 0-.48-1.94A22.04 22.04 0 0 0 2.91 17.7a1 1 0 1 0 1.92.58 20.04 20.04 0 0 1 14.4-13.72Zm11.05-1.66a1 1 0 0 0-.58 1.92c6.45 1.92 11.54 7 13.46 13.46a1 1 0 1 0 1.92-.58 22.05 22.05 0 0 0-14.8-14.8ZM4.57 28.76a1 1 0 0 0-1.94.48 22.03 22.03 0 0 0 16.13 16.13 1 1 0 1 0 .48-1.94A20.03 20.03 0 0 1 4.57 28.76Zm40.8.48a1 1 0 1 0-1.94-.48 20.04 20.04 0 0 1-13.72 14.41 1 1 0 0 0 .58 1.92 22.04 22.04 0 0 0 15.08-15.85Z"></path></svg>
          <h5 className="pt4 fw-bold">Collectives&trade; on Stack Overflow</h5>
          <p className="my16 fs-caption fc-medium">Find centralized, trusted content and collaborate around the technologies you use most.</p>
          <Link to="/stackoverflow" className="js-gps-track s-btn s-btn__primary s-btn__xs" data-gps-track="top_nav.click({is_current:false, location:3, destination:18})">
            Learn more about Collectives
          </Link>
        </div>
      </div>
      <div className="s-popover ws2" id="popover-teams-create-cta" role="menu" aria-hidden="true">
        <div className="s-popover--arrow"></div>
        <div className="ps-relative overflow-hidden">
          <p className="mb2"><strong>Teams</strong></p>
          <p className="mb12 fs-caption fc-black-400">Q&amp;A for work</p>
          <p className="mb12 fs-caption fc-medium">Connect and share knowledge within a single location that is structured and easy to search.</p>
          <Link to="/stackoverflow" className="js-gps-track s-btn s-btn__primary s-btn__xs" data-gps-track="teams.create.left-sidenav.click({ Action: CtaClick })" data-ga='["teams left navigation - anonymous","left nav cta","stackoverflow.com/teams",null,null]'>
            Learn more about Teams
          </Link>
        </div>
        <div className="ps-absolute t8 r8">
          <svg aria-hidden="true" className="fc-orange-500 svg-spot spotPeople" width="48" height="48" viewBox="0 0 48 48"><path d="M13.5 28a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM7 30a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v5h11v-5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H33v5a1 1 0 0 1-1 1H20a1 1 0 0 1-1-1v-5H8a1 1 0 0 1-1-1V30Zm25-6.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0ZM24.5 34a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" opacity=".2"></path><path d="M16.4 26.08A6 6 0 1 0 7.53 26C5.64 26.06 4 27.52 4 29.45V40a1 1 0 0 0 1 1h9a1 1 0 1 0 0-2h-4v-7a1 1 0 1 0-2 0v7H6v-9.55c0-.73.67-1.45 1.64-1.45H16a1 1 0 0 0 .4-1.92ZM12 18a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm16.47 14a6 6 0 1 0-8.94 0A3.6 3.6 0 0 0 16 35.5V46a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V35.5c0-1.94-1.64-3.42-3.53-3.5ZM20 28a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-.3 6h8.6c1 0 1.7.75 1.7 1.5V45h-2v-7a1 1 0 1 0-2 0v7h-4v-7a1 1 0 1 0-2 0v7h-2v-9.5c0-.75.7-1.5 1.7-1.5ZM42 22c0 1.54-.58 2.94-1.53 4A3.5 3.5 0 0 1 44 29.45V40a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h4v-7a1 1 0 1 1 2 0v7h2v-9.55A1.5 1.5 0 0 0 40.48 28H32a1 1 0 0 1-.4-1.92A6 6 0 1 1 42 22Zm-2 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"></path><g opacity=".35"><path d="M17 10a1 1 0 011-1h12a1 1 0 110 2H18a1 1 0 01-1-1Zm1-5a1 1 0 100 2h12a1 1 0 100-2H18ZM14 1a1 1 0 00-1 1v12a1 1 0 001 1h5.09l4.2 4.2a1 1 0 001.46-.04l3.7-4.16H34a1 1 0 001-1V2a1 1 0 00-1-1H14Zm1 12V3h18v10h-5a1 1 0 00-.75.34l-3.3 3.7-3.74-3.75a1 1 0 00-.71-.29H15Z"></path></g></svg>
        </div>
      </div>
    </div>

  );
}

export default Sidebar;
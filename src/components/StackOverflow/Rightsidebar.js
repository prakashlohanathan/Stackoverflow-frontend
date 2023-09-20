import React from 'react'
import { Link } from 'react-router-dom';

function Rightsidebar() {
    return (

        <div id="sidebar" role="complementary" aria-label="sidebar">
            <div id="hot-network-questions" className="module tex2jax_ignore">
                <h4>
                    <Link to="/stackoverflow" className="js-gps-track s-link s-link__inherit" data-gps-track="posts_hot_network.click({ item_type:1, location:9 })">
                        Hot Network Questions
                    </Link>
                </h4>
                <ul>
                    <li>
                        <div className="favicon favicon-english" title="English Language &amp; Usage Stack Exchange"></div>
                        <Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:97 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Prepositions in Relative Clauses: Placement Rules and Exceptions (during which)
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-math" title="Mathematics Stack Exchange"></div>
                        <Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:69 }); posts_hot_network.click({ item_type:2, location:9 })">
                            u-substitution shows 0=1
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-cooking" title="Seasoned Advice"></div>
                        <Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:49 }); posts_hot_network.click({ item_type:2, location:9 })">
                            How can I assure even heat distribution in a glass bundt pan with a closed tube?
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-history" title="History Stack Exchange"></div>
                        <Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:324 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Are these Polish WWI or WW2 uniforms? And any idea on the shorter gentleman's military decoration (cross?) on left shoulder?
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-softwareengineering" title="Software Engineering Stack Exchange"></div>
                        <Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:131 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Why and how to write clear code comments and when will documentations be needed beyond code commenting?
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-philosophy" title="Philosophy Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:265 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Is free will even experienced? If not, can this be evidence for epiphenomenalism?
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-pets" title="Pets Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:518 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Bovine colostrum for infant puppy
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-codereview" title="Code Review Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:196 }); posts_hot_network.click({ item_type:2, location:9 })">
                            O(nlogn) Lexicographically minimal rotation code but tle on this particular case
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-electronics" title="Electrical Engineering Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:135 }); posts_hot_network.click({ item_type:2, location:9 })">
                            What's a good way to assert in embedded microcontroller code?
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-philosophy" title="Philosophy Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:265 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Was Russell right in saying that skepticism is psychologically impossible?
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-electronics" title="Electrical Engineering Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:135 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Did a blown fuse in my multimeter damage my multimeter?
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-ell" title="English Language Learners Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:481 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Do the suffixes -ic and -ous have the same meaning?
                        </Link>

                    </li>
                    <li className="dno js-hidden">
                        <div className="favicon favicon-diy" title="Home Improvement Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:73 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Tandem breaker compatible?
                        </Link>

                    </li>
                    <li className="dno js-hidden">
                        <div className="favicon favicon-latin" title="Latin Language Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:644 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Did gendered nouns originate in Latin?
                        </Link>

                    </li>
                    <li className="dno js-hidden">
                        <div className="favicon favicon-codegolf" title="Code Golf Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:200 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Order by Earliest Lower Digit
                        </Link>

                    </li>
                    <li className="dno js-hidden">
                        <div className="favicon favicon-workplace" title="The Workplace Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:423 }); posts_hot_network.click({ item_type:2, location:9 })">
                            What can I call actions that seem to motivate employees to give gifts to a senior?
                        </Link>

                    </li>
                    <li className="dno js-hidden">
                        <div className="favicon favicon-latin" title="Latin Language Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:644 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Is Latin qui a descendant or predecessor of Persian &#1705;&#1607; (k&euml;)?
                        </Link>

                    </li>
                    <li className="dno js-hidden">
                        <div className="favicon favicon-electronics" title="Electrical Engineering Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:135 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Simple low power linear regulator for wide input voltage
                        </Link>

                    </li>
                    <li className="dno js-hidden">
                        <div className="favicon favicon-politics" title="Politics Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:475 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Was the U.S. surprised about the Huawei breakthrough, how much time did the government or think-tanks expect China to take to produce a 7nm chip?
                        </Link>

                    </li>
                    <li className="dno js-hidden">
                        <div className="favicon favicon-scifi" title="Science Fiction &amp; Fantasy Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:186 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Why didn't Sauron make his hand whole?
                        </Link>

                    </li>
                    <li className="dno js-hidden">
                        <div className="favicon favicon-travel" title="Travel Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:273 }); posts_hot_network.click({ item_type:2, location:9 })">
                            In which cities can one perform remote (e.g., in-town) airport check-in?
                        </Link>

                    </li>
                    <li className="dno js-hidden">
                        <div className="favicon favicon-retrocomputing" title="Retrocomputing Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:648 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Why does the Manchester Baby have two jump instructions?
                        </Link>

                    </li>
                    <li className="dno js-hidden">
                        <div className="favicon favicon-physics" title="Physics Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:151 }); posts_hot_network.click({ item_type:2, location:9 })">
                            How do you know mercury changes monotonically with temperature if mercury itself is used to make the thermometer?
                        </Link>

                    </li>
                    <li className="dno js-hidden">
                        <div className="favicon favicon-philosophy" title="Philosophy Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:265 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Is "may exist" and "may not exist" a negation that isn't a contradiction?
                        </Link>

                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Rightsidebar;
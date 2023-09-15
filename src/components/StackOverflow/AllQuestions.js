import React from 'react';
import './css/AllQuestions.css';
import { Link } from "react-router-dom"; 

function AllQuestions({ question }) {


    return (

        <div id="questions" className=" flush-left">
            <div id="question-summary-77061183" className="s-post-summary    js-post-summary" data-post-id="77061183" data-post-type-id="1">
                <div className="s-post-summary--stats js-post-summary-stats">
                    <div className="s-post-summary--stats-item s-post-summary--stats-item__emphasized" title="Score of 0">
                        <span className="s-post-summary--stats-item-number">0</span>
                        <span className="s-post-summary--stats-item-unit">votes</span>
                    </div>
                    <div className="s-post-summary--stats-item  " title="0 answers">
                        <span className="s-post-summary--stats-item-number">0</span>
                        <span className="s-post-summary--stats-item-unit">answers</span>
                    </div>
                    <div className="s-post-summary--stats-item " title="3 views">
                        <span className="s-post-summary--stats-item-number">3</span>
                        <span className="s-post-summary--stats-item-unit">views</span>
                    </div>
                </div>
                <div className="s-post-summary--content">
                    <h3 className="s-post-summary--content-title">
                        <Link to="/stackoverflow" className="s-link">{question?.title}</Link>
                    </h3>
                    <div className="s-post-summary--content-excerpt">
                        {question.body}
                    </div>
                    <div className="s-post-summary--meta">
                        <div className="s-post-summary--meta-tags d-inline-block tags js-tags t-java t-spring">

                            <ul className="ml0 list-ls-none js-post-tag-list-wrapper d-inline"><li className="d-inline mr4 js-post-tag-list-item">
                            <Link to="/stackoverflow" className="post-tag flex--item mt0 js-tagname-java" title="show questions tagged 'java'" aria-label="show questions tagged 'java'" rel="tag" aria-labelledby="tag-java-tooltip-container">React.js</Link>
                            </li><li className="d-inline mr4 js-post-tag-list-item">
                            <Link to="spring.html" className="post-tag flex--item mt0 js-tagname-spring" title="show questions tagged 'spring'" aria-label="show questions tagged 'spring'" rel="tag" aria-labelledby="tag-spring-tooltip-container">Node.js</Link></li></ul>
                        </div>
                        <div className="s-user-card s-user-card__minimal" aria-live="polite">

                            <Link to="/stackoverflow" className="s-avatar s-avatar__16 s-user-card--avatar" data-user-id="21237751">        <div className="gravatar-wrapper-16">
                                <img src="images/a-AEdFTp6xI2yuCNfGAMD2uzCDm-pjX3Uo-YTofNnKkx2_VA=k-s32" alt="Youssef Nafazaoui's user avatar" width="16" height="16" className="s-avatar--image" />
                            </div>
                            </Link>

                            <div className="s-user-card--info">
                                <div className="s-user-card--link d-flex gs4">
                                    <Link to="/stackoverflow" className="flex--item">{question.user}</Link>
                                </div>

                                <ul className="s-user-card--awards">
                                    <li className="s-user-card--rep"><span className="todo-no-class-here" title="reputation score " dir="ltr">1</span></li>
                                </ul>
                            </div>
                            <time className="s-user-card--time">asked <span title="2023-09-07 16:00:45Z" className="relativetime">56 secs ago</span></time>
                       </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AllQuestions;
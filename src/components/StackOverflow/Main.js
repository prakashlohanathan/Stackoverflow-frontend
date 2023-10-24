import React from "react";
import './css/Main.css';
import AllQuestions from "./AllQuestions";
import { Link } from "react-router-dom";


function Main({ questions }) {



  return (

    <div id="mainbar" role="main" aria-labelledby="h-all-questions">
      <div className="d-flex fw-wrap mb12">
        <h3 className="flex--item fl1 fs-headline1 mr12 mb12">All Questions</h3>
        <div className="aside-cta flex--item mb12 print:d-none">
        <Link to="/add-question">
              <button>Ask Question</button>
            </Link>
        </div>
      </div>
      <div data-controller="se-uql" data-se-uql-id="" data-se-uql-sanitize-tag-query="false">
        <div className="d-flex ai-center jc-space-between mb12 sm:fd-column sm:ai-stretch">
          <div className="fs-body3 flex--item fl1 mr12 sm:mr0 sm:mb12">
            {questions?.length}
            questions
          </div>
          <div className="uql-nav flex--item" data-action="se-uql-list:edit-current-requested@document-&gt;se-uql#toggleEditor">
            <div className="d-flex ai-center jc-space-between">
              <div className="js-uql-navigation s-btn-group flex--item mr16 ff-row-nowrap">
                <Link className="s-btn s-btn__muted s-btn__outlined s-btn__sm d-flex is-selected" data-nav-value="Newest" to="/stackoverflow" data-shortcut="N" aria-current="page">
                  <div className="flex--item">Newest</div>
                </Link>
                <Link className="s-btn s-btn__muted s-btn__outlined s-btn__sm d-flex" data-nav-value="Active" to="/stackoverflow" data-shortcut="A">
                  <div className="flex--item">Active</div>
                </Link>
                <Link className="s-btn s-btn__muted s-btn__outlined s-btn__sm d-flex uql-nav--expanded-item" data-nav-value="Bounties" to="/stackoverflow" data-shortcut="E">
                  <div className="flex--item">Bountied</div>
                  <div className="s-badge s-badge__bounty s-badge__bounty s-badge__sm lh-xs ml4 px4 flex--item">189</div>
                </Link>
                <Link className="s-btn s-btn__muted s-btn__outlined s-btn__sm d-flex uql-nav--expanded-item" data-nav-value="Unanswered" to="/stackoverflow" data-shortcut="U">
                  <div className="flex--item">Unanswered</div>
                </Link>
                <button className="s-btn s-btn__muted s-btn__outlined s-btn__sm s-btn__dropdown" >
                  More
                </button>
              </div>
              <div className="s-popover z-dropdown ws2 px0 py4" id="uql-more-popover" data-se-uql-target="morePopover">
                <div className="s-popover--arrow"></div>
                <ul className="s-menu js-uql-navigation" role="menu">
                  <li className=" uql-nav--collapsed-item" role="menuitem">
                  <Link to="/stackoverflow" className="s-block-link s-block-link__left" data-shortcut="">
                      Bountied
                      <span className="s-badge s-badge__bounty s-badge__bounty s-badge__sm lh-xs px4">189</span>
                    </Link>
                  </li>
                  <li className=" uql-nav--collapsed-item" role="menuitem">
                    <Link to="/stackoverflow" className="s-block-link s-block-link__left" data-shortcut="">
                      Unanswered
                    </Link>
                  </li>
                  <li role="menuitem">
                    <Link to ="/stackoverflow" className="s-block-link s-block-link__left" data-shortcut="F">
                      Frequent
                    </Link>
                  </li>
                  <li role="menuitem">
                    <Link to="/stackoverflow" className="s-block-link s-block-link__left" data-shortcut="V">
                      Score
                    </Link>
                  </li>
                  <li className="s-menu--divider" role="separator">
                  </li><li role="menuitem">
                    <span className="s-block-link c-default fc-black-350">Unanswered (my tags)</span>
                  </li>
                </ul>
              </div>
              <div className="flex--item">
                <button className="s-btn s-btn__filled s-btn__sm s-btn__icon ws-nowrap" >
                  <svg aria-hidden="true" className="svg-icon iconFilter" width="18" height="18" viewBox="0 0 18 18"><path d="M2 4h14v2H2V4Zm2 4h10v2H4V8Zm8 4H6v2h6v-2Z"></path></svg> Filter
                </button>
              </div>
            </div>
          </div>
        </div>
        <form className="s-expandable ps-relative z-active" id="uql-form" data-se-uql-target="form" data-action="se-uql#navigate">
         <div className="s-expandable--content">
            <div className="bg-black-050 ba bc-black-100 bar-sm mb16">
              <div className="px12 py16">
                <div className="d-flex gs32 fw-wrap">
                  <div className="flex--item">
                    <fieldset className="d-flex gs8 gsy fd-column">
                      <legend className="flex--item s-label px0">Filter by</legend>
                      <div className="flex--item">
                        <div className="d-flex gs4 gsx ai-center">
                        <label className="flex--item s-label fw-normal ws-nowrap" htmlFor="905c7cae-31fc-489d-82d8-ab3e39a6caa0" id="ed51b18c-0324-4a5e-88d4-705fba72244b">No answers</label>
                        </div>
                      </div>
                      <div className="flex--item">
                        <div className="d-flex gs4 gsx ai-center">
                        <label className="flex--item s-label fw-normal ws-nowrap" htmlFor="18d7a248-1033-4994-990d-5f691e94f274" id="087556ea-9616-42f0-a44d-b0d8e311ca36">No accepted answer</label>
                        </div>
                      </div>
                      <div className="flex--item">
                        <div className="d-flex gs4 gsx ai-center">
                          <div className="flex--item">
                          </div>
                          <label className="flex--item s-label fw-normal ws-nowrap" htmlFor="146e71f2-c7e1-4bdb-a9aa-e113a9e6484c" id="b7e017a1-6474-4247-951b-2eb057921af9">Has bounty</label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="flex--item">
                    <fieldset className="d-flex gs8 gsy fd-column">
                      <legend className="flex--item s-label px0">Sorted by</legend>
                      <div className="flex--item">
                        <div className="d-flex gs4 gsx ai-center">
                          <div className="flex--item">
                          </div>
                          <label className="flex--item s-label fw-normal ws-nowrap" htmlFor="cd90abf6-fd36-49a6-8bdb-3c1f7058e994" id="ebd7a694-e5be-483b-9f1b-09b2936a42c5">Newest</label>
                        </div>
                      </div>
                      <div className="flex--item">
                        <div className="d-flex gs4 gsx ai-center">
                          <div className="flex--item">
                          </div>
                          <label className="flex--item s-label fw-normal ws-nowrap" htmlFor="faf3dbc4-a1bd-4ada-b3f8-fbe2e62c5778" id="41fbac0f-61fa-430a-9e44-e8dd7b6a5aad">Recent activity</label>
                        </div>
                      </div>
                      <div className="flex--item">
                        <div className="d-flex gs4 gsx ai-center">
                          <div className="flex--item">
                         </div>
                          <label className="flex--item s-label fw-normal ws-nowrap" htmlFor="e6ce0bac-3feb-470c-b84c-06bf1a7fa743" id="a57e0919-55c7-4844-bf33-717a664c3094">Highest score</label>
                        </div>
                      </div>
                      <div className="flex--item">
                        <div className="d-flex gs4 gsx ai-center">
                          <div className="flex--item">
                          </div>
                          <label className="flex--item s-label fw-normal ws-nowrap" htmlFor="608375cd-3f1c-4e9c-b4fb-c000bbd6d5c8" id="88780688-99f0-4ece-aaa4-d31ff60f733e">Most frequent</label>
                        </div>
                      </div>
                      <div className="flex--item">
                        <div className="d-flex gs4 gsx ai-center">
                          <div className="flex--item">
                          </div>
                          <label className="flex--item s-label fw-normal ws-nowrap" htmlFor="5b5a250e-723e-43e1-9177-f0755229a8b3" id="3edab7fc-15a5-4fd8-bef4-4bb47a73d6a6">Bounty ending soon</label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="flex--item">
                    <fieldset className="d-flex gs8 gsy fd-column">
                      <legend className="flex--item s-label px0">Tagged with</legend>
                      <div className="flex--item">
                        <div className="d-flex gs4 gsx ai-center">
                          <div className="flex--item">
                          </div>
                          <label className="flex--item s-label fw-normal ws-nowrap" htmlFor="8f1cb4ab-68fe-4d70-a61d-47071c8a1a91" id="21ff9bb6-11ed-44fd-9e55-9983ada321aa">My watched tags</label>
                        </div>
                      </div>
                      <div className="flex--item">
                        <div className="d-flex gs4 gsx ai-center">
                          <div className="flex--item">
     
                          </div>
                          <label className="flex--item s-label fw-normal ws-nowrap" htmlFor="e96d9115-9f94-4170-9a53-cac82352998f" id="ba88df10-a8f9-4ad8-b7c2-aa87e7c24216">The following tags:</label>
                        </div>
                      </div>
                    </fieldset>
                   <div className="ps-relative ml24 mt8 ws2">
                  </div>
                  </div>
                </div>
              </div>
              <div className="p12 bt bc-black-100">
                <div className="d-flex">
                  <div className="d-flex gs4 gsx fl1">
                    <button className="s-btn s-btn__sm s-btn__primary flex--item" type="submit" data-se-uql-target="applyButton">Apply filter</button>
                  </div>
                  <div className="flex--item">
                    <button className="s-btn s-btn__sm" data-action="se-uql#cancelEditor" type="button">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div id="questions" className=" flush-left">
        <div>
          {<div className="questions">
            {questions.map((_id, index) => (
              <div key={index} className="question">
                <AllQuestions question={_id} />
              </div>
            ))}
          </div>}
        </div>
      </div>
      <br className="clear-both" />
      <div className="s-pagination site1 themed page-sizer float-right">
        <Link to ="/stackoverflow" title="Show 15 items per page" className="s-pagination--item is-selected" aria-current="true">15</Link>
        <Link to ="/stackoverflow" title="Show 30 items per page" className="s-pagination--item">30</Link>
        <Link to="/stackoverflow" title="Show 50 items per page" className="s-pagination--item">50</Link>
        <span className="s-pagination--item s-pagination--item__clear">per page</span>
      </div>
      <div className="s-pagination site1 themed pager float-left">
        <div className="s-pagination--item is-selected">1</div>
        <Link className="s-pagination--item js-pagination-item" to="/stackoverflow" rel="" title="Go to page 2">2</Link>
        <Link className="s-pagination--item js-pagination-item" to="/stackoverflow" rel="" title="Go to page 3">3</Link>
        <Link className="s-pagination--item js-pagination-item" to="/stackoverflow" title="Go to page 4">4</Link>
        <Link className="s-pagination--item js-pagination-item" to="/stackoverflow" title="Go to page 5">5</Link>
        <div className="s-pagination--item s-pagination--item__clear">&hellip;</div>
        <Link className="s-pagination--item js-pagination-item" to="/stackoverflow" rel="" title="Go to page 1593258">1593258</Link>
        <Link className="s-pagination--item js-pagination-item" to ="/stackoverflow" rel="next" title="Go to page 2"> Next</Link></div>
    </div>

  );
}

export default Main;



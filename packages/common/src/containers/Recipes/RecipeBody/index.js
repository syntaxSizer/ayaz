import React from 'react';
import {FeatureSectionWrapper, Summary} from './style';
 
const RecipeBody = ({post}) => {
    return (
        <div>
            <Summary>
                <div className="summary">
                    <span></span>
                    <div className="cooking-duration">
                        <span>35min</span>
                        <div className="sub-text">
                            <span>5 min preparation</span>
                        </div>
                    </div>
                    <div className="difficulty">
                        <span>Easy</span>
                    </div>
                    <div className="likes">
                     <span className="glyphicon glyphicon-heart" aria-label="Like"></span>
                     <span className="like-count">Try this recipe</span>
                    </div>
                </div>
            </Summary>
            <FeatureSectionWrapper>
                <div className="content" dangerouslySetInnerHTML={{__html: post.html}}/>
                <div className="purchase">
                    <div className="top">
                        <div className="price">
                            <div>
                                <span className="currency">Ksh </span>
                                <span className="price-per-portion">0<span className="decimals">00</span></span>
                            </div>
                            <div>
                                <span className="price-info">per serving</span>
                            </div>
                        </div>
                        <div className="actions">
                            <button className="btn-brand">ADD TO BASKET</button>
                        </div>
                    </div>

                </div>
            </FeatureSectionWrapper>
        </div>
    );
}

export default RecipeBody;
import React from 'react'
import { IoStarSharp } from "react-icons/io5";

const Review = () => {
return (
    <div class='mt-5'>
        <h2 class='review-h2'>What Our Students Say</h2>
        <div class=''>
            <div class='row mt-5 d-flex justify-content-center'>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 pe-4 test ms-5 me-5 mt-3 p-3">
                    <p>CodeTech Learn transformed my understanding of programming, and now I feel confident to tackle real-world projects.</p>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <p class='review-name'>Rajesh Kumar</p>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 pe-4 test ms-5 me-5 mt-3 p-3">
                    <p>The designing course was insightful and practical, helping me develop my skills to pursue a career in UI/UX Design.</p>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <p class='review-name'>Aneta Merlin</p>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 pe-4 test ms-5 me-5 mt-3 p-3">
                    <p>I had a fantastic learning experience at CodeTech Learn. The instructors were supportive and knowledgeable throughout.</p>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <p class='review-name'>shweta</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Review
'use client'
import React, { useEffect } from 'react'

const HorizontalScroll = () => {


    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
    
        // If a user hasn't opted in for reduced motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          addAnimation();
        }
    
        function addAnimation() {
          scrollers.forEach((scroller: Element) => {
            // add data-animated="true" to every `.scroller` on the page
            scroller.setAttribute("data-animated", "true");
    
            // Make an array from the elements within `.scroller-inner`
            const scrollerInner = scroller.querySelector(".scroller__inner") as HTMLElement;
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
              const duplicatedItem = (item as HTMLElement).cloneNode(true) as HTMLElement;
              duplicatedItem.setAttribute("aria-hidden", "true");
              scrollerInner.appendChild(duplicatedItem);
            });
          });
        }
      }, []);

  return (
      <div className="scroller w-[21rem] smMinus:w-[24rem] sm:w-[29rem] md:w-[36rem]  max-w-[50rem]" data-speed="fast">
  <ul className="tag-list scroller__inner">
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    <li>webdev</li>
    <li>animation</li>
    <li>UI/UX</li>
  </ul>
</div>
  )
}

export default HorizontalScroll
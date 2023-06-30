import { useState, useRef } from "react";

function RenderButton(data) {
  const [currentTab, setCurrentTab] = useState(0);
  const ref = useRef(null);

  const handleTabClick = (e) => {
    setCurrentTab(data.index);
  }

  //  console.log(currentTab);

  /*const handleTabClick2 = (e) => {
    const targetTab = e.target;
    //const targetPanel = targetTab.getAttribute("aria-controls");
    //const targetImage = targetTab.getAttribute("data-image");
    //console.log(targetTab);
    const tabButton = targetTab.parentNode;
    //const tabContainer = tabButton.parentNode;
    //const mainContainer = tabContainer.parentNode;

    const ariaSelected = tabButton.getAttribute("aria-selected");
        if (ariaSelected === "false") {
          tabButton.setAttribute("aria-selected", true);
        } else {
          tabButton.setAttribute("aria-selected", false);
        }

    //hideContent(mainContainer, '[role="tabpanel"]');
    //showContent(mainContainer, [`#${targetPanel}`]);

    //hideContent(mainContainer, 'picture');
    //showContent(mainContainer, [`#${targetImage}`]);
  }*/

function hideContent(parent, content) {
    parent
        .querySelectorAll(content)
        .forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
    parent.querySelector(content).removeAttribute('hidden');
}

  return (
    <button key={data.index} 
      aria-selected={(currentTab === data.index)?true:false}
      aria-controls={data.id + "-tab"} 
      role="tab" 
      tabIndex={data.index} 
      data-image={data.id + "-image"} 
      onClick={handleTabClick}
      >{data.text1}<span className={data.class}>{data.text2}</span></button>
  )
}

export const Indicator = (props) => {
  return(<>
    { props.data.map((data, i) => {

      if (props.page == 'destination') {

        return <RenderButton key={i} index={i} id={data.id} name={data.name} 
          class='uppercase ff-sans-cond text-accent letter-spacing-2'
          text1=''
          text2={data.name} />

      } else if (props.page == 'crew') {

        return <RenderButton key={i} index={i} id={data.id} name={data.name} 
          class="sr-only"
          text1=''
          text2={'The ' + data.role.toString().toLowerCase()} />

      } else { //technology

        return <RenderButton key={i} index={i} id={data.id} name={data.name} 
          class="sr-only"
          text1={i+1}
          text2={data.name} />
      }
    })
    }
  </>)
}

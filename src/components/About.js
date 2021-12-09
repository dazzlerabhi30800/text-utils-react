import React, {useState} from 'react'

export default function About(props) {

    const [myStyle, setMyStyle]  = useState({
        color : 'black',
        backgroundColor : 'white',
        border : '2px solid white'
    })

    const [btnText, setBtnText] = useState("Enable Light Mode")

    const toggleStyle = () => {
        if(myStyle.color === 'white'){
            setMyStyle({
                color : 'black',
                backgroundColor : 'white',
                border : '1px solid black'
            })
            setBtnText("Enable Dark Mode")
        }
       
      
        else{
            setMyStyle({
                color : 'white',
                backgroundColor : '#13013d',
                border : '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
    }


     
    return (
        <div className="container mt-4" style={myStyle}>
            <h1 className="my-3">About us</h1>
            <div class="accordion my-1" id="accordionExample">
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header" id="headingOne">
      <button style={myStyle} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header" id="headingTwo">
      <button style={myStyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header" id="headingThree">
      <button style={myStyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
        <div className="container my-3">
            <button type="button" onClick={toggleStyle} className="btn btn-warning mb-2">{btnText}</button>
        </div>
</div>
    )
}
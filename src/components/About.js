
import React from 'react'

export default function About(props) {
    // const [mystyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white'
    // });

    let mystyle = {
      color: props.mode==="dark"?"white":"rgb(46 59 78)",
      backgroundColor: props.mode==="dark"?"rgb(46 59 78)":"white"
    }

    // const [btntext, setBtnText] = useState("Enable dark mode");

    
    // const toggleStyle = () =>{
    //     if(mystyle.color === 'black'){
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor : 'black',
    //             border : '1px solid white'
    //         })
    //         setBtnText("Enable light mode");
            
    //     }
    //     else{
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor : 'white'
    //         })
    //         setBtnText("Enable dark mode");
    //     }
    // }

  return (
    <div className='container'>
        <h1 className='my-3' style={{backgroundColor: props.mode==="dark"?"#292b2e":"white",color: props.mode==="dark"?"white":"rgb(46 59 78)"}}>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong> Analyze Your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or.

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        This word counter software works in any web browsers such as Chrome, Firebox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, excel document, pdf documents, essays, etc.
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3">
    <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
</div> */}
    </div>
  )
}

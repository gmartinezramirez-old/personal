import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import '../css/styleGraph.css';
import Draggable from 'react-draggable'; // The default
import { StyleSheet, css } from 'aphrodite';
import FinderIcon from '../images/finderReturnIcon.png';
import TrashIconEmpty from '../images/trashIconEmptySmall.png';
import TrashIconFilled from '../images/trashIconFilledSmall.png';


function Icon1(props) {

  return (
    <div>

      <div className="Icon1" style ={{backgroundImage: `url(${FinderIcon})`}} onClick={props.onClick}> </div>
    </div>
  );
}

function Icon2(props) {
  if (props.trash == 0) {
    return(
      <div className="Icon1" style ={{backgroundImage: `url(${TrashIconEmpty})`}} onClick={props.onClick}> </div>

    );

  } else {
    return(

      <div className="Icon1" style ={{backgroundImage: `url(${TrashIconFilled})`}} onClick={props.onClick}> </div>

  );

}
}

function IconBackground(props) {
  return (
    <div className={css(styles.backgroundIcon)}>

    </div>
  );
}

class FooterDisplay extends Component {
  render() {
    return(
      // <Draggable>
          <div id="footer">
            <div id="bottomText">
              <p>Footer</p>
            </div>
          </div>
        // {/* </Draggable> */}
    );
  }
}

const styles = StyleSheet.create({
  backgroundIcon: {
    marginTop: "-6px",
    marginLeft: "-10px",

    zIndex: "-1",
    position: "absolute",
    width: "120px",
    height: "56px",
    backgroundColor: "#444444",
    opacity: "0.85",
    borderRadius: "5px",

    // ':hover': {
    //   marginTop: "-10px",
    //   marginLeft: "-20px",
    //
    //   zIndex: "-1",
    //   position: "absolute",
    //   width: "200px",
    //   height: "100px",
    //   backgroundColor: "#FFFFFF",
    //   opacity: "0.85",
    //   borderRadius: "10px",
    // }

  },


  Icon2Empty: {
    margin: "5px",
    height: '40px',
    width: '40px',
    float: 'left',
    backgroundImage: `url(${TrashIconEmpty})`,
    backgroundSize: "cover",
  },

  IconHighlight: {
    position: "absolute",
    height: '50px',
    width: '50px',
    ':hover': {
      // zIndex: "-1",
      // backgroundColor:"#CCCCCC",
    }

  },
  hover2: {

    // ':hover .backIcons': {
    //
    //     backgroundColor: 'red'
    // }
  },
})

export default FooterDisplay;

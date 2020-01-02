import React, { Component } from 'react';
import { Button } from 'reactstrap';
import classnames from 'classnames';
import './MoreDetails.css';
class MoreDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedID: null,
      MoreDetails: [
        {
          id: "1",
          lessonIcon: "",
          NoOfLessons: "19 LESSONS",
          exclusiveIcon: "",
          exclusivePercentage: "100% EXCLUSIVE",
          lessonHint: "LESSON HINT of SIMONE BILES",
          exclusiveHint: "Exclusive hint of SIMONE BILES ",
          src:"../../images/SIMONE BILES.jpg",
          altText: 'first author',
          ImgSource:""
        },
        {
          id: "2",
          lessonIcon: "",
          NoOfLessons: "17 LESSONS",
          exclusiveIcon: "",
          exclusivePercentage: "100% EXCLUSIVE",
          lessonHint: "LESSON HINT of MASSIMO BOTTURA",
          exclusiveHint: "Exclusive hint of MASSIMO BOTTURA",
          src:"../../images/MASSIMO BOTTURA.jpg",
          altText: 'second author',
          ImgSource:""
        },
        {
          id: "3",
          lessonIcon: "",
          NoOfLessons: "13 LESSONS",
          exclusiveIcon: `<i class="fal fa-hat-chef"></i>`,
          exclusivePercentage: "100% EXCLUSIVE",
          lessonHint: "500$",
          exclusiveHint: "Exclusive hint of WOLFGANG PUCK",
          src:"../../images/WOLFGANG PUCK.jpg",
          altText: 'third author',
          ImgSource:""
        }
      ],
      selectedItem: {}
    }
  }

  componentDidMount() {
   
    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);
    let selectedItem = this.state.MoreDetails.find((item) => item.id == id)
    this.setState({
      selectedID: id,
      selectedItem: selectedItem
      
    })

  }

  render() {
   
    
     let backgroundImage = classnames('writerImage',{ SIMONEBILES: true , MASSIMO_BOTTURA: this.state.selectedItem.id == 2, WOLFGANG_PUCK: this.state.selectedItem.id == 3  }); 
     let exclusiveFontAwesomeIcon = classnames({
      'fas fa-trophy fa-4x': this.state.selectedItem.id == 1,
      'fas fa-book-open fa-3x': this.state.selectedItem.id == 2,
      'fas fa-dollar-sign fa-3x': this.state.selectedItem.id == 3
      });
      let lessonFontAwesomeIcon = classnames({
        'fas fa-futbol fa-3x': this.state.selectedItem.id == 1,
        'fas fa-pen fa-3x': this.state.selectedItem.id == 2,
        'fas fa-dollar-sign fa-3x': this.state.selectedItem.id == 3
        });
     let { selectedItem } = this.state;
    return (
      
      
      <div className="MoreDetails">
      <div className={backgroundImage} ></div>

      <div className="MoreDetail" >
        <div className="camera">
          <i className={lessonFontAwesomeIcon}></i><br />
          <div className="lessonNo">{selectedItem.NoOfLessons}</div>
          <div className="lessonHint">{selectedItem.lessonHint}</div>
        </div>


        <div className="cup">
        <i className={exclusiveFontAwesomeIcon}></i><br />
          <div className="exclusivePercentage">{selectedItem.exclusivePercentage}</div>
          <div className="exclusiveHint">{selectedItem.exclusiveHint}</div>
        </div>


        <div className="getstarted">
          <div>Get started now</div><br />
          <Button color="danger" size="lg" block> GET STARTED </Button>
          <div className="price" >Price</div>
          <div className="or">OR</div>
          <div className="buttons">
            <Button className="button1" color="secondary" size="lg" > SINGLE CLASS </Button>{" "}
            <Button className="button2" color="danger" size="lg" > GIFT </Button>
          </div>
        </div>
        </div>

      </div>
    )

  }

}

export default MoreDetails;


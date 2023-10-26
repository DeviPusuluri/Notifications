const Notification = props => {
  //  Write your code here.
  const {className,boxText,imageUrl}=props;
  return {
      <li className={className}>
<img src={imageUrl} alt="image"/>
<p>{boxText}</p>
      </li>
  }
}

const element = (
  //  Write your code here.   
  <div>
      <h1>Notifications</h1>
      <ul>
          <Notification
            className="box1"
            imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
            boxText="Information Message"
          />
          <Notification
            className="box2"
            imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            boxText="Success Message"
          />
          <Notification
            className="box3"
            imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
            boxText="Warning Message"
          />
          <Notification
            className="box4"
            imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
            boxText="Error Message"
          />
      </ul>

  </div>
)

ReactDOM.render(element, document.getElementById('root'))

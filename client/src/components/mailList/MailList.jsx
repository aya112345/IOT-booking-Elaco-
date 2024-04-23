import "./MailList.css"

const MailList = () => {
  
  return (
    <div className="mail">
      <h1 className="mailTitle">Join and get amazing discount</h1>
      <span className="mailDesc">Step into a world of comfort and inspiration in our remarkable space, where every corner is designed to fuel your motivation.
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
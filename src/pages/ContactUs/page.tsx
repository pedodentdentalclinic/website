import "./page.css";

export default function ContactUs() {
  return (
    <div className="contact-us">
      <form className="form">
        <div>
          <h1>Contact Us</h1>
          <p>
            At our practice, your family's dental health is our top priority.
            Whether you have questions, need to schedule an appointment, or just
            want to say hello, we’d love to hear from you!
          </p>
        </div>
        <div className="form-input">
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            name="full-name"
            id="full-name"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="btn">Submit</button>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3939.7189548028127!2d7.4297485!3d9.0893469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0d2813fa1da7%3A0xaa61e20e0a49332e!2sPedodent%20Dental%20Clinic!5e0!3m2!1sen!2sng!4v1771490050281!5m2!1sen!2sng"
        style={{
          border: 0,
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>{" "}
    </div>
  );
}

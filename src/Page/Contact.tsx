import'./Contact.css'

export const Contact = () => {
  return (
    <div>
      {" "}
      <div className="contact-container">
        <h1>ติดต่อเรา</h1>
        <form className="contact-form">
          <label htmlFor="name">ชื่อ นามสกุล</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />

          <label htmlFor="email">อีเมล</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />

          <label htmlFor="message">ข้อความ:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">ส่ง</button>
        </form>
      </div>
    </div>
  );
};

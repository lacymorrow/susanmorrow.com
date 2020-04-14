const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:susan@susanmorrow.us">susan@susanmorrow.us</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(704) 332-5153</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <a href="https://www.google.com/maps/place/1018+East+Blvd+STE+2,+Charlotte,+NC+28203/@35.2040516,-80.8503501,17z/data=!3m1!4b1!4m5!3m4!1s0x88569f9bf27f9a55:0x79aac268eabfd541!8m2!3d35.2040516!4d-80.8481614">1018 East Blvd, Suite 2<br />
                        Charlotte, NC 28203</a>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact

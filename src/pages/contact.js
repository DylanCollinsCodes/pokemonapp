import '../style/contact.css'
  
const Contact = () => {
  return (
    <div id="contactBox">
    	<form name="contact" method="post" data-netlify="true" action="/">
			<input type="hidden" name="form-name" value="contact"/>
			<div>
            	<div className='inputBoxes'>
              		<div className='halfField'>
		  				<label className='fullField' for="name">Name</label>
		  				<input className='fullField seeThrough needsBorder' type="text" name="name" id="name" placeholder="Type your name"/>
					</div>
					<div className='halfField'>
						<label className='fullField' for="email">Email</label>
						<input className='fullField seeThrough needsBorder' type="text" name="email" placeholder="Type your email"/>
					</div>
            	</div>
				<div className='messageInputDiv'>
					<label className='messageName' for="message">Message</label>
					<textarea className='fullField messageText seeThrough' name="message" rows="4" placeholder="Put your message here"></textarea>
				</div>
			</div>
				<ul id="formList">
					<li><input className='formButton one' type="submit" value="Send Message"/></li>
					<li><input className='formButton two' type="reset" value="Reset"/></li>
				</ul>
		</form>
    </div>
  );
};
  
export default Contact;
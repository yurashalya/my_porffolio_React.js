import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
	render() {
		return(
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{ textAlign: 'center'}}>
							<img
			                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
			                alt="avatar"
			                style={{height: '200px'}}
			                 />
						</div>

						<h2 style={{paddingTop: '2em'}}>Shalya Yura</h2>
						<h4 style={{color: 'grey'}}>Web Developer</h4>
						<hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
						<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
						 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
						 as opposed to using 'Content here, content here', making it look like readable English.
						 </p>
						 <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
						 <h5>Address</h5>
						 <p>Kharkiv city,National Technical University "Kharkiv Polytechnic Institute". </p>
						 <h5>Phone</h5>
						 <p>(+380) 123-4560</p>
						 <h5>Email</h5>
						 <p>shalya_yura@gmail.com</p>
						 <h5>Web</h5>
						 <p>mywebsite.com</p>
						 <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>

					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>

							<Education
								startYear={2003}
								endYear={2013}
								schoolName='School'
								schoolDesctiption="Contrary to popular belief, Lorem Ipsum is not simply random text. 
								It has roots in a piece of classical Latin literature from 45 BC, 
								making it over 2000 years old."
							/>

							<Education
								startYear={2013}
								endYear={2019}
								schoolName='My University'
								schoolDesctiption="Contrary to popular belief, Lorem Ipsum is not simply random text. 
								It has roots in a piece of classical Latin literature from 45 BC, 
								making it over 2000 years old."
							/>

							<hr style={{borderTop: '3px solid #e22947'}} />

							<h2>Experience</h2>

							<Experience 
								startYear={1234}
								endYear={1234}
								jobName="First Job"
								jobDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. 
								It has roots in a piece of classical Latin literature from 45 BC, 
								making it over 2000 years old."
							/>

							<Experience 
								startYear={2015}
								endYear={2016}
								jobName="Second Job"
								jobDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. 
								It has roots in a piece of classical Latin literature from 45 BC, 
								making it over 2000 years old."
							/>

							<hr style={{borderTop: '3px solid #e22947'}} />
								<h2>Skills</h2>
								<Skills
					                skill="javascript"
					                progress={60}
					                />
					             <Skills
					                skill="HTML/CSS"
					                progress={80}
					                />
					             <Skills
					                skill="NodeJS"
					                progress={40}
					                />
					             <Skills
					                 skill="React"
					                 progress={30}
					                 />
					              <Skills
					                 skill="Smart Grid"
					                 progress={55}
					                 />



					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume; 
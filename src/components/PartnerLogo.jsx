import React from 'react'
import { Link } from "react-router-dom";

export default function PartnerLogo() {
  return (
    <>
    <div className="partner-logo section-padding">
			<div className="partner_overlay">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="partner  wow fadeInRight">
						    	<Link to="#"><img src="assets/img/partner/1.png" alt="partner1"/></Link>
								<Link to="#"><img src="assets/img/partner/2.png" alt="partner2"/></Link>
								<Link to="#"><img src="assets/img/partner/3.png" alt="partner3"/></Link>
								<Link to="#"><img src="assets/img/partner/4.png" alt="partner4"/></Link>
								<Link to="#"><img src="assets/img/partner/5.png" alt="partner5"/></Link>
								<Link to="#"><img src="assets/img/partner/6.png" alt="partne6"/></Link>
								<Link to="#"><img src="assets/img/partner/1.png" alt="partner7"/></Link>
								<Link to="#"><img src="assets/img/partner/2.png" alt="partner8"/></Link>
								<Link to="#"><img src="assets/img/partner/3.png" alt="partner9"/></Link>
								<Link to="#"><img src="assets/img/partner/4.png" alt="partner10"/></Link>
								<Link to="#"><img src="assets/img/partner/5.png" alt="partner11"/></Link>
								<Link to="#"><img src="assets/img/partner/6.png" alt="partner12"/></Link>
							</div>
						</div>{/* END COL  */}
					</div>{/*END  ROW  */}
				</div>{/* END CONTAINER  */}
			</div>{/* END OVERLAY */}
		</div>
    </>
  )
}

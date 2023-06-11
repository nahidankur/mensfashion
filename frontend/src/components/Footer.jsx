import { Container, Row, Col } from 'react-bootstrap';
import {BsFacebook,BsLinkedin,BsInstagram,BsGithub } from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="footer">
<div className="container bottom_border">
<div className="row">
<div className=" col-sm-4 col-md col-sm-4  col-12 col">
<h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>

<p className="mb10">Welcome to our e-commerce website! We are thrilled to have you here. Our platform offers a wide range of products to cater to your needs and desires. Whether you are searching for fashion.</p>
<p><i className="fa fa fa-envelope"></i> ceo@mensfasion.com  </p>


</div>


<div className=" col-sm-4 col-md  col-6 col">
<h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
<ul className="footer_ul_amrc">
<li><a href="#">Image Rectoucing</a></li>
<li><a href="#">Clipping Path</a></li>
<li><a href="#">Hollow Man Montage</a></li>
<li><a href="#">Ebay & Amazon</a></li>
<li><a href="#">Hair Masking/Clipping</a></li>
<li><a href="#">Image Cropping</a></li>
</ul>

</div>


<div className=" col-sm-4 col-md  col-6 col">
<h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

<ul className="footer_ul_amrc">
<li><a href="#">Remove Background</a></li>
<li><a href="#">Shadows & Mirror Reflection</a></li>
<li><a href="#">Logo Design</a></li>
<li><a href="#">Vectorization</a></li>
<li><a href="#">Hair Masking/Clipping</a></li>
<li><a href="#">Image Cropping</a></li>
</ul>

</div>


<div className=" col-sm-4 col-md  col-12 col">
<h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>


<ul className="footer_ul2_amrc">
<li><a href="#"><i className="fab fa-twitter fleft padding-right"></i> </a><p>Facebook<a href="#"></a></p></li>
<li><a href="#"><i className="fab fa-twitter fleft padding-right"></i> </a><p>Instagram<a href="#"></a></p></li>
<li><a href="#"><i className="fab fa-twitter fleft padding-right"></i> </a><p>Twitter<a href="#"></a></p></li>
</ul>
</div>
</div>
</div>
<div className="container">
<ul className="foote_bottom_ul_amrc">
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Contact Us</a></li>
<li><a href="#">Legal Policy</a></li>
</ul>

<p className="text-center">Copyright @{currentYear} | Developed By <a style={{color: "#fff"}} href='https://nahidankur.github.io'>Nahid Karim Ankur</a> </p>

<ul className="social_footer_ul">
<li><a href="https://www.facebook.com/nahidkarim.ankur"><BsFacebook /></a></li>
<li><a href="http://github.com/nahidankur"><BsGithub /></a></li>
<li><a href='https://www.linkedin.com/in/nahidankur/'><BsLinkedin /></a></li>
<li><a href="https://www.instagram.com/nahidankur/"><BsInstagram /></a></li>
</ul>

</div>

</footer>
  );
};
export default Footer;

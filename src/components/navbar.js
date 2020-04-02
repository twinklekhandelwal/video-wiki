import React, { Component } from "react";
 import { Navbar,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pic1 from "../components/Images/1.jpg";
import Pic2 from "../components/Images/4.jpg";
import Pic3 from "../components/Images/2.jpeg";
import Pic4 from "../components/Images/2.jpg";
import Pic5 from "../components/Images/5.jpeg";
import Pic6 from "../components/Images/6.jpeg";
import Carousel from "react-material-ui-carousel";
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import "./navbar.css";
import Button from '@material-ui/core/Button';
import Navgurukul_logo from "../components/navgurukul.png";
import Login from "../pages/login";
import { withStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    height:"10px",
    flexGrow: 1,
    justifyContent:"start"

  },
  title: {
   width:200,
   height:200,
   marginTop:"-100px",
   
   justifyContent:"start",
   marginLeft:"10px"
  },
  image:{
    height: "700px",
                  width: "65%",
                  marginLeft: "80px",
                  marginTop: "40px",
                  [theme.breakpoints.down('md')]: {
                    height: "500px",
                    width: "55%",
                    marginLeft: "80px",
                    marginTop: "40px",
                     
                      },
                      [theme.breakpoints.down('sm')]: {
                        height: "400px",
                        width: "75%",
                        marginLeft: "80px",
                        marginTop: "40px",
                         
                          },
                      
  },
  crosul:{
  display: "flex",
   marginRight: "10%",
   
      },
      display:{
        display:"block",
        
       
             [theme.breakpoints.down('sm')]: {
              display:"none"
                
            },
 },
 
 

})
class NavBar extends Component {
 

  render() {
    // const {classes} = this.props;
    return (
      <div>
        {/* <div>
          <Navbar
            expand="lg"
            variant="light"
            style={{ backgroundColor: "#3578E5" }}
          >
            <div >
            <img src={Navgurukul_logo}  className={classes.logo} alt="img" />
            </div>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ">
                <li className="nav-item">
                
                </li>
                <li className="nav-item">
                  <Link to="/signup">
                    {" "}
                    <Button
                      variant="primary"
                      className={classes.button}
                    >
                      Signup
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </Navbar>
        </div> */}
         {/* <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
           <IconButton  className={classes.menuButton} color="inherit" aria-label="menu" >
          <img src={Navgurukul_logo}  className={classes.title} alt="img" />  
           
          </IconButton> 
          
            
          
         
          
          <Link to="/signup">
          <Button color="inherit">Singup</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div> */}
     <Navbar style={{width:"100%"}}>
  <Navbar.Brand href="#home"><img src={Navgurukul_logo} style={{ height: "200px",width:"200px" }} alt="img" /></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <Link to="/signup">
                  {" "}
                  <Button
                    variant="primary"
                    style={{ height: "40px", width: "90px" }}
                  >
                    Signup
                  </Button>
                </Link>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
<Row className="justify-content-md-center">
<Col lg="5" xs="5" >
        {/* <div style={{display: "flex",
   marginRight: "10%",}}> */}
          <Carousel className="colu">
            <div>
              <img
                src={Pic1}
                className="image"
                alt="t"
              />
            </div>
            <div>
              <img
                src={Pic6}
                className="image"
                alt="t"
              />
            </div>
            <div>
              <img
                src={Pic4}
                className="image"
                alt="t"
              />
            </div>
            <div>
              <img
                src={Pic2}
                className="image"
                alt="t"
              />
            </div>
            <div>
              <img
                src={Pic3}
                className="image"
                alt="t"
              />
            </div>
            <div>
              <img
                src={Pic5}
                className="image"
                alt="t"
              />
            </div>
          </Carousel>
          </Col>
<Col lg="5" sm="6">
          <span style={{marginTop:"120px"}}>
            <Login />
          </span>
          </Col>
        {/* </div> */}
        </Row>
      </div>
    );
  }
}
export default withStyles(styles)(NavBar);

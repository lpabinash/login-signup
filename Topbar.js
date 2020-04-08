import React from 'react';
import classes from './Topbar.module.css';
import { Link } from 'react-router-dom';
// import { render } from '@testing-library/react';
class Topbar extends React.Component {
    constructor(props) {
        super(props);
        // this.state={
        //     dashboard: "#f5a623",
        //     product:"#567086",
        //     accounts:"#567086",
        // }
    }

        // onDashboardLinkClick = () => {
        //     this.setState({dashboard:"#f5a623"});
        //     this.setState({product:"#567086"});
        //     this.setState({accounts:"#567086"});
        // }
        // onProductsLinkClick = () => {
        //     this.setState({dashboard:"#567086"});
        //     this.setState({product:"#f5a623"});
        //     this.setState({accounts:"#567086"});
        // }
        // onAccountsLinkClick = () => {
        //     this.setState({dashboard:"#567086"});
        //     this.setState({product:"#567086"});
        //     this.setState({accounts:"#f5a623"});
        // }

        render() {
            return(
                <div className={classes.main}>
                    <Link  to="homepage" className={classes.menu}>
                            <h3>Homepage</h3>
                        </Link>
                    
                    <div className={classes.menuWrapper}>
                        <Link   to="signup" className={classes.menu}>
                            <i className="fas fa-user-plus"></i>
                            <h5>Sign Up</h5>
                        </Link>
                        <Link  to="login" className={classes.menu}>
                            <i className="fas fa-sign-in-alt"></i>
                            <h5>Login</h5>
                        </Link>
                        
                    </div>
    
                    {/* <div className={classes.loginLogoutWrapper}>
                        {
                            this.props.loggedInStatus ?
                            <div className={classes.logout}>
                                <h5 style={{fontWeight:400,margin:"0px",paddingTop:"3px"}}>Admin</h5>
                                <Link onClick={() => this.props.onLoggedOutClick()} to="" className={classes.logoutLink}>, Logout</Link>
                            </div>
                            : <Link to="Login" className={classes.login}>
                                <h5>Login</h5>
                              </Link>
                        }
                    </div> */}
    
                </div>
            );
        }
}
export default Topbar;
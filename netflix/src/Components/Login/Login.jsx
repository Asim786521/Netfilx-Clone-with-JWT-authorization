import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import  './Login.css';
 
 

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		//const [dename,setDename]=useState('')
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
		
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
 
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			    <header className="showcase">
        

		<div className="logo">
			<img src="https://i.ibb.co/r5krrdz/logo.png"  alt=''/>
		</div>
	
		<div className="showcase-content">
			<div class="formm">
			<form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <div class="info">
                  		<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="email"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="email"
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
                    
                </div>
                <div class="help">
                    <div>
                        <input value="true" type="checkbox"/><label>Remember me</label>
                    </div>

					<Link to="/signup">Sign up now</Link>
                
                </div>

            </form>
				 
	
			</div>
			</div>
			
			<div class="fcbk">
				<a href="https://facebook.com">
					<img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook"/>
				  </a>
				<p>Login with Facebook</p>
			</div>
			<div class="signup">
				<p>New to Netflix ?</p>
			
			</div>
		 
	
	
		
	
	
		 
	</header>
	
		</div>
	);
};

export default Login;

import React, { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./signup.css";
import instaLogo from "../Assets/Instagram.JPG";
import { createUseStyles } from "react-jss";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { database, storage } from "../firebase";
import { AuthContext } from "../Context/AuthContext";

export default function SignUp() {
	const useStyles = createUseStyles({
		text1: {
			color: "grey",
			textAlign: "center",
			marginTop: "3%",
		},

		buttonmargin: {
			marginTop: "4%",
		},

		card2: {
			marginTop: "5%",
		},
	});

	const classes = useStyles();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [file, setFile] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const { signup } = useContext(AuthContext);

	const handleClick = async () => {
		if (file == null) {
			setError("Profile picture not uploaded");

			setTimeout(() => {
				setError("");
			}, 3000);
			return;
		}

		try {
			let userObj = await signup(email, password);
			let uid = userObj.user.uid;

			const uploadImage = storage
				.ref(`/users/${uid}/ProfileImage`)
				.put(file);

			uploadImage.on("state_changed", fn1, fn2, fn3);

			function fn1(snapshot) {
				let progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log(`upload is ${progress} complete`);
			}

			function fn2() {
				setError(error);
				setTimeout(() => {
					setError("");
				}, 3000);
				setLoading(false);
				return;
			}

			function fn3() {
				uploadImage.snapshot.ref.getDownloadURL().then((url) => {
					database.users.doc(uid).set({
						email: email,
						userId: uid,
						fullname: name,
						profileUrl: url,
						createdAt: database.getTimestamp(),
					});
				});
			}
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div className="signupWrapper">
			<div className="signupCard">
				<Card sx={{ maxWidth: 345 }}>
					<div className="insta-logo">
						<img src={instaLogo} />
					</div>
					<CardContent>
						<Typography variant="subtitle1" className={classes.text1}>
							Sign up to see photos and videos from your friends
						</Typography>
						{error != "" && <Alert severity="error">{error}</Alert>}

						<TextField
							id="outlined-basic"
							label="Email"
							variant="outlined"
							margin="dense"
							fullWidth="true"
							size="small"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<TextField
							id="outlined-basic"
							label="Password"
							variant="outlined"
							margin="dense"
							fullWidth="true"
							size="small"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<TextField
							id="outlined-basic"
							label="Full Name"
							variant="outlined"
							margin="dense"
							fullWidth="true"
							size="small"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>

						<Button
							color="secondary"
							variant="outlined"
							fullWidth="true"
							component="label"
							className={classes.buttonmargin}
						>
							Upload Profile Picture
							<input
								type="file"
								accept="image/*"
								hidden
								onChange={(e) => setFile(e.target.files[0])}
							/>
						</Button>

						<Typography variant="subtitle1" className={classes.text1}>
							People who use our service may have uploaded your contact
							information to Instagram. Learn More
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							variant="contained"
							fullWidth="true"
							onClick={handleClick}
							disable={loading}
						>
							SignUp
						</Button>
					</CardActions>
				</Card>

				<Card sx={{ maxWidth: 345 }}>
					<Typography className={classes.card2}>
						Have an Account?{" "}
						<Link to="/login" style={{ textDecoration: "none" }}>
							Log in
						</Link>
					</Typography>
				</Card>
			</div>
		</div>
	);
}

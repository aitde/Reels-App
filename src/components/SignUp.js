import * as React from "react";
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
						{true && (
							<Alert severity="error">
								This is an error alert — check it out!
							</Alert>
						)}

						<TextField
							id="outlined-basic"
							label="Email"
							variant="outlined"
							margin="dense"
							fullWidth="true"
							size="small"
						/>

						<TextField
							id="outlined-basic"
							label="Password"
							variant="outlined"
							margin="dense"
							fullWidth="true"
							size="small"
						/>

						<TextField
							id="outlined-basic"
							label="Full Name"
							variant="outlined"
							margin="dense"
							fullWidth="true"
							size="small"
						/>

						<Button
							color="secondary"
							variant="outlined"
							fullWidth="true"
							component="label"
							className={classes.buttonmargin}
						>
							Upload Profile Picture
							<input type="file" accept="image/*" hidden />
						</Button>

						<Typography variant="subtitle1" className={classes.text1}>
							People who use our service may have uploaded your contact
							information to Instagram. Learn More
						</Typography>
					</CardContent>
					<CardActions>
						<Button variant="contained" fullWidth="true">
							SignUp
						</Button>
					</CardActions>
				</Card>

				<Card sx={{ maxWidth: 345 }}>
					<Typography className={classes.card2}>
						Have an Account? Log in
					</Typography>
				</Card>
			</div>
		</div>
	);
}

import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./login.css";
import instaLogo from "../Assets/Instagram.JPG";
import { createUseStyles } from "react-jss";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import insta from "../Assets/insta.png";
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
	Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import img4 from "../Assets/img4.jpg";
import { Link } from "react-router-dom";
import img5 from "../Assets/img5.jpg";
import { AuthContext } from "../Context/AuthContext";

export default function Login() {
	// const test = useContext(AuthContext);
	// console.log(test);

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

		text2: {
			color: "#0095f6",
		},
	});

	const classes = useStyles();

	return (
		<div className="loginWrapper">
			<div
				className="img-car"
				style={{
					backgroundImage: "url(" + insta + ")",
					backgroundSize: "cover",
				}}
			>
				<div className="car">
					<CarouselProvider
						visibleSlides={1}
						totalSlides={5}
						naturalSlideWidth={238}
						naturalSlideHeight={423}
						hasMasterSpinner
						isPlaying={true}
						infinite={true}
						dragEnabled={false}
						touchEnabled={false}
					>
						<Slider>
							<Slide index={0}>
								<Image src={img1} />
							</Slide>
							<Slide index={1}>
								<Image src={img2} />
							</Slide>
							<Slide index={2}>
								<Image src={img3} />
							</Slide>
							<Slide index={3}>
								<Image src={img4} />
							</Slide>
							<Slide index={4}>
								<Image src={img5} />
							</Slide>
						</Slider>
					</CarouselProvider>
				</div>
			</div>

			<div className="loginCard">
				<Card sx={{ maxWidth: 345 }}>
					<div className="insta-logo">
						<img src={instaLogo} />
					</div>
					<CardContent>
						{true && (
							<Alert severity="error">
								This is an error alert ??? check it out!
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

						<Typography variant="subtitle1" className={classes.text2}>
							Forgot Password ?
						</Typography>
					</CardContent>
					<CardActions>
						<Button variant="contained" fullWidth="true">
							Log in
						</Button>
					</CardActions>
				</Card>

				<Card sx={{ maxWidth: 345 }}>
					<Typography className={classes.card2}>
						Don't have an account?{" "}
						<Link to="/" style={{ textDecoration: "none" }}>
							Sign up
						</Link>
					</Typography>
				</Card>
			</div>
		</div>
	);
}

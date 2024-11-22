import {
  Box,
  Button,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import matchDownMd from '../../../ExternalMethods/matchDownMd';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import css from '../../Home/HomeSections/section1.css';


const Section1 = () => {


  const ItemData1 = [
    {
      img: "../../../../Imgs/Design1.jpg",
      discount: "30% Discount",
      title: `New Stylish Decor Furniture`,
      discription: "Unique Furniture Stylr Design for Your Family",
      deletedPrice: 400,
      price: 250,
    },
    {
      img: "../../../../Imgs/Design4.jpg",
      discount: "30% Discount",
      title: `New Stylish Decor Furniture`,
      discription: "Unique Furniture Stylr Design for Your Family",
      deletedPrice: 400,
      price: 250,
    },

  ]


  const Navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "black", }}>
      <Box sx={{ padding: "16px", paddingBottom: "0px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { xs: "column", md: "row" } }}>


        <Box sx={{ width: { xs: "90%", md: "50%" }, mb: "20px", height: "auto", mr: { md: "20px" } }}
        >
          <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false}>
            {ItemData1.map((item) => (
              <Box
                key={item.title}
                sx={{
                  width: "100%",
                  height: { xs: "200px", md: "420px" },
                  borderRadius: "15px",
                  backgroundImage: `url(${item.img})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundOrigin: "content-box",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <Box
                  sx={{
                    color: "#fff",
                    lineHeight: 2,
                    ml: { xs: "15px", md: "30px" },
                    pl: "20px",
                    width: { xs: "80%", md: "50%" },
                    height: { xs: "fit-content", md: "80%" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",

                  }}
                >
                  <Chip
                    label={item.discount}
                    sx={{
                      borderRadius: "10px",
                      backgroundColor: "#FCC012",
                      color: "#000",
                      p: "0 10px"
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ fontSize: matchDownMd() ? "20px" : "38px", textAlign: "start" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="p" fontSize="12px" sx={{ display: { xs: "none", md: "block" } }}>{item.discription}</Typography>
                  <Typography sx={{ fontSize: matchDownMd() ? "12px" : "18px" }}>
                    <del style={{ color: "lightgray" }}>₹{item.deletedPrice}</del>{" "}
                    ₹{item.price}
                  </Typography>
                  <Button
                    sx={{
                      fontSize: matchDownMd() ? "10px" : "16px",
                      mt: matchDownMd() ? "10px" : "30px",
                      backgroundColor: "#FCC012",
                      cursor: "pointer",
                      color: "black",
                      padding: "5px 16px",
                      borderRadius: "20px",
                      ":hover": {
                        color: "#FCC012",
                        outline: "1px solid #FCC012",
                      },
                    }}
                    onClick={() => {
                      Navigate("");
                    }}
                  >
                    Shop Now
                  </Button>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>





        <Box
  sx={{
    backgroundColor: "rgb(238,134,16)", // Orange color matching your image
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    width: { xs: "90%",  },
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow effect
  }}
>
  {/* Title */}
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      color: "#fff",
      fontSize: "20px",
      marginBottom: "15px",
    }}
  >
    Sell your recyclables online with UIF!
  </Typography>

  {/* Description */}
  <Typography
    sx={{
      color: "#fff",
      fontSize: "14px",
      lineHeight: "1.5",
      marginBottom: "20px",
    }}
  >
    Make a difference and earn money with UIF. <br /> Sell your recyclables
    online, hassle-free. <br />
    Join the sustainable revolution now!
  </Typography>

  {/* Schedule a Pickup Label */}
  <Typography
    sx={{
      color: "#fff",
      fontSize: "16px",
      fontWeight: "500",
      marginBottom: "10px",
    }}
  >
    Schedule a pickup?
  </Typography>

  {/* Input Box with Button */}
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      borderRadius: "20px",
      padding: "5px",
      width: "100%",
      maxWidth: "300px",
      margin: "0 auto 20px",
    }}
  >
    <input
      type="text"
      placeholder="+91"
      style={{
        border: "none",
        outline: "none",
        padding: "10px",
        fontSize: "16px",
        flex: 1,
        borderRadius: "10px",
      }}
    />
    <button
      style={{
        backgroundColor: "#FFC107",
        border: "none",
        padding: "11px 19px 9px",
        marginLeft: "10px",
        borderRadius: "10px",
        fontSize: "14px",
        cursor: "pointer",
        color: "#000",
        fontWeight: "bold",
      }}
    >
      Book
    </button>
  </Box>

  {/* Contact Section */}
  <Typography sx={{ color: "#fff", fontSize: "14px" }}>
    Any issues? Call us at{" "}
    <a
      href="tel:+919876543210"
      style={{ color: "#fff", textDecoration: "underline" }}
    >
      +91 98765 43210
    </a>
  </Typography>
</Box>






        {/* <Box sx={{ width: { xs: "90%", md: "25%" }, height: "auto" }}>
          {itemData.map((item) => (
            <Box
              key={item.title}
              sx={{
                height: "200px",
                borderRadius: "15px",
                backgroundImage: `url(${item.img})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundOrigin: "content-box",
                display: "flex",
                alignItems: "center",
                mb: "20px"
              }}
            >
              <Box
                sx={{
                  color: "#fff",
                  lineHeight: 2,
                  ml: { xs: "15px", md: "30px" },
                  width: "60%",
                  height: "fit-content",
                  pl: { xs: "20px", md: "0" },

                }}
              >
                <Chip
                  label={item.discount}
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "#FCC012",
                    color: "#000",
                  }}
                />
                <Typography
                  variant={"h6"}
                  sx={{ fontSize: matchDownMd() ? "20px" : null }}
                >
                  {item.title}
                </Typography>
                <Typography variant="p" fontSize="12px" sx={{ display: { xs: "none", md: "block" } }}>{item.discription}</Typography>
                <Typography sx={{ fontSize: matchDownMd() ? "12px" : "18px" }}>
                  <del style={{ color: "lightgray" }}>₹{item.deletedPrice}</del>{" "}
                  ₹{item.price}
                </Typography>
                <Link
                  to=""
                  style={{
                    textDecoration: "underline",
                    color: "lightgray",
                    fontSize: matchDownMd() ? "10px" : "16px",
                  }}
                >
                  Shop Now
                </Link>
              </Box>
            </Box>
          ))}
        </Box> */}
      </Box>












      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "75%" },
            paddingBottom: "0px",
            display: { xs: "block", md: "flex" },
            mt: "16px"

          }}
        >
          <Box
            sx={{
              bgcolor: "black",
              color: "#fff",
              border: "1px solid #fff",
              padding: "15px",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
              display: "flex",
              width: { xs: "85%", md: "45%" },
              ml: "12px",
              mx: matchDownMd() ? "auto" : null,
              mb: matchDownMd() ? "10px" : null
            }}
          >
            <Box
              sx={{
                bgcolor: "#F3F2EE",
                width: "100px",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "15px",
              }}
            >
              <Box sx={{ width: "50px", height: "70px" }}>
                <img
                  src="../../../../Imgs/product.png"
                  style={{
                    borderRadius: "15px",
                    widht: "100%",
                    height: "100%",
                  }}
                  alt="product"
                  loading='lazy'
                />
              </Box>
            </Box>
            <Box sx={{ mx: "25px" }}>
              <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                {/* Latest Offer */}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: "20px", lineHeight: "20px" }}
              >
                <span style={{ color: "black" }}> </span>
                Sell Your Furniture and get the best price for it.
              </Typography>
              <Button
                sx={{
                  fontSize: matchDownMd() ? "10px" : "12px",
                  mt: "8px",
                  backgroundColor: "#AC8C5B",
                  fontWeight: "200",
                  cursor: "pointer",
                  color: "#FFF",
                  padding: "5px 20px",
                  borderRadius: "20px",
                  ":hover": { color: "#FCC012", outline: "1px solid #FCC012" },
                }}
                onClick={() => {
                  Navigate("");
                }}
              >
                Sell Now
              </Button>
            </Box>
          </Box>






          <Box sx={{
            display: "flex", justifyContent: "space-around", width: { xs: "70%", md: "55%" }
            , mx: matchDownMd() ? "auto" : null,
            mb: matchDownMd() ? "10px" : null

          }}>
            <Box sx={{ width: "30%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <Typography className="outline-text" fontSize={matchDownMd() ? "25px" : "40px"} >975+</Typography>
              <Typography color="gray">Home furniture</Typography>
            </Box>


            <Box sx={{ width: "30%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <Typography className="outline-text" fontSize={matchDownMd() ? "25px" : "40px"} >320+</Typography>
              <Typography color="gray">interior Designs</Typography>
            </Box>


            <Box sx={{ width: "30%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <Typography className="outline-text" fontSize={matchDownMd() ? "25px" : "40px"} >980+</Typography>
              <Typography color="gray">Happy Clients</Typography>
            </Box>



          </Box>





        </Box>
      </Box>
    </Box>
  );
};

export default Section1;

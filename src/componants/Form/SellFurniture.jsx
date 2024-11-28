import React, { useRef, useState } from "react";
import {
    Grid,
    TextField,
    Typography,
    Box,
    FormControlLabel,
    Checkbox,
    Button,
} from "@mui/material";
import Form from "react-bootstrap/Form";
import "./SellFurnitureForm.css"; // Ensure the correct path for your CSS file

const SellFurnitureForm = () => {
    const [progress, setProgress] = useState(0); // Video upload progress
    const videoRef = useRef(null);
    const sourceRef = useRef(null);

    const handlevideoChange = (event) => {
        const files = event.target.files || [];
        if (!files.length) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            if (sourceRef.current) {
                sourceRef.current.setAttribute("src", e.target.result);
                const videoElement = videoRef.current;
                videoElement.load();
                videoElement.play();
            }
        };

        reader.onprogress = (e) => {
            setProgress(Math.round((e.loaded * 100) / e.total)); // Update progress
        };

        reader.readAsDataURL(files[0]);
    };

    // Image upload handling
    const [images, setImages] = useState([]);
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => ({
            id: Math.random().toString(36).substr(2, 9), // Unique ID for each image
            file,
            url: URL.createObjectURL(file),
        }));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (id) => {
        setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    };

    return (
        <Box
            sx={{
                padding: "20px",
                maxWidth: "1200px",
                margin: "auto",
                bgcolor: "#000",
                color: "#fff",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
            }}
        >
            <Typography
                variant="h4"
                sx={{ fontWeight: "bold", marginBottom: "20px", textAlign: "left", }}
            >
                Sell Your Used Furnitures
            </Typography>
            <Typography
                variant="h6"
                sx={{ marginBottom: "20px", color: "#C67605", fontWeight: "bold", textAlign: "left" }}
            >
                GET IN TOUCH WITH US
            </Typography>
            <Grid container spacing={2}>
                {/* Left Column */}
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Product Name" variant="outlined" margin="normal" sx={inputStyles} />
                    <TextField fullWidth label="Title" variant="outlined" margin="normal" sx={inputStyles} />
                    <TextField fullWidth label="Mobile Number" variant="outlined" margin="normal" sx={inputStyles} />
                    <TextField fullWidth label="Date" type="date" variant="outlined" margin="normal" InputLabelProps={{ shrink: true }} sx={inputStyles} />
                </Grid>

                {/* Right Column */}
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Product Details" variant="outlined" margin="normal" sx={inputStyles} />
                    <TextField fullWidth label="Address" variant="outlined" margin="normal" sx={inputStyles} />
                    <TextField fullWidth label="Price" variant="outlined" margin="normal" sx={inputStyles} />
                    <Form.Select
                        aria-label="Default select example"
                        className="custom-select"
                        style={{
                            backgroundColor: "transparent",
                            color: "#fff",
                            borderColor: "#fff",
                            borderRadius: "20px",
                            marginTop: "15px",
                            height: "47px",
                        }}
                    >
                        <option style={{ backgroundColor: "black", color: "white" }}> Category</option>
                        <option style={{ backgroundColor: "black", color: "white" }} value="Home Furniture">Home Furniture</option>
                        <option style={{ backgroundColor: "black", color: "white" }} value="Office Furniture">Office Furniture</option>
                        <option style={{ backgroundColor: "black", color: "white" }} value="Antique, Artworks">Antique, Artworks</option>
                        <option style={{ backgroundColor: "black", color: "white" }} value="Statue">Statue</option>
                        <option style={{ backgroundColor: "black", color: "white" }} value="Electronics/Electricals">Electronics/Electricals</option>
                        <option style={{ backgroundColor: "black", color: "white" }} value="Paintings">Paintings</option>
                        <option style={{ backgroundColor: "black", color: "white" }} value="Gym Equipment">Gym Equipment</option>
                        <option style={{ backgroundColor: "black", color: "white" }} value="Sports">Sports</option>
                        <option style={{ backgroundColor: "black", color: "white" }} value="Clocks">Clocks</option>
                        <option style={{ backgroundColor: "black", color: "white" }} value="Footwear">Footwear</option>
                        <option style={{ backgroundColor: "black", color: "white" }} value="Decorative, Gift Items">Decorative, Gift Items</option>
                        <option style={{ backgroundColor: "black", color: "white" }} value="Glassware">Glassware</option>
                        <option style={{ backgroundColor: "black", color: "white" }} value="Miscellaneous">Miscellaneous</option>
                        <option style={{ backgroundColor: "black", color: "white" }} value="Musical Instrument">Musical Instrument</option>
                    </Form.Select>
                </Grid>
            </Grid>

            {/* Image and Video Upload Section */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginTop: "20px",
                }}
            >
                {/* Images Section */}
                <Grid container spacing={2}>
                    {/* Left Column: Image Section */}
                    <Grid item xs={12} sm={6} md={6}>
                        <Box sx={{ flex: 1, marginRight: { xs: "0", sm: "20px" } }}>
                            <Typography
                                variant="h6"
                                sx={{ marginBottom: "10px", color: "#C67605", fontWeight: "bold" }}
                            >
                                Select your Images
                            </Typography>
                            <input
                                type="file"
                                id="files"
                                name="files[]"
                                multiple
                                onChange={handleFileChange}
                                style={{ width: "100%" }}
                            />
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    marginTop: "10px",
                                    gap: "10px",
                                }}
                            >
                                {images.map((image) => (
                                    <Box
                                        key={image.id}
                                        sx={{
                                            position: "relative",
                                            display: "inline-block",
                                            width: { xs: "80px", sm: "100px" }, // Responsive width
                                            height: { xs: "80px", sm: "100px" }, // Responsive height
                                            overflow: "hidden",
                                            borderRadius: "5px",
                                            boxShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
                                        }}
                                    >
                                        <img
                                            src={image.url}
                                            alt={image.file.name}
                                            title={image.file.name}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                        <Box
                                            onClick={() => handleRemoveImage(image.id)}
                                            sx={{
                                                position: "absolute",
                                                top: "5px",
                                                right: "5px",
                                                backgroundColor: "rgba(0, 0, 0, 0.6)",
                                                color: "#fff",
                                                borderRadius: "50%",
                                                width: "20px",
                                                height: "20px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                            }}
                                        >
                                            &times;
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Column: Video Section */}
                    <Grid item xs={12} sm={6} md={6}>
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                variant="h6"
                                sx={{ marginBottom: "10px", color: "#C67605", fontWeight: "bold" }}
                            >
                                Select your Videos
                            </Typography>
                            <input
                                id="file-input"
                                type="file"
                                accept="video/*"
                                onChange={handlevideoChange}
                                style={{ width: "100%" }}
                            />
                            <Box sx={{ marginTop: "10px" }}>
                                <video ref={videoRef} width="100%" controls>
                                    <source ref={sourceRef} />
                                    Your browser does not support the video tag.
                                </video>
                                <Typography sx={{ marginTop: "10px", color: "#fff" }}>
                                    Progress: {progress}%
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Box>


            {/* Submit Button */}
            <Box sx={{ textAlign: "left", marginTop: "30px" }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#AC8C5B",
                        color: "white",
                        fontWeight: "bold",
                        ":hover": { backgroundColor: "#AC8C5B" },
                    }}
                >
                    Submit
                </Button>

            </Box>
            <FormControlLabel
                control={<Checkbox sx={{ color: "#fff" }} />}
                label="Agree to our terms and condition"
                sx={{ marginTop: "20px", color: "#fff" }}
            />
        </Box>
    );
};

// Input styles
const inputStyles = {
    borderRadius: "8px",
    "& .MuiOutlinedInput-root": {
        borderRadius: "8px",
    },
    "& .MuiInputLabel-root": { color: "#fff" },
    "& .MuiOutlinedInput-root": {
        "& > fieldset": { borderColor: "#fff" },
        "&:hover fieldset": { borderColor: "#fff" },
        "&.Mui-focused fieldset": { borderColor: "#fff" },
    },
    "& .MuiOutlinedInput-input": { color: "#fff" },
};

export default SellFurnitureForm;

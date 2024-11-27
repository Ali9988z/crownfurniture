import React from "react";
import {
    Grid,
    TextField,
    Typography,
    Box,
    FormControlLabel,
    Checkbox,
    Button,
} from "@mui/material";
import Form from 'react-bootstrap/Form';
import css from "../Form/SellFurnitureForm.css"

const SellFurnitureForm = () => {
    return (
        <Box sx={{ padding: "20px", maxWidth: "1200px", margin: "auto", bgcolor: "#000" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px", color: "#fff" }}>
                Sell Your Used Furnitures
            </Typography>
            <Typography
                variant="h6"
                sx={{ marginBottom: "10px", color: "brown", fontWeight: "bold" }}
            >
                GET IN TOUCH WITH US
            </Typography>
            <Grid container spacing={2}>
                {/* Left Column */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Product Name"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            "& .MuiInputLabel-root": { color: "#fff" },
                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderColor: "#fff" },
                            },
                            "& .MuiOutlinedInput-root:hover > fieldset": {
                                borderColor: "#fff",
                            },
                            "& .MuiOutlinedInput-root.Mui-focused > fieldset": {
                                borderColor: "#fff",
                            },
                            "& .MuiOutlinedInput-input": { color: "#fff" },
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Title"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            "& .MuiInputLabel-root": { color: "#fff" },
                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderColor: "#fff" },
                            },
                            "& .MuiOutlinedInput-root:hover > fieldset": {
                                borderColor: "#fff",
                            },
                            "& .MuiOutlinedInput-root.Mui-focused > fieldset": {
                                borderColor: "#fff",
                            },
                            "& .MuiOutlinedInput-input": { color: "#fff" },
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Mobile Number"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            "& .MuiInputLabel-root": { color: "#fff" },
                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderColor: "#fff" },
                            },
                            "& .MuiOutlinedInput-root:hover > fieldset": {
                                borderColor: "#fff",
                            },
                            "& .MuiOutlinedInput-root.Mui-focused > fieldset": {
                                borderColor: "#fff",
                            },
                            "& .MuiOutlinedInput-input": { color: "#fff" },
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Date"
                        type="date"
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        sx={{
                            backgroundColor: "transparent",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#ccc",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#fff",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#fff",
                                },
                            },
                            "& .MuiInputBase-input": {
                                color: "#fff",
                            },
                            "& .MuiInputLabel-root": {
                                color: "#fff",
                            },
                        }}
                    />
                </Grid>

                {/* Right Column */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Product Details"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            "& .MuiInputLabel-root": { color: "#fff" },
                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderColor: "#fff" },
                            },
                            "& .MuiOutlinedInput-root:hover > fieldset": {
                                borderColor: "#fff",
                            },
                            "& .MuiOutlinedInput-root.Mui-focused > fieldset": {
                                borderColor: "#fff",
                            },
                            "& .MuiOutlinedInput-input": { color: "#fff" },
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Address"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            "& .MuiInputLabel-root": { color: "#fff" },
                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderColor: "#fff" },
                            },
                            "& .MuiOutlinedInput-root:hover > fieldset": {
                                borderColor: "#fff",
                            },
                            "& .MuiOutlinedInput-root.Mui-focused > fieldset": {
                                borderColor: "#fff",
                            },
                            "& .MuiOutlinedInput-input": { color: "#fff" },
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Price"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            "& .MuiInputLabel-root": { color: "#fff" },
                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderColor: "#fff" },
                            },
                            "& .MuiOutlinedInput-root:hover > fieldset": {
                                borderColor: "#fff",
                            },
                            "& .MuiOutlinedInput-root.Mui-focused > fieldset": {
                                borderColor: "#fff",
                            },
                            "& .MuiOutlinedInput-input": { color: "#fff" },
                        }}
                    />
                    {/* Select Category Dropdown */}
                    <Form.Select
                        aria-label="Default select example"
                        style={{
                            backgroundColor: "transparent",
                            color: "#fff",
                            borderColor: "#fff",
                            borderWidth: "1px",
                            boxShadow: "none",
                            borderRadius: "23px",
                            marginTop: "17px",
                            height: "47px",

                        }}
                        className="custom-select"
                    >
                        <option >Category</option>
                        <option value="Home Furniture">Home Furniture</option>
                        <option value="Office Furniture">Office Furniture</option>
                        <option value="Antique, Artworks">Antique, Artworks</option>
                        <option value="Statue">Statue</option>
                        <option value="Electronics/ Electricals">Electronics/ Electricals</option>
                        <option value="Paintings">Paintings</option>
                        <option value="Gym Equipment">Gym Equipment</option>
                        <option value="Sports">Sports</option>
                        <option value="Clocks">Clocks</option>
                        <option value="Footwear">Footwear</option>
                        <option value="Decorative, Gift items">Decorative, Gift items </option>
                        <option value="Glassware">Glassware </option>
                        <option value="Miscellaneous">Miscellaneous </option>
                        <option value="Musical Instrument">Musical Instrument</option>
                    </Form.Select>
                </Grid>
            </Grid>

            {/* Checkbox & Submit Button */}



            {/* File Upload Inputs */}
            {[...Array(4)].map((_, index) => (
                <Box
                    key={index}
                    sx={{
                        marginTop: "10px",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                        color: "#fff"
                    }}
                >
                    <input type="file" accept="image/*" />
                </Box>
            ))}
            <FormControlLabel
                control={<Checkbox sx={{ color: "#fff" }} />}
                label="Agree to our terms and condition"
                sx={{ marginTop: "20px", color: "#fff" }}
            />
            <Box sx={{ textAlign: "right", marginTop: "20px" }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "brown",
                        color: "white",
                        fontWeight: "bold",
                        ":hover": { backgroundColor: "#9c564b" },
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Box>

    );
};

export default SellFurnitureForm;

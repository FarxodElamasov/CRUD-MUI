import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditPage() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const getAllDataId = async (id) => {
        await axios.get("http://localhost:3000/data")
            .then((res) => {
                console.log(res);
                setData(res.data)
                setName(res.data.name)
                setDescription(res.data.description)
                setPrice(res.data.price)
                setImage(res.data.image)
            })
    }

    useEffect(() => {
        getAllDataId()
    }, [])

    const editData = async (id) => {
        const item = {
            name: data.name,
            description: data.description,
            price: data.price,
            image: image
        }

        await axios.put(`http://localhost:3000/data${id}`, item)
            .then(res => {
                if (res.status === 200) {
                    alert("Succesfully")
                    setName("")
                    setDescription("")
                    setPrice("")
                    setImage("")
                    navigate("/about")
                }
            })
    }

    return (
        <>
            <Grid container spacing={2} direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={8} >
                    <h1>Edit Page</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="outlined" />
                        {name === "" ? <p style={{ color: 'red' }}>Required</p> : null}
                        <TextField id="outlined-basic" value={description} onChange={(e) => setDescription(e.target.value)} label="Description" variant="outlined" />
                        {description === "" ? <p style={{ color: 'red' }}>Required</p> : null}
                        <TextField id="outlined-basic" value={price} onChange={(e) => setPrice(e.target.value)} label="Price" variant="outlined" />
                        {price === "" ? <p style={{ color: "red" }}>Reuired</p> : null}
                        <TextField id="outlined-basic" value={image} onChange={(e) => setImage(e.target.value)} label="Image" variant="outlined" />
                        {image === "" ? <p style={{ color: 'red' }}>Required</p> : null}
                        <Button onClick={editData}>Save</Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
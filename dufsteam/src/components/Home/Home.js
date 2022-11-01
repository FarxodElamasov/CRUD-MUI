import React, { useState } from 'react'
import { Box, Button, Grid, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const data = {
    name: name,
    description: description,
    price: price,
    img: image,
  }

  const createData = async (e) => {

    try {
      const res = await axios.post("http://localhost:3000/data", data)

      name === "" ? alert('toldir') : PostFunction(res)
      
      function PostFunction(res) {
        if (res.status === 201) {
          setName("")
          setDescription("")
          setPrice("")
          setImage("")
          alert('Success');
          navigate("/product")
        }
        else {
          console.log("xato");
        }
      }
    }
    catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <>
      <Grid container spacing={2} direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={8} >
          <h1>Create Cars</h1>

          <form onSubmit={createData} style={{ boxShadow: "1px 1px 15px gray", padding: "25px", borderRadius: "10px" }}>
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
              {price === "" ? <p style={{ color: 'red' }}>Required</p> : null}
              <TextField id="outlined-basic" value={image} onChange={(e) => setImage(e.target.value)} label="Image" variant="outlined" />
              {image === "" ? <p style={{ color: 'red' }}>Required</p> : null}
              <Button onClick={createData} variant="contained" color='primary'>Outlined</Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  )
}

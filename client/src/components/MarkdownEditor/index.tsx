import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../Navbar/Navbar";
import "./MarkdownEditor.scss";
import MarkdownCodeEditor from "@uiw/react-markdown-editor";
import { code } from "./DemoMarkdownCode";
import { createMarkdownEditor } from "../../redux/markdownEditor/markdownEditorAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const MarkdownEditor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [markdownVal, setMarkdownVal] = useState(code);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const names = [
    "Technical",
    "Social",
    "Creative",
    "Personal Development",
    "Professional",
    "Financial",
    "Travel",
    "Miscellaneous",
    "Others",
  ];

  const handleChangeTitle = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(e.target.value);
  };

  const handleChangeCategory = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCategory(e.target.value);
  };

  console.log("markdownVal:", markdownVal);
  let theme = createTheme({
    palette: {
      primary: {
        main: "#FCD450",
      },
      secondary: {
        main: "#edf2ff",
      },
      black: {
        main: "#000000",
      },
    },
  });

  const handleCreateMarkdownEditor = () =>{
    const payload = {
      title,
      category,
      content: markdownVal
    }
    dispatch(createMarkdownEditor(payload));
    navigate('/get-markdown-file')
  }

  const handleCancel = () =>{
    navigate('/get-markdown-file')
  }

  return (
    <React.Fragment>
      <Navbar />
      <Box sx={{ pt: "80px" }}>
        <ThemeProvider theme={theme}>
          <Container maxWidth="xl" sx={{ mb: "15px" }}>
            <Box sx={{ mb: "15px" }}>
              <Typography variant="h4">Markdown Editor</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <TextField
                id="title-basic"
                label="Title"
                variant="outlined"
                type="text"
                name="title"
                value={title}
                onChange={handleChangeTitle}
                style={{ width: "49%" }}
              />
              <FormControl style={{ width: "49%" }}>
                <InputLabel id="category-simple-select-label">
                  Category
                </InputLabel>
                <Select
                  labelId="category-simple-select-label"
                  id="category-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleChangeCategory}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <MarkdownCodeEditor
                style={{ height: "65vh" }}
                value={markdownVal}
                onChange={(value) => {
                  setMarkdownVal(value);
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: "15px",
                }}
              >
                <Button variant="contained" sx={{ mr: "20px" }} onClick={handleCreateMarkdownEditor}>
                  Save Changes
                </Button>
                <Button variant="contained" color="black" onClick={handleCancel}>
                  <Box component="span" color="white">
                    Cancel
                  </Box>
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Box>
    </React.Fragment>
  );
};

export default MarkdownEditor;

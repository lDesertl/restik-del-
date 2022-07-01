import * as React from "react";
import { Drawer, Space } from "antd";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./App.scss";
import TextField from "@mui/material/TextField";
import { useState } from "react";
function App() {
  const [alignment, setAlignment] = React.useState("");
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const closeDrawer = () => {
    setVisible(false);
  };

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <svg
            width="98"
            height="19"
            viewBox="0 0 98 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.075 14.7H10.75V18H0.625V0.499999H4.075V14.7ZM30.1107 15.725C28.3441 17.475 26.1941 18.35 23.6607 18.35C21.1274 18.35 18.9774 17.475 17.2107 15.725C15.4607 13.9583 14.5857 11.8 14.5857 9.25C14.5857 6.7 15.4607 4.55 17.2107 2.8C18.9774 1.03333 21.1274 0.149999 23.6607 0.149999C26.1941 0.149999 28.3441 1.03333 30.1107 2.8C31.8774 4.55 32.7607 6.7 32.7607 9.25C32.7607 11.8 31.8774 13.9583 30.1107 15.725ZM19.6357 13.375C20.7191 14.4417 22.0607 14.975 23.6607 14.975C25.2607 14.975 26.6024 14.4417 27.6857 13.375C28.7691 12.2917 29.3107 10.9167 29.3107 9.25C29.3107 7.58333 28.7691 6.20833 27.6857 5.125C26.6024 4.04167 25.2607 3.5 23.6607 3.5C22.0607 3.5 20.7191 4.04167 19.6357 5.125C18.5524 6.20833 18.0107 7.58333 18.0107 9.25C18.0107 10.9167 18.5524 12.2917 19.6357 13.375ZM56.1105 8.6V9.95C56.1105 12.45 55.3105 14.475 53.7105 16.025C52.1105 17.575 50.0439 18.35 47.5105 18.35C44.8105 18.35 42.5689 17.475 40.7855 15.725C39.0189 13.9583 38.1355 11.8083 38.1355 9.275C38.1355 6.725 39.0105 4.56667 40.7605 2.8C42.5272 1.03333 44.7105 0.149999 47.3105 0.149999C48.9439 0.149999 50.4355 0.524999 51.7855 1.275C53.1355 2.00833 54.1855 2.99167 54.9355 4.225L51.9855 5.925C51.5689 5.20833 50.9355 4.625 50.0855 4.175C49.2522 3.725 48.3189 3.5 47.2855 3.5C45.6189 3.5 44.2439 4.05 43.1605 5.15C42.0939 6.23333 41.5605 7.60833 41.5605 9.275C41.5605 10.925 42.1022 12.2917 43.1855 13.375C44.2855 14.4417 45.7355 14.975 47.5355 14.975C48.8689 14.975 49.9689 14.6833 50.8355 14.1C51.7189 13.5 52.3189 12.6833 52.6355 11.65H47.3355V8.6H56.1105ZM77.0395 15.725C75.2728 17.475 73.1228 18.35 70.5895 18.35C68.0561 18.35 65.9061 17.475 64.1395 15.725C62.3895 13.9583 61.5145 11.8 61.5145 9.25C61.5145 6.7 62.3895 4.55 64.1395 2.8C65.9061 1.03333 68.0561 0.149999 70.5895 0.149999C73.1228 0.149999 75.2728 1.03333 77.0395 2.8C78.8061 4.55 79.6895 6.7 79.6895 9.25C79.6895 11.8 78.8061 13.9583 77.0395 15.725ZM66.5645 13.375C67.6478 14.4417 68.9895 14.975 70.5895 14.975C72.1895 14.975 73.5311 14.4417 74.6145 13.375C75.6978 12.2917 76.2395 10.9167 76.2395 9.25C76.2395 7.58333 75.6978 6.20833 74.6145 5.125C73.5311 4.04167 72.1895 3.5 70.5895 3.5C68.9895 3.5 67.6478 4.04167 66.5645 5.125C65.4811 6.20833 64.9395 7.58333 64.9395 9.25C64.9395 10.9167 65.4811 12.2917 66.5645 13.375ZM91.2045 18.35C89.4712 18.35 88.0128 17.9667 86.8295 17.2C85.6462 16.4167 84.8128 15.3583 84.3295 14.025L87.2795 12.3C87.9628 14.0833 89.3045 14.975 91.3045 14.975C92.2712 14.975 92.9795 14.8 93.4295 14.45C93.8795 14.1 94.1045 13.6583 94.1045 13.125C94.1045 12.5083 93.8295 12.0333 93.2795 11.7C92.7295 11.35 91.7462 10.975 90.3295 10.575C89.5462 10.3417 88.8795 10.1083 88.3295 9.875C87.7962 9.64167 87.2545 9.33333 86.7045 8.95C86.1712 8.55 85.7628 8.05 85.4795 7.45C85.1962 6.85 85.0545 6.15 85.0545 5.35C85.0545 3.76667 85.6128 2.50833 86.7295 1.575C87.8628 0.624999 89.2212 0.149999 90.8045 0.149999C92.2212 0.149999 93.4628 0.499999 94.5295 1.2C95.6128 1.88333 96.4545 2.84167 97.0545 4.075L94.1545 5.75C93.4545 4.25 92.3378 3.5 90.8045 3.5C90.0878 3.5 89.5212 3.66667 89.1045 4C88.7045 4.31667 88.5045 4.73333 88.5045 5.25C88.5045 5.8 88.7295 6.25 89.1795 6.6C89.6462 6.93333 90.5295 7.3 91.8295 7.7C92.3628 7.86667 92.7628 8 93.0295 8.1C93.3128 8.18333 93.6878 8.325 94.1545 8.525C94.6378 8.70833 95.0045 8.88333 95.2545 9.05C95.5212 9.21667 95.8212 9.44167 96.1545 9.725C96.4878 10.0083 96.7378 10.3 96.9045 10.6C97.0878 10.9 97.2378 11.2667 97.3545 11.7C97.4878 12.1167 97.5545 12.575 97.5545 13.075C97.5545 14.6917 96.9628 15.975 95.7795 16.925C94.6128 17.875 93.0878 18.35 91.2045 18.35Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="search">
          {" "}
          <TextField label="Поиск по сайту" color="success" focused />
        </div>
        <div className="contacts">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="url(#paint0_linear_0_1)" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.99329 12.249C10.2042 11.8992 11.3668 10.6292 12.1953 10.6675C12.4431 10.6887 12.6622 10.838 12.8402 11.0119H12.8409C13.249 11.4117 14.4198 12.9206 14.4855 13.2383C14.6478 14.0174 13.7187 14.4665 14.0028 15.2518C14.7272 17.0243 15.9754 18.2724 17.7488 18.996C18.5334 19.2808 18.9826 18.3525 19.7618 18.514C20.0795 18.5804 21.5892 19.7505 21.9884 20.1592V20.1592C22.1616 20.3365 22.3123 20.5563 22.3328 20.8041C22.3636 21.677 21.0148 22.8553 20.7518 23.0059C20.1315 23.4502 19.3222 23.442 18.3356 22.9833C15.5824 21.8379 11.1826 17.5213 10.0159 14.6644C9.56946 13.6833 9.53934 12.8686 9.99329 12.249Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.7103 10.8333C20.1783 11.1073 22.1269 13.054 22.4043 15.5213"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.7103 13.1953C18.8903 13.4253 19.8123 14.3473 20.0423 15.5273"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_1"
                x1="1.54839"
                y1="1.81818"
                x2="35.8145"
                y2="17.7432"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#618967" />
                <stop offset="1" stop-color="#72A479" />
              </linearGradient>
            </defs>
          </svg>
          Контакты: 8 (917) 768 84 32
        </div>
        <Button variant="contained" color="success" onClick={showDrawer}>
          Корзина
        </Button>
      </div>
      <Drawer
        size="large"
        placement="right"
        onClose={closeDrawer}
        visible={visible}
      >
        Корзина пуста(
      </Drawer>
      <div className="sliderCont">
        <div className="slider"></div>
      </div>
      <div className="menu">
        <ToggleButtonGroup
          color="success"
          value={alignment}
          exclusive
          onChange={handleChange}
          size="large"
        >
          <ToggleButton value="Холодные закуски" className="coldSneaks">
            Холодные закуски
          </ToggleButton>
          <ToggleButton value="Горячие закуски">Горячие закуски</ToggleButton>
          <ToggleButton value="Мясные блюда">Мясные блюда</ToggleButton>
          <ToggleButton value="Супы">Супы</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="head" id="coldSneaks">
        <h1 className="ColdSnakes">Холодные закуски</h1>
      </div>

      <div className="coldSnacks">
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                background="black"
              >
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
      </div>

      <div className="head">
        <h1 name="HotSneaks">Горячие закуски</h1>
      </div>

      <div className="coldSnacks">
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                background="black"
              >
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="head">
        <h1 name="Meat">Мясные блюда</h1>
      </div>

      <div className="coldSnacks">
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                background="black"
              >
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="head">
        <h1 name="soups">Супы</h1>
      </div>

      <div className="coldSnacks">
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                background="black"
              >
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#494544" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="./images/menu1.jpg"
              alt="Ягненок"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ягненок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="success">
              В корзину
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default App;

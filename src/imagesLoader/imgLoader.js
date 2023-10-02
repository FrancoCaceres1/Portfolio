/* eslint-disable no-unused-vars */
import C from ".././assets/images/skills/c.png";
import CPlus from ".././assets/images/skills/c-plus.png";
import Js from ".././assets/images/skills/js.png";
import Ts from ".././assets/images/skills/ts.png";
import Webpack from ".././assets/images/skills/webpack.png";
import PostgreSql from ".././assets/images/skills/postgresql.png";
import MySql from ".././assets/images/skills/mysql.png";
import Css from ".././assets/images/skills/css.png";
import Html from ".././assets/images/skills/html.png";
import Node from ".././assets/images/skills/node.png";
import Sequelize from ".././assets/images/skills/sequelize.png";
import Express from ".././assets/images/skills/express.png";
import Mui from ".././assets/images/skills/mui.png";
import Sass from ".././assets/images/skills/sass.png";
import Php from ".././assets/images/skills/php.png";
import ReactJs from ".././assets/images/skills/react.png";
import ButtonA from ".././assets/images/buttons/a-button.png";
import ButtonB from ".././assets/images/buttons/b-button.png";
import SoyPuebla from ".././assets/images/projects/soy-puebla-1.png";
import Countries from ".././assets/images/projects/countries-api-1.png";
import Rym from ".././assets/images/projects/rym-api-1.png";
import Edm from ".././assets/images/projects/festival-1.png";
import rym from ".././assets/images/projects/rym-api.png";
import soypuebla from ".././assets/images/projects/soy-puebla.png";
import edm from ".././assets/images/projects/festival.png";
import countries from ".././assets/images/projects/countries-api.png";
import Www from ".././assets/images/icons/www.png";
import Download from ".././assets/images/icons/download.png";
import PixelArt1 from ".././assets/images/character/character-1.png";
import PixelArt2 from ".././assets/images/character/character-run-1.png";
import PixelArt3 from ".././assets/images/character/character-run-2.png";
import PixelArt4 from ".././assets/images/character/character-run-side.png";
import PixelArt5 from ".././assets/images/character/character-side.png";
import Grass from ".././assets/images/stage/grass-2.png";
import Arrow from ".././assets/images/stage/arrow.png";
import LinkedIn from ".././assets/images/icons/linkedin.png";
import Github from ".././assets/images/icons/github.png";
import Config from ".././assets/images/icons/config.png";
import Start from ".././assets/images/buttons/start.png";
import DownRow from ".././assets/images/buttons/down-row.png";
import UpRow from ".././assets/images/buttons/up-row.png";
import Max from ".././assets/images/buttons/max.png";
import Min from ".././assets/images/buttons/min.png";
import Warning from ".././assets/images/icons/warning.png";

export const imgLoader = () => {
  const imageUrls = [
    Config,
    ButtonA,
    ButtonB,
    Download,
    UpRow,
    DownRow,
    Start,
    Github,
    LinkedIn,
    C,
    CPlus,
    Js,
    Ts,
    Webpack,
    PostgreSql,
    MySql,
    Css,
    Html,
    Node,
    Sequelize,
    Express,
    Mui,
    Sass,
    Php,
    ReactJs,
    SoyPuebla,
    Countries,
    Rym,
    rym,
    Edm,
    soypuebla,
    edm,
    countries,
    Www,
    PixelArt1,
    PixelArt2,
    PixelArt3,
    PixelArt4,
    PixelArt5,
    Grass,
    Arrow,
    Max,
    Min,
    Warning,
  ];
  const preloadImages = (imageUrls) => {
    imageUrls.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  };
  preloadImages(imageUrls);
  return { imageUrls };
};

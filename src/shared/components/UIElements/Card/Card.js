import CSSTransition from "react-transition-group/CSSTransition";
import classes from "./Card.module.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Card = (props) => {

  return (
      <div
        className={`${classes.card}`}
        style={{
          maxWidth: props.maxWidth ? props.maxWidth : "",
          height: props.height ? props.height : "" }}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </div>
  );
};

export default Card;

/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/data scientist.jpg";

const imageAltText = "avatar of a Data Scientist";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Meet Choo, my AI alter ego",
    description:
      " This AI image was created using DALL-E text-to-image AI. I asked it to produce a profile image of a data scientist who is a runner. Click here to see his sister Shewie.",
    url: "https://github.com/Clissold42/images/blob/main/Shewie.png",
  },
  {
    title: "Hidden Value In Unstructured Data",
    description:
      "Accident Severity on Interstate Highways. This work aims to show relationships between variables that use the free text or are unstructured fields",
    url: "https://www.kaggle.com/code/darylb/accident-severity-on-interstate-highways-by-choo",
  },
  {
    title: "My Resume",
    description:
      "I specialise in data and report-building for further details regarding my skills and experience, please refer to my Resume.",
    url: "https://github.com/Clissold42/images/blob/main/DB%20Resume%20-%201%20Page.pdf",
  },
  {
    title: "Azure Machine Learning",
    description:
      "I regularly build models in Azure. See an example of one of the training pipelines I've built.",
    url: "https://github.com/Clissold42/images/blob/main/pipeline.jpg",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

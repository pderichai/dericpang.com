import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PreviouslyBlurbs from "../components/previously-blurbs";
import Publications from "../components/publications";
import Projects from "../components/projects";
import BlogPosts from "../components/blog-posts";
import ProfilePic from "../components/profile-pic";
import resume from "../assets/pdfs/resume.pdf";

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Container className="mt-4">
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="text-center">
                <ProfilePic />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col className="my-auto">
                <div id="about-content">
                  <h3 className="text-center">Hi! I'm Deric.</h3>
                  <p className="text-justify">
                    I'm a software engineer at Google working on commonsense
                    knowledge and reasoning. I'm interested in natural language
                    processing, machine learning, and software engineering.
                    Here's my <a href={resume}>resume</a>.
                  </p>
                  <p className="text-justify">
                    Outside of computer science, I enjoy playing violin and
                    tennis.
                  </p>
                  <PreviouslyBlurbs />
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="mt-4">
            <Tab.Container defaultActiveKey="publications-content">
              <Nav justify variant="tabs" className="flex-column flex-md-row">
                <Nav.Item>
                  <Nav.Link
                    id="publications-tab"
                    className="h3"
                    eventKey="publications-content"
                    aria-selected="true"
                    aria-controls="publications-content"
                  >
                    Publications
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    id="projects-tab"
                    className="h3"
                    eventKey="projects-content"
                    aria-selected="false"
                    aria-controls="projects-content"
                  >
                    Projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    id="blog-tab"
                    className="h3"
                    eventKey="blog-content"
                    aria-selected="true"
                    aria-controls="blog-content"
                  >
                    Blog
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane
                  id="blog-content"
                  eventKey="blog-content"
                  aria-labelledby="blog-tab"
                >
                  <BlogPosts />
                </Tab.Pane>

                <Tab.Pane
                  id="projects-content"
                  eventKey="projects-content"
                  aria-labelledby="projects-tab"
                >
                  <Projects />
                </Tab.Pane>
                <Tab.Pane
                  id="publications-content"
                  eventKey="publications-content"
                  aria-labelledby="publications-tab"
                >
                  <Publications />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Container>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default HomePage;

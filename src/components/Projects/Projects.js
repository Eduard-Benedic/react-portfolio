import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Projects.css";

import { Consumer } from "../../context";
import CardWrapper from "./Card/CardWrapper";

export default class Projects extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <section className="projects" id="projects">
              <Tabs>
                <TabList>
                  <Tab>
                    <h3>CSS and Bootstrap</h3>
                  </Tab>
                  <Tab>
                    <h3>JavaScript</h3>
                  </Tab>
                  <Tab>
                    <h3>React</h3>
                  </Tab>
                </TabList>

                {value.cards.map(card => (
                  <TabPanel>
                    <CardWrapper card={card} />
                  </TabPanel>
                ))}
              </Tabs>
            </section>
          );
        }}
      </Consumer>
    );
  }
}

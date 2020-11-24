import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';

export default class ProjectInfo extends Component {
  render() {
    return (
      <Item>
        <Item.Image size="small" src={this.props.proj_img}/>
        <Item.Content>
          <Item.Header style={{ color: '#d5edf2' }}>{this.props.project.name}</Item.Header>
          <Item.Meta style={{ color: '#d5edf2' }}>
            {this.props.project.short_description}
          </Item.Meta>
        </Item.Content>
      </Item>
    );
  }
}
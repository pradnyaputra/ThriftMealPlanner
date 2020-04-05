import React, {Component} from "react";
import {Card, Modal, Button} from "antd";
import {
  ExpandAltOutlined,
  PlusOutlined,
  StarOutlined,
  StarFilled
} from "@ant-design/icons";
import "./MealCard.scss";
import MealModal from "../MealModal/MealModal";

const {Meta} = Card;

export default class MealCard extends Component {
  state = {
    loading: false,
    visible: false,
    favourited: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    let current = this.state.favourited;
    this.setState({favourited: !current});
    this.setState({visible: false});
    this.props.addRemoveFav(this.props.recipe);
  };

  handleCancel = () => {
    this.setState({visible: false});
  };

  handleFavourited = () => {
    let current = this.state.favourited;
    this.setState({favourited: !current});
    this.props.addRemoveFav(this.props.recipe);
  };

  render() {
    const {visible, loading} = this.state;
    return (
        <Card
            style={{width: 300}}
            cover={
              <img
                  alt={this.props.recipe.title}
                  src={`https://spoonacular.com/recipeImages/${this.props.recipe.image}`}
                  className="meal-image"
              />
            }
            actions={[
              this.state.favourited
                ? (<StarFilled key="star" onClick={this.handleFavourited}/>)
                : (<StarOutlined key="star" onClick={this.handleFavourited}/>),
              <PlusOutlined key="plus"/>,
              <ExpandAltOutlined key="expand" onClick={() => this.showModal()}/>
            ]}
        >
          <Meta
              title={this.props.recipe.title}
              description={`Ready in ${this.props.recipe.readyInMinutes} Minutes`}
          />
          <Modal
              visible={visible}
              title={this.props.recipe.title}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>
                  Back
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                  {this.state.favourited
                    ? "Remove from Favourites"
                    : "Add to Favourites"}
                </Button>,
              ]}
          >
            {/*<img*/}
            {/*    alt={this.props.recipe.title}*/}
            {/*    src={`https://spoonacular.com/recipeImages/${this.props.recipe.image}`}*/}
            {/*    className="meal-image"*/}
            {/*/>*/}
            <p dangerouslySetInnerHTML={{__html: this.props.recipe.summary}}></p>
          </Modal>
        </Card>
    );
  }
}

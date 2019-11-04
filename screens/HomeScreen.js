import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight,ImageBackground ,Dimensions, FlatList
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import Animation from 'lottie-react-native';
import anim from '../icons/data.json';
import { getNews } from "../news";
import Article from "../Article";

import { ThemeProvider } from 'react-native-elements';
console.disableYellowBox = true;


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { articles: [], refreshing: true };
        this.fetchNews = this.fetchNews.bind(this);
      }
    
      componentDidMount() {
        this.fetchNews();
      }
    
      fetchNews() {
        getNews()
          .then(articles => this.setState({ articles, refreshing: false }))
          .catch(() => this.setState({ refreshing: false }));
      }
    
      handleRefresh() {
        this.setState(
          {
            refreshing: true
          },
          () => this.fetchNews()
        );
      }

    render() {
        return (
            <View>
                <HeaderComponent {...this.props} /> 
                <FlatList
                    data={this.state.articles}
                    renderItem={({ item }) => <Article article={item} />}
                    keyExtractor={item => item.url}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh.bind(this)}
                />
            </View>
        );
    }
}
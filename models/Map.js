import React,{Component} from 'react'
import Constants from '../Constants'
export default class Map {

    static Data;

    static async getMap() {
        await fetch(Constants.IP_ADDRESS+'/site')
        .then(response => response.json())
        .then(sites => Data=sites)
        return Data;
    }
    
}